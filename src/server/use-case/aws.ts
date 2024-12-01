import { S3Client, PutObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { env } from '@/lib/env';
import Chance from "chance"

const chance = Chance()

const s3Client = new S3Client({
    region: env.AWS_BUCKET_REGION,
    credentials: {
        accessKeyId: env.AWS_ACCESS_KEY_ID,
        secretAccessKey: env.AWS_ACCESS_SECRET_KEY,
    },
});


function generateFileName(contentType: string) {
    const randomWords = Array.from({ length: 6 }, () => chance.word()).join('-');
    const dateString = new Date().toISOString().replace(/[:.]/g, '-');
    const fileExtension = contentType.split('/')[1];
    return `${randomWords}-${dateString}.${fileExtension}`;
}

export const getPutObjectPreSignedUrl = async (contentType: string) => {
    try {
        const params = {
            Bucket: env.AWS_IMAGE_UPLOAD_BUCKET_NAME,
            Key: `images/${generateFileName(contentType)}`,
            ContentType: contentType,
        };

        const command = new PutObjectCommand(params);
        const url = await getSignedUrl(s3Client, command)
        return {
            key: params.Key,
            url: url,
        };
    } catch (error) {
        console.error('Error uploading avatar:', error);
        throw error;
    }
}

export const listAllObjectsByBucketNameUseCase = async (bucketName: string) => {
    try {
        const command = new ListObjectsV2Command({
            Bucket: bucketName,
        });
        const result = await s3Client.send(command);
        return result.Contents; // Contains the list of objects
    } catch (error) {
        console.error("Error fetching objects:", error);
        throw error;
    }
};