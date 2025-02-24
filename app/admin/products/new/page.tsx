import AddProductForm from "@/components/product/AddProductForm";
import ProductForm from "@/components/product/ProductForm";
import Heading from "@/components/ui/Heading";

export default function CreateProductPage() {
  return (
    <>
      <Heading>New Product</Heading>
      <AddProductForm>
        <ProductForm />
      </AddProductForm>
    </>
  );
}
