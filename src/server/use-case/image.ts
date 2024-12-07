import { env } from "@/lib/env";
import { getImagesFrom24Hrs, insertNewImage } from "@/server/data-access/image"

export const getImagesFrom24HrsUseCase = async () => {
    const images = await getImagesFrom24Hrs()
    const modImages = images.map(({ objectKey, imageId, upvote, createdAt }) => {
        const src = `https://${env.NEXT_PUBLIC_CLOUDFRONT_DOMAIN}/${objectKey}`;
        return { imageId, src, upvote, timestamp: { uploadedAt: createdAt } };
    });
    return modImages;
}

export const insertNewImageUseCase = async (objectKey: string) => {
    return insertNewImage(objectKey)
}