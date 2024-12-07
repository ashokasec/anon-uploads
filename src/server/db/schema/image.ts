import mongoose, { InferSchemaType } from "mongoose";
import { init } from '@paralleldrive/cuid2';

const cuid = init({ length: 10 });

const imageSchema = new mongoose.Schema(
    {
        imageId: { type: String, default: cuid() },
        objectKey: { type: String, required: true },
        upvote: { type: Number, default: 0 }
    },
    { timestamps: true }
);

imageSchema.index({ imageId: 1 }, { unique: true });
imageSchema.index({ objectKey: 1 }, { unique: true });

export type ImageType = InferSchemaType<typeof imageSchema>;

// Includes MongoDB ObjectId
export type DeafaultImageType = ImageType & {
    _id: mongoose.Types.ObjectId;
    __v: number;
};

export const Image = mongoose.models.Image as mongoose.Model<DeafaultImageType> || mongoose.model<DeafaultImageType>("Image", imageSchema);