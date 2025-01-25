import EditProductForm from "@/components/product/EditProductForm";
import ProductForm from "@/components/product/ProductForm";
import GoBackButton from "@/components/ui/GoBackButton";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import { notFound } from "next/navigation";

async function getProductById(id: number) {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });
  if (!product) {
    notFound();
  }
  return product;
}

export default async function EditProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const product = await getProductById(+id);
  return (
    <>
      <Heading>Edit Product: {product.name}</Heading>
      <GoBackButton />
      <EditProductForm>
        <ProductForm product={product} />
      </EditProductForm>
    </>
  );
}
