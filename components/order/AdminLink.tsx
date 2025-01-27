"use client";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
export default function AdminLink() {
  return (
    <Link
      href={`/admin`}
      className="mt-10 flex items-center justify-center hover:text-amber-400"
    >
      <LockClosedIcon height={25} />
      <div>ADMIN PAGE</div>
    </Link>
  );
}
