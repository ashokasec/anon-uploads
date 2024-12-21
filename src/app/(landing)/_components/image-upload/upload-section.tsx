"use client";

import { useState, ChangeEvent } from "react";
import { Upload } from "lucide-react";
import { useServerAction } from "zsa-react";
import {
  getPutObjectPreSignedUrlAction,
  insertNewImageAction,
} from "../../action";
import imageCompression from "browser-image-compression";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

function validateFile(file: File) {
  const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  const maxFileSize = 2.5 * 1024 * 1024; // 2.5 MB
  if (!allowedTypes.includes(file.type)) {
    throw new Error(
      "Invalid file type. Only images (JPEG, PNG, WebP, GIF) are allowed."
    );
  }

  if (file.size > maxFileSize) {
    throw new Error("File size exceeds the 2.5MB limit.");
  }

  return true;
}

export default function UploadSection() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);

  const { execute: insertNewImageExecute } =
    useServerAction(insertNewImageAction);

  const {
    execute,
    error: gPOPSUerror,
    data,
  } = useServerAction(getPutObjectPreSignedUrlAction, {
    onError() {
      console.error(gPOPSUerror);
      setUploading(false);
      return;
    },
    async onSuccess() {
      if (!file) {
        setError("No file selected for upload.");
        return;
      }

      if (!data) return;

      try {
        // Perform the PUT request using Axios
        const uploadResponse = await axios.put(data.uploadUrl, file, {
          headers: {
            "Content-Type": file.type,
          },
        });

        // Check for a successful response (status in 2xx range)
        if (uploadResponse.status < 200 || uploadResponse.status >= 300) {
          throw new Error("Failed to upload the file.");
        }

        // Perform additional actions after a successful upload
        await insertNewImageExecute({ objectKey: data.filename });

        // alert("File uploaded successfully!");
        toast("File uploaded successfully!")
      } catch (error) {
        console.error("Error uploading file:", error);
        setError("Failed to upload the file.");
      }
    },
  });

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      try {
        setError(null);
        validateFile(selectedFile);

        const compressedFile = await imageCompression(selectedFile, {
          maxSizeMB: 2.5,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        });

        setFile(compressedFile);

        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(compressedFile);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message); // Safely access the message
        } else {
          setError("An unexpected error occurred."); // Fallback for unknown error shapes
        }
        setPreview(null);
        setFile(null);
      }
    } else {
      setPreview(null);
      setError(null);
      setFile(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError("No file selected for upload.");
      return;
    }
    try {
      setUploading(true);
      setError(null);
      await execute({
        filename: file.name,
        contentType: file.type,
        fileSize: file.size,
      });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || "An error occurred during upload.");
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="imageUpload"
        disabled={uploading}
      />
      <div className={`grid ${preview && "grid-cols-2 gap-x-4"}`}>
        <label
          htmlFor="imageUpload"
          className="flex flex-col items-center justify-center w-full h-fit border-2 border-gray-600 border-dashed rounded-lg cursor-pointer duration-300 group-hover:border-blue-500"
        >
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="object-cover w-full h-full rounded-lg"
            />
          ) : (
            <div className="flex flex-col items-center justify-center py-6">
              <Upload className="w-6 h-6 mb-3 text-gray-400 transition-colors duration-300 group-hover:text-blue-500" />
              <p className="mb-2 text-sm text-gray-400 transition-colors duration-300 group-hover:text-blue-500">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500">
                SVG, PNG, JPG or GIF (MAX. 2.5MB)
              </p>
            </div>
          )}
        </label>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        {preview && (
          <div>
            <div className="text-[15px] mt-1.5">Name: {file?.name}</div>
            <div className="flex space-x-2 mt-4">
              <Button
                onClick={handleUpload}
                disabled={uploading}
                variant={"outline"}
                className="bg-blue-600  border !border-blue-600 text-white hover:text-white hover:bg-blue-500"
              >
                {uploading ? "Uploading..." : "Upload Image"}
              </Button>
              <Button
                onClick={() => {
                  if (uploading) return;
                  setPreview(null);
                  setFile(null);
                  setError(null);
                }}
                disabled={uploading}
                variant={"destructive"}
                className="bg-red-400/15 hover:bg-red-400/30 border text-red-500 !border-red-600"
              >
                Remove Image
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
