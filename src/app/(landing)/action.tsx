"use server";

import { authenticatedAction } from "@/server/procedures/auth";
import {
  getImagesFrom24HrsUseCase,
  insertNewImageUseCase,
} from "@/server/use-case/image";
import { getPutObjectPreSignedUrlUseCase } from "@/server/use-case/image-operations";
import { z } from "zod";
import { createServerAction } from "zsa";

export const getPutObjectPreSignedUrlAction = authenticatedAction
  .createServerAction()
  .input(
    z.object({
      filename: z.string(),
      contentType: z.string(),
      fileSize: z.number(),
    })
  )
  .handler(async ({ input }) => {
    const { key, url } = await getPutObjectPreSignedUrlUseCase(
      input.contentType
    );
    return { filename: key, uploadUrl: url };
  });

export const getImagesFrom24HrsAction = createServerAction().handler(
  async () => {
    return getImagesFrom24HrsUseCase();
  }
);

export const insertNewImageAction = authenticatedAction
  .createServerAction()
  .input(
    z.object({
      objectKey: z.string(),
    })
  )
  .handler(async ({ input }) => {
    await insertNewImageUseCase(input.objectKey);
  });
