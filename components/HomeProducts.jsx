import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";
import { motion } from "framer-motion";

const HomeProducts = () => {
  const { products, router } = useAppContext();

  return (
    <section className="flex flex-col items-center pt-16 pb-14 px-6 md:px-12 lg:px-20">
      {/* Section Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Popular Products
      </motion.h2>
      
      {/* Product Grid */}
      <div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-8 w-full max-w-7xl"
      >
        {products.map((product, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
      
      {/* See More Button */}
      <motion.button
        onClick={() => router.push('/all-products')}
        className="mt-8 px-12 py-3 text-lg font-medium border border-gray-300 rounded-lg text-gray-700 shadow-md bg-white hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        See More
      </motion.button>
    </section>
  );
};

export default HomeProducts;