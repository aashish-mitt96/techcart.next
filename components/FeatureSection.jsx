"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

const FeaturedProducts = () => {
  const { products, router } = useAppContext();

  return (
    <div className="w-full px-6 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Trending Products</h2>

      {/* Marquee Component */}
      <Marquee speed={60} gradient={false} pauseOnHover={true} className="flex gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-72 p-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
            onClick={() => router.push("/product/" + product._id)}
          >
            <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
              <Image src={product.image[0]} alt={product.name} width={300} height={300} className="object-cover w-full h-full" />
            </div>
            <h3 className="mt-4 text-lg font-semibold truncate">{product.name}</h3>
            <p className="text-gray-600 text-sm truncate">{product.description}</p>
            <p className="mt-2 text-xl font-bold">${product.offerPrice}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default FeaturedProducts;
