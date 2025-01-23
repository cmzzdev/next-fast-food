import ProductSearchForm from "@/components/product/ProductSearchForm";
import ProductTable from "@/components/product/ProductTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function searcProducts(searchTerm: string) {
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: searchTerm,
        mode: "insensitive",
      },
    },
    include: {
      category: true,
    },
  });
  return products;
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const products = await searcProducts(searchParams.q);
  return (
    <>
      <Heading>
        Search results: <span className="font-black">{searchParams.q}</span>
      </Heading>
      <div className="flex flex-col lg:flex-row lg:justify-end gap-5">
        <ProductSearchForm />
      </div>
      {products.length ? (
        <ProductTable products={products} />
      ) : (
        <p className="text-center text-lg">No results</p>
      )}
    </>
  );
}
