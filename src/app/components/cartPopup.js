import React from "react";
import { useCart } from "./cart";

const CartPopup = ({ closePopup }) => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="w-full md:w-[700px] lg:w-[900px] max-h-screen bg-white p-4 md:p-11 rounded-[20px] gap-[16px] overflow-y-auto">
        <h1 className="text-[#364A63] text-[22px] leading-[24px] font-bold">
          Your Cart
        </h1>
        <div className="w-full max-h-screen">
          {cart.length === 0 ? (
            <p className="text-[#8091A7]">Your cart is empty.</p>
          ) : (
            cart.map((product, index) => (
              <div
                key={index}
                className="w-full h-[80px] items-center justify-center flex py-2 border-b gap-2 text-[14px] leading-[23.1px] text-[#364A63]"
              >
                <div className="w-full h-[80px] flex items-center gap-2 sm:gap-4 mr-6">
                  <img
                    src={product.image}
                    className="w-8 md:w-12 h-9 md:h-12 rounded "
                    alt="Product"
                  />
                  <span className="text-[12px] ">{product.title}</span>
                </div>

                <div className="w-[20px] font-bold">{product.quantity}</div>
                <div className="w-[60px] font-bold text-right">
                  ${(product.price * product.quantity).toFixed(2)}
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="text-white ml-2 rounded bg-red-500 w-[80px] h-[35px]"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
        <div className="flex justify-between text-[#373737] pX-4 md:pX-11 font-bold text-lg mt-4">
          <div className="text-[16px]">Total</div>
          <div className="flex gap-[90px] text-[14px]">
            <div>{cart.length}</div>
            <div>${totalPrice.toFixed(2)}</div>
          </div>
        </div>
        <div className="flex justify-end gap-[20px] mt-4">
          <button
            onClick={closePopup}
            className="whitespace-nowrap w-[152px] h-[36px] rounded-[3px] border border-[#DBDFEA] py-2 px-[18px] gap-[10px] text-[#364A63] text-[13px] leading-[20px] tracking-[0.26px]"
          >
            Continue Shopping
          </button>
          <button className="w-[94px] h-[36px] rounded-[3px] bg-[#6576FF] text-white border border-[#DBDFEA] py-2 px-[18px] gap-[10px] text-[13px] leading-[20px] tracking-[0.26px]">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
