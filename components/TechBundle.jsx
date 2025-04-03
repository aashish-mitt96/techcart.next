"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

const TechBundle = () => {
  const { products } = useAppContext();
  const bundleProducts = products.slice(0, 3);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const toggleProduct = (product) => {
    setSelectedProducts((prev) =>
      prev.some((p) => p._id === product._id)
        ? prev.filter((p) => p._id !== product._id)
        : [...prev, product]
    );
  };

  const totalPrice = selectedProducts.reduce((sum, item) => sum + item.offerPrice, 0);
  const discount = selectedProducts.length >= 2 ? totalPrice * 0.1 : 0;
  const finalPrice = totalPrice - discount;

  return (
    <div className="w-full bg-gray-900 py-16 text-white relative">
      <div className="max-w-5xl mx-auto px-6 relative">
        
        {/* Order Summary - Compact & Top Right */}
        <div className="absolute top-4 right-4 bg-gray-800 px-4 py-2 rounded-lg shadow-md text-sm flex flex-col items-end">
          <span className="text-yellow-400 font-semibold">Total: ${totalPrice.toFixed(2)}</span>
          <span className="text-green-400 text-xs">- ${discount.toFixed(2)} Discount</span>
          <span className="text-lg font-bold text-white">Final: ${finalPrice.toFixed(2)}</span>
        </div>

        {/* Header */}
        <h2 className="text-4xl font-extrabold text-center mb-4">Build Your Tech Bundle 🎁</h2>
        <p className="text-center text-gray-400 text-lg mb-8">
          Select at least <span className="text-yellow-400 font-bold">2 items</span> to get <span className="text-green-400 font-bold">10% OFF</span>!
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bundleProducts.map((product) => (
            <div
              key={product._id}
              className={`relative group bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300 transform ${
                selectedProducts.some((p) => p._id === product._id)
                  ? "border-2 border-yellow-400 scale-105 shadow-yellow-500"
                  : "hover:scale-105 hover:shadow-lg hover:shadow-gray-700"
              }`}
              onClick={() => toggleProduct(product)}
            >
              <div className="relative w-full h-40 rounded-lg overflow-hidden">
                <Image src={product.image[0]} alt={product.name} layout="fill" objectFit="cover" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-400 text-sm truncate">{product.description}</p>
              <p className="mt-2 text-xl font-bold text-yellow-400">${product.offerPrice}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechBundle;
