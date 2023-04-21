import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartscreen, setcartscreen] = useState(false);

  const addItemtoCartHandler = (item) => {
    console.log(item);
    const newarr = items.map((val) => {
      if (item.name === val.name) {
        let xyz = val.quantity;
        const newquantity = Number(xyz) + Number(item.quantity);
        val.quantity = newquantity;
        return val;
      } else {
        return val;
      }
    });

    let bool = false;
    for (let i = 0; i < newarr.length; i++) {
      if (newarr[i].name === item.name) {
        bool = true;
        break;
      }
    }
    if (bool === true) {
      updateItems(newarr);
    } else {
      updateItems([...newarr, item]);
    }

    // updateItems([...items, item]);
    setTotalPrice((prev) => {
      return prev + item.price;
    });
  };

  const removeItemFromCartHandler = (item) => {
    const newarr = items.filter((val) => {
      if (item.name === val.name) {
        let xyz = val.quantity;
        const newquantity = Number(xyz) - Number(item.quantity);
        if (newquantity === 0) {
        } else {
          val.quantity = newquantity;
          return val;
        }
      } else {
        return val;
      }
    });

    updateItems(newarr);
    setTotalPrice((prev) => {
      if (prev <= 0) {
        return 0;
      } else {
        return prev - item.price;
      }
    });
  };

  const cartContext = {
    items: items,
    totalAmount: totalPrice,
    cartscreen: cartscreen,
    setcartscreen: setcartscreen,
    additem: addItemtoCartHandler,
    removeitem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
