import { z } from "zod";

export const packageSchema = z.object({
  name: z.string().min(1, "Paket adı zorunludur"),
  type: z.enum(["ELITE", "PREMIUM", "DELUXE"], {
    required_error: "Lütfen bir paket tipi seçin",
  }),
  startDate: z.date({
    required_error: "Başlangıç tarihi zorunludur",
  }),
  endDate: z.date({
    required_error: "Bitiş tarihi zorunludur",
  }).refine((date) => date > new Date(), {
    message: "Bitiş tarihi gelecekte bir tarih olmalıdır",
  }),
  description: z.string().min(10, "Açıklama en az 10 karakter olmalıdır"),
});

export type PackageFormValues = z.infer<typeof packageSchema>; 