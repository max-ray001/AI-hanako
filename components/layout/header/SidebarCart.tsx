"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cartItemsData } from "@/public/data/cart-items";

const SidebarCart = ({ isCartOpen, setIsCartOpen }: any) => {
  const [cartItems, setCartItems] = useState(cartItemsData);

  const increaseQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity < 100
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const deleteItem = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <>
      <div
        className={"sidebar-cart" + (isCartOpen ? " sidebar-cart-active" : " ")}
      >
        <div className="sidebar-cart__inner">
          <button className="close-cart" onClick={() => setIsCartOpen(false)}>
            <i className="bi bi-x-lg close-icon"></i>
          </button>
          <h2>
            Shopping Bag
            <span className="count-item">{cartItems.length}</span>
          </h2>
          <div className="cart-items">
            {cartItems.map((item) => {
              return (
                <div className="cart-item-single" key={item.id}>
                  <div className="cart-item-thumb">
                    <Link href="product-single">
                      <Image src={item.productImg} alt="Image" priority />
                    </Link>
                  </div>
                  <div className="cart-item-content">
                    <h6 className="title-animation">
                      <Link href="product-single">{item.name}</Link>
                    </h6>
                    <p className="price">
                      $
                      <span className="item-price">
                        {item.price.toFixed(2)}
                      </span>
                    </p>
                    <div className="measure">
                      <button
                        aria-label="decrease item"
                        className="quantity-decrease"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <span className="item-quantity">{item.quantity}</span>
                      <button
                        aria-label="add item"
                        className="quantity-increase"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <button
                    aria-label="delete item"
                    className="delete-item"
                    onClick={() => deleteItem(item.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              );
            })}
          </div>
          <div
            className="empty-cart"
            style={{ display: cartItemsData.length > 0 ? "none" : "block" }}
          >
            <h5>Your cart is empty</h5>
            <Link href="shop">Add Products</Link>
          </div>
          <div className="totals">
            <div className="subtotal">
              <span className="label">Subtotal:</span>
              <span className="amount ">
                $
                <span className="total-price">
                  {calculateTotalPrice().toFixed(2)}
                </span>
              </span>
            </div>
          </div>
          <div className="navbar__mobile-options">
            <button
              className="open-cart"
              aria-label="selected products"
              title="twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg>
            </button>
            <button
              className="open-search"
              aria-label="search products"
              title="line"
            >
              <i className="bi bi-line"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          "cart-backdrop" + (isCartOpen ? " cart-backdrop-active" : " ")
        }
        onClick={() => setIsCartOpen(false)}
      ></div>
    </>
  );
};

export default SidebarCart;
