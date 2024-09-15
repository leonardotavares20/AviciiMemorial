import { z } from "zod";

export const schemaFormHeader = z.object({
  email: z
    .string({ message: "Please enter an email." })
    .email({ message: "Please enter a valid email." }),
  country: z.string({ message: "Please select a country." }),
  policy: z.enum(["on"], {
    required_error: "Please accept the privacy policy.",
  }),
});
