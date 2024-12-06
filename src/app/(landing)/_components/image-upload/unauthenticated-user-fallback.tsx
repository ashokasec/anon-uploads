import { Upload } from "lucide-react";
import React from "react";
import SignIn from "../auth/sign-in-button";

const UnauthenticatedUserFallback = () => {
  return (
    <>
      <div className="relative">
        <div className="flex flex-col items-center justify-center w-full h-fit border-2 border-gray-600 border-dashed rounded-lg cursor-pointer transition-all duration-300 group-hover:border-blue-500">
          <div className="flex flex-col items-center justify-center py-6">
            <Upload className="w-6 h-6 mb-3 text-gray-400 transition-colors duration-300 group-hover:text-blue-500" />
            <p className="mb-2 text-sm text-gray-400 transition-colors duration-300 group-hover:text-blue-500">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500">
              SVG, PNG, JPG or GIF (MAX. 2.5MB)
            </p>
          </div>
          <div className="absolute w-[calc(100%-8px)] bg-[#ffffff02] h-[calc(100%-8px)] rounded-lg backdrop-blur-[2px] grid place-content-center">
            <SignIn />
          </div>
        </div>
      </div>
      <p className="text-sm mt-8">
        Why do i need to sign-in if its a anonymous image upload?
      </p>
    </>
  );
};

export default UnauthenticatedUserFallback;
