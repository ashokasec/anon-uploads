import { env } from "@/lib/env";
import { getPutObjectPreSignedUrl, listAllObjectsByBucketNameUseCase } from "./aws";

const validImageTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];

export const getPutObjectPreSignedUrlUseCase = async (contentType: string) => {
    if (!validImageTypes.includes(contentType)) {
        throw new Error("Invalid image type, only the following types are allowed: " + validImageTypes.join(", "));
    }
    const { key, url } = await getPutObjectPreSignedUrl(contentType)
    return { key, url }
}

export const listAllImagesInLast24hrsUseCase = async () => {
    const images = await listAllObjectsByBucketNameUseCase(env.AWS_IMAGE_UPLOAD_BUCKET_NAME)
    if (!images) return []
    const desiredReturns = images.map((item) => {
        const src = `https://${env.NEXT_PUBLIC_CLOUDFRONT_DOMAIN}/${item.Key}`
        const lastModified = item.LastModified
        return { src, lastModified }
    })
    return desiredReturns
}