import connect_db from "@/lib/connect-db";
import { Image as ImageSchema, DeafaultImageType } from "@/server/db/schema/image";

export async function getImagesFrom24Hrs() {
    await connect_db()
    const fromLast24Hrs = new Date().getHours() - 24
    const images = await ImageSchema.find({
        createdAt: { $gte: fromLast24Hrs },
    }).lean<DeafaultImageType[]>();
    return images
}

export async function insertNewImage(objectKey: string) {
    await connect_db()
    const image = new ImageSchema({ objectKey })
    await image.save()
    return true
}