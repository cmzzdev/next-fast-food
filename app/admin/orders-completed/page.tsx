"use client";
import useSWR from "swr";
import Logo from "@/components/ui/Logo";
import { OrderWithProducts } from "@/src/types";
import LatestOrderItem from "@/components/order/LatestOrderItem";

export default function OrdersCompletedPage() {
  const url = "/admin/orders-completed/api";
  const fetcher = () =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data);

  // refresh every second if there are any changes to auto update, becarful the amount of queries to DB
  const { data, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
    refreshInterval: 1000,
    revalidateOnFocus: false,
  });

  if (isLoading) return <p>Loading...</p>;
  if (data)
    return (
      <>
        <h1 className="text-center mt-20 text-6xl font-black">
          Orders completed
        </h1>
        <Logo />
        {data.length ? (
          <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto mt-10">
            {data.map((order) => (
              <LatestOrderItem key={order.id} order={order} />
            ))}
          </div>
        ) : (
          <p className="text-center my-10">
            There are not orders completed yet
          </p>
        )}
      </>
    );
}
