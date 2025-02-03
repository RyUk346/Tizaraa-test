This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# E-Commerce App

This is a simple E-Commerce web application that allows users to browse products, view details, add products to the cart, and view their cart in a popup. The application uses React, Next.js, and CSS for styling.

## Features:
- **Product listing**: Fetch products from an API and display them.
- **Product details**: Click on a product to view more information.
- **Cart functionality**: Add items to the cart and view them in a popup.
- **Popup for Cart**: Displays the total price, total quantity, and removes items from the cart.

## Project Structure

### 1. `NavBar.js`
- This component contains the navigation bar, which includes links to different sections like Home, Shop, Deals, and What's New.
- It also includes a Cart icon which displays the number of items in the cart and opens the Cart popup when clicked.

### 2. `Product.js`
- This is the component for displaying the products.
- Products are fetched from an API using `useEffect` and displayed in a carousel format.
- Each product includes an "Add to Cart" button to add the product to the cart.

### 3. `Cart Popup` (Integrated within `NavBar.js`)
- When the user clicks the cart icon, a popup is displayed with the list of items in the cart, their prices, quantities, and the total price.
- Users can continue shopping or checkout.

### 4. `api.js`
- This file contains the function to fetch the product data from the API (`fetchProducts`).

### 5. `App.js`
- This is the root component that integrates the `NavBar`, `Product`, and `Footer` components.

## Setup Instructions

### Prerequisites

Before you begin, ensure that you have the following installed on your machine:
- **Node.js** (v14 or higher)
- **npm** or **yarn** (npm is installed with Node.js)
