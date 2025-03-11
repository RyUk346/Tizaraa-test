"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { fetchProducts } from "../viewproduct/api"; // Your fetch function for products

import { useCart } from "../components/cart";

export default function Product() {
  const [products, setProducts] = useState([]); // Ensure it's an empty array by default
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart(); // Get addToCart from the context

  const carouselRef = useRef();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 550 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 550, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts();
        setProducts(products || []); // Ensure it's an empty array if no products are returned
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Check for loading or error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Handle add to cart functionality
  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 }); // Default quantity is 1, or use a custom quantity logic
  };

  return (
    <>
      <div className="relative py-2 p-5 md:p-8 lg:p-10 bg-[#F6F5FD]">
        <div className="p-4 flex justify-between">
          <div>
            <h1 className="text-body text-[#7E53D4]">FEATURED PRODUCT</h1>
            <h1 className="text-h5 font-bold">New Arrivals</h1>
          </div>
          <div className="flex items-center">
            <button onClick={() => carouselRef.current.previous()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                color="#7E53D4"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path
                  d="M8 12L16 12M8 12C8 11.2998 9.9943 9.99153 10.5 9.5M8 12C8 12.7002 9.9943 14.0085 10.5 14.5"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button onClick={() => carouselRef.current.next()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                color="#7E53D4"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path
                  d="M16 12L8 12M16 12C16 12.7002 14.0057 14.0085 13.5 14.5M16 12C16 11.2998 14.0057 9.99153 13.5 9.5"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <Carousel
          responsive={responsive}
          ref={carouselRef}
          swipeable={true}
          infinite={true}
          autoPlay={true}
          focusOnSelect={true}
          autoPlaySpeed={3000}
          arrows={false}
          itemClass="carousel-item-padding-40-px"
          className="px-4"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[302px] h-[410px] bg-[#FFFFFF] z-10 gap-4"
            >
              <Link href={`/viewproduct/${product.id}`}>
                <div className="flex justify-center items-center cursor-pointer">
                  <div className="flex p-4 justify-center items-center w-[286px] h-[287px] bg-[#F6F5FD] mt-2 rounded-md">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-[220px] h-[250px]"
                    />
                  </div>
                </div>
              </Link>
              <div className="flex justify-between p-2 h-[54px]">
                <h1 className="text-[14px]">{product.title}</h1>
                <h1 className="font-semibold text-[19px] mr-1">{`$${product.price}`}</h1>
              </div>
              <div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="btn w-[286px] border-[1px] bg-white border-[#7E53D4] ml-2"
                >
                  <h1 className="text-[#7E53D4] font-semibold text-body">
                    Add to Cart
                  </h1>
                </button>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="flex justify-center items-center mt-8 ">
          <button className="btn w-[120px] h-[40px] text-body bg-[#7E53D4] text-[#FFFF]">
            See more
          </button>
        </div>
      </div>
    </>
  );
}
