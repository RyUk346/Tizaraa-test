"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import NavBar from "@/app/components/navbar";
import { CartProvider, useCart } from "@/app/components/cart";
import Footer from "@/app/components/footer";
import { fetchProductById } from "../api";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-1 text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} />
      ))}
      {hasHalfStar && <FaStarHalfAlt />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={i} className="text-gray-400" />
      ))}
    </div>
  );
};

const ProductDetailsContent = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart(); // Ensure CartProvider is wrapping this

  const [quantity, setQuantity] = useState(1); // State to track the selected quantity

  const params = useParams();
  const { productId } = params; // Get the product ID from the URL

  useEffect(() => {
    if (productId) {
      const fetchProductDetails = async () => {
        try {
          const data = await fetchProductById(productId); // Fetch the product by ID
          setProduct(data);
          setLoading(false);
        } catch (err) {
          setError("Failed to fetch product details.");
          setLoading(false);
        }
      };

      fetchProductDetails();
    }
  }, [productId]);

  // ✅ Prevents re-renders and ensures only 1 item is added per click
  const handleAddToCart = useCallback(() => {
    if (product) {
      addToCart({ ...product, quantity }); // Add the selected quantity of product
    }
  }, [addToCart, product, quantity]);

  // Function to increase quantity
  const increaseQuantity = () =>
    setQuantity((prevQuantity) => prevQuantity + 1);

  // Function to decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <div className="font-manrope">
        <div className="sticky top-0 z-50">
          <NavBar />
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="md:flex gap-y-2 mx-4 md:mx-8 lg:mx-16">
          <div className="md:w-1/2 pb-6 flex justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-w-[360px] min-[500px]:max-w-[500px]  max-h-[600px]"
            />
          </div>
          <div className="max-w-[400px] pl-4">
            <h1 className="text-4xl font-bold">{product.title}</h1>
            <h2 className="text-2xl font-semibold">
              {`Price: $${product.price}`}
            </h2>
            <p className="text-lg my-2">
              <span className="font-bold text-xl">Details:</span>{" "}
              {product.description}
            </p>
            <p className="text-lg my-2">
              <span className="font-bold text-xl">Category:</span>{" "}
              {product.category}
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold">Rating:</span>
              <StarRating rating={product.rating.rate} />
              <span className="text-lg">({product.rating.count} reviews)</span>
            </div>

            {/* Quantity selector */}
            <div className="flex items-center space-x-4 mt-4">
              <button
                onClick={decreaseQuantity}
                className="p-2 bg-[#7E53D4] text-white font-semibold rounded"
              >
                -
              </button>
              <span className="text-xl">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="p-2 bg-[#7E53D4] text-white font-semibold rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="btn h-[40px] text-body bg-[#7E53D4] text-[#FFFF] my-3"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Wrap everything in CartProvider to ensure context is available
const ProductDetails = () => {
  return (
    <CartProvider>
      <ProductDetailsContent />
    </CartProvider>
  );
};

export default ProductDetails;
