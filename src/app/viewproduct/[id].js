"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { fetchProductById } from "./api";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();
  const { id } = router.query; // Get the product id from the URL

  useEffect(() => {
    if (id) {
      const fetchProductDetails = async () => {
        try {
          const data = await fetchProductById(id); // Fetch the product by id
          setProduct(data);
          setLoading(false);
        } catch (err) {
          setError("Failed to fetch product details.");
          setLoading(false);
        }
      };

      fetchProductDetails();
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <div className="w-1/2">
          <img src={product.image} alt={product.title} className="w-full" />
        </div>
        <div className="w-1/2 pl-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-lg my-2">{product.description}</p>
          <h2 className="text-xl font-semibold">{`Price: $${product.price}`}</h2>
          <button className="mt-4 p-2 bg-[#7E53D4] text-white font-semibold">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
