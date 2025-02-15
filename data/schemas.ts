import { z } from "zod";

export const logPageVisitRequestSchema = z.object({
  eipNo: z.number().int().positive(),
});

export type LogPageVisitRequest = z.infer<typeof logPageVisitRequestSchema>;

export const AISummaryRequestSchema = z.object({
  eipNo: z.number().int().positive(),
});

export type AISummaryRequest = z.infer<typeof AISummaryRequestSchema>;
