"use client";

import React from 'react';

export default function Automations() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Coming Soon!
        </h1>
        <p className="text-gray-600 mb-6">
          We're working hard to bring you something amazing.
        </p>
        <div className="animate-pulse">
          <div className="h-2 bg-gray-300 rounded mb-2"></div>
          <div className="h-2 bg-gray-300 rounded w-5/6 mb-2"></div>
          <div className="h-2 bg-gray-300 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  );
}