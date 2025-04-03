"use client";

import { useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.webp"
import image4 from "@/assets/image4.webp"


const FutureTech = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Foldable Gaming Laptop", votes: 12, image: image1 },
    { id: 2, name: "Holographic Smartphone", votes: 25, image: image2 },
    { id: 3, name: "AI-Powered Smart Glasses", votes: 18, image: image3 },
    { id: 4, name: "Wireless VR Headset", votes: 30, image: image4 }
  ]);

  const handleVote = (id) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, votes: product.votes + 1 } : product
    ));
  };

  return (
    <div className="w-full py-16 mx-auto p-8 bg-gray-900 text-white">
      <h1 className="text-4xl font-extrabold text-center mb-6">🚀 Future Tech Sneak Peek</h1>
      <p className="text-lg text-gray-400 text-center mb-10">
        Explore & vote for the most exciting tech innovations coming soon!
      </p>

      <Marquee gradient={true} gradientColor={[0, 0, 0]} speed={60} pauseOnHover={true}>
        {products.map((product) => (
          <div key={product.id} className="relative flex-none w-80 h-[300px] mx-4 bg-gray-800 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-700 to-transparent rounded-3xl"></div>

            {/* Using Next.js <Image> component */}
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-3xl opacity-70"
              width={320}
              height={300}
            />

            <div className="absolute bottom-0 p-6 w-full text-center">
              <h2 className="text-2xl font-semibold">{product.name}</h2>
              <p className="text-gray-300">
                Votes: <span className="font-bold text-blue-400">{product.votes}</span>
              </p>
              <button
                onClick={() => handleVote(product.id)}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 transition-all duration-300"
              >
                Vote Now
              </button>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default FutureTech;
