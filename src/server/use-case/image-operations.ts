import { getPutObjectPreSignedUrl } from "./aws";

const validImageTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];

export const getPutObjectPreSignedUrlUseCase = async (contentType: string) => {
    if (!validImageTypes.includes(contentType)) {
        throw new Error("Invalid image type, only the following types are allowed: " + validImageTypes.join(", "));
    }
    const { key, url } = await getPutObjectPreSignedUrl(contentType)
    return { key, url }
}