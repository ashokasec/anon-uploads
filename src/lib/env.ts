import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        MONGODB_URI: z.string().min(1),
        AWS_BUCKET_REGION: z
            .string()
            .min(1, "AWS_BUCKET_REGION is required.")
            .regex(
                /^[a-z]{2}-[a-z]+-\d$/,
                "AWS_BUCKET_REGION must be a valid AWS region format (e.g., us-east-1)."
            ),
        AWS_ACCESS_KEY_ID: z
            .string()
            .min(1, "AWS_ACCESS_KEY_ID is required.")
            .regex(
                /^[A-Z0-9]{16,32}$/,
                "AWS_ACCESS_KEY_ID must be 16-32 uppercase alphanumeric characters."
            ),
        AWS_ACCESS_SECRET_KEY: z
            .string()
            .min(1, "AWS_ACCESS_SECRET_KEY is required.")
            .regex(
                /^[A-Za-z0-9/+=]{40}$/,
                "AWS_ACCESS_SECRET_KEY must be a 40-character Base64-like string."
            ),
        AWS_IMAGE_UPLOAD_BUCKET_NAME: z
            .string()
            .min(1, "AWS_IMAGE_UPLOAD_BUCKET_NAME is required.")
            .regex(
                /^[a-z0-9.-]{3,63}$/,
                "AWS_IMAGE_UPLOAD_BUCKET_NAME must be a valid S3 bucket name (3-63 characters, lowercase, numbers, dots, or hyphens)."
            ),
        AUTH_GOOGLE_ID: z
            .string()
            .min(1, "AUTH_GOOGLE_ID is required."),
        AUTH_GOOGLE_SECRET: z
            .string()
            .min(1, "AUTH_GOOGLE_SECRET is required.")
    },
    client: {
        NEXT_PUBLIC_CLOUDFRONT_DOMAIN: z
            .string()
            .min(1, "NEXT_PUBLIC_CLOUDFRONT_DOMAIN is required.")
            .regex(
                /^[a-zA-Z0-9.-]+\.cloudfront\.net$/,
                "NEXT_PUBLIC_CLOUDFRONT_DOMAIN must be a valid CloudFront subdomain (e.g., example.cloudfront.net)."
            ),

        NEXT_PUBLIC_APP_URL: z
            .string()
            .min(1, "NEXT_PUBLIC_APP_URL is required.")
            .url("NEXT_PUBLIC_APP_URL must be a valid URL."),
    },
    runtimeEnv: {
        MONGODB_URI: process.env.MONGODB_URI,
        AWS_BUCKET_REGION: process.env.AWS_BUCKET_REGION,
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
        AWS_ACCESS_SECRET_KEY: process.env.AWS_ACCESS_SECRET_KEY,
        AWS_IMAGE_UPLOAD_BUCKET_NAME: process.env.AWS_IMAGE_UPLOAD_BUCKET_NAME,
        AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
        AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
        NEXT_PUBLIC_CLOUDFRONT_DOMAIN: process.env.NEXT_PUBLIC_CLOUDFRONT_DOMAIN,
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    },
});
