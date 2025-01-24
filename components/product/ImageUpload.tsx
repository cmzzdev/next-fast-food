"use client";
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { TbPhotoPlus } from "react-icons/tb";
import Image from "next/image";

export default function ImageUpload() {
  const [imageUrl, setImageUrl] = useState("");
  return (
    /* need cloudinary account to manage uploadPreset => https://cloudinary.com/*/
    <CldUploadWidget
      uploadPreset="nextfastfood"
      options={{ maxFiles: 1 }}
      onSuccess={(result, { widget }) => {
        if (result.event === "success") {
          widget.close();
          // @ts-expect-error secure_url type not matching  with type library next-cloudinary
          setImageUrl(result.info.secure_url);
        }
      }}
    >
      {({ open }) => (
        <>
          <div className="space-y-2">
            <label className="text-slate-800">Product image</label>
            <div
              className="relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100"
              onClick={() => open()}
            >
              <TbPhotoPlus size={50} />
              <p className="text-lg font-semibold">Add image</p>
              {imageUrl && (
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    fill
                    style={{ objectFit: "contain" }}
                    src={imageUrl}
                    alt="Product image"
                  />
                </div>
              )}
            </div>
          </div>

          <input type="hiden" name="image" value={imageUrl} />
        </>
      )}
    </CldUploadWidget>
  );
}
