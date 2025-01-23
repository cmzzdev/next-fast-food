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

export const OrderIdSchema = z.object({
  orderId: z
    .string()
    .transform((value) => parseInt(value))
    .refine((value) => value > 0, {
      message: "Transform error, OrderIdSchema",
    }),
});

export const SearchSchema = z.object({
  search: z.string().trim().min(1, { message: "Search should not be empty" }),
});
