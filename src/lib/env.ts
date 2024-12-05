import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        AWS_BUCKET_REGION: z.string().min(1),
        AWS_ACCESS_KEY_ID: z.string().min(1),
        AWS_ACCESS_SECRET_KEY: z.string().min(1),
        AWS_IMAGE_UPLOAD_BUCKET_NAME: z.string().min(1),
    },
    client: {
        NEXT_PUBLIC_CLOUDFRONT_DOMAIN: z.string().min(1),
        NEXT_PUBLIC_APP_URL: z.string().min(1),
    },
    runtimeEnv: {
        AWS_BUCKET_REGION: process.env.AWS_BUCKET_REGION,
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
        AWS_ACCESS_SECRET_KEY: process.env.AWS_ACCESS_SECRET_KEY,
        AWS_IMAGE_UPLOAD_BUCKET_NAME: process.env.AWS_IMAGE_UPLOAD_BUCKET_NAME,
        NEXT_PUBLIC_CLOUDFRONT_DOMAIN: process.env.NEXT_PUBLIC_CLOUDFRONT_DOMAIN,
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    },
});