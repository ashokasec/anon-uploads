"use server";

import {
  getPutObjectPreSignedUrlUseCase,
  listAllImagesInLast24hrsUseCase,
} from "@/server/use-case/image-operations";
import { z } from "zod";
import { createServerAction } from "zsa";

export const getPutObjectPreSignedUrlAction = createServerAction()
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

export const listAllImagesOfLast24hrsAction = createServerAction().handler(
  async () => {
    return listAllImagesInLast24hrsUseCase();
  }
);
