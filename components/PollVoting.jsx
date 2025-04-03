"use client";
import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Poll = () => {
  const [votes, setVotes] = useState({ Samsung: 0, Apple: 0, OnePlus: 0 });
  const [selectedVote, setSelectedVote] = useState(null);

  useEffect(() => {
    setVotes({
      Samsung: Math.floor(Math.random() * 100 + 50),
      Apple: Math.floor(Math.random() * 100 + 50),
      OnePlus: Math.floor(Math.random() * 100 + 50),
    });
  }, []);

  const totalVotes = votes.Samsung + votes.Apple + votes.OnePlus;

  const getPercentage = (brand) => {
    return totalVotes === 0
      ? 0
      : ((votes[brand] / totalVotes) * 100).toFixed(1);
  };

  const handleVote = (brand) => {
    if (selectedVote === brand) return;

    setVotes((prev) => {
      const updatedVotes = { ...prev };
      if (selectedVote) {
        updatedVotes[selectedVote] -= 1;
      }
      updatedVotes[brand] += 1;
      return updatedVotes;
    });

    setSelectedVote(brand);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-slate-300 -mt-16">
      {/* Heading Above the Container */}
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        📊 Best Flagship Phone of 2025
      </h2>

      {/* Main Container with Fixed Height */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-[1fr_686px] bg-white shadow-xl rounded-3xl overflow-hidden h-[386px]">
        
        {/* Left: Poll Section */}
        <div className="p-8 flex flex-col justify-center">
          <p className="text-gray-600 text-center md:text-left mb-6">
            Vote for your favorite brand and see live results!
          </p>

          {/* Voting Buttons */}
          <div className="space-y-4">
            {Object.keys(votes).map((brand) => (
              <button
                key={brand}
                className={`w-full py-3 px-6 text-lg font-semibold rounded-xl transition-all duration-300 flex justify-between items-center ${
                  selectedVote === brand
                    ? "bg-green-500 text-white shadow-lg scale-105"
                    : "bg-blue-500 text-white hover:bg-blue-600 hover:scale-105"
                }`}
                onClick={() => handleVote(brand)}
              >
                <span>{brand}</span>
                {selectedVote === brand && <span>✅</span>}
              </button>
            ))}
          </div>

          {/* Live Results */}
          <div className="mt-6 space-y-4">
            {Object.keys(votes).map((brand) => (
              <div key={brand} className="text-gray-800">
                <p className="font-medium mb-1">{brand} ({getPercentage(brand)}%)</p>
                <div className="w-full bg-gray-300 h-5 rounded-full overflow-hidden shadow-sm">
                  <div
                    className="h-full bg-green-500 transition-all duration-500 rounded-full"
                    style={{ width: `${getPercentage(brand)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-gray-700 text-lg font-semibold">
            Total Votes: {totalVotes}
          </p>
        </div>

        {/* Right: Image Section (Fixed Size) */}
        <div className="hidden md:flex items-center justify-center bg-gray-100 w-[686px] h-[386px]">
          <Image
            className="rounded-2xl shadow-lg"
            src={assets.comp}
            alt="comparison"
            width={640}
            height={400}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Poll;
