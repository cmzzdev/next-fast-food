import { prisma } from "@/src/lib/prisma";

export async function GET() {
  const orders = await prisma.order.findMany({
    where: {
      status: false,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });
  return Response.json(orders);
}

export async function POST() {
  /* your code here */
}

export async function PATCH() {
  /* your code here */
}
