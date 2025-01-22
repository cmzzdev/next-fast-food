import { z } from "zod";

export const OrderSchema = z.object({
  name: z.string().min(1, "Your name is required"),
  total: z.number().min(1, "There are order errors"),
  order: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      price: z.number(),
      quantity: z.number(),
      subtotal: z.number(),
    })
  ),
});
