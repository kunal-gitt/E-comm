import { useDebugValue, useEffect, useState } from "react";
import CartContext from "./CartContext";
import { Link } from "react-router-dom";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartscreen, setcartscreen] = useState(false);

  const API_URL =
    "https://crudcrud.com/api/1d9a2d12679b47458130e8aad104f287/usercart";

  const useremail = JSON.parse(localStorage.getItem("email"))
    .replaceAll("@", "")
    .replaceAll(".", "");

  useEffect(() => {
    showdataonscreen();
  }, []);

  async function showdataonscreen() {
    const response = await fetch(`${API_URL}${useremail}`);
    const data = await response.json();
    const newproductarr = data.map((val) => {
      setTotalPrice((prev) => {
        return prev + Number(val.price) * Number(val.quantity);
      });
      let imageUrl = val.imageUrl;
      let imageUrllink = (
        <Link to="/products/1">
          <img src={imageUrl} alt={"item not found"} />
        </Link>
      );
      val.imageUrl = imageUrllink;
      return val;
    });
    updateItems(newproductarr);
  }

  async function removeproductfromcart(val) {
    if (val.quantity === 0) {
      await fetch(`${API_URL}${useremail}/${val._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      const newobj = {
        id: val.id,
        name: val.name,
        imageUrl: val.imageUrl.props.children.props.src,
        price: val.price,
        quantity: val.quantity,
      };

      await fetch(`${API_URL}${useremail}/${val._id}`, {
        method: "PUT",
        body: JSON.stringify(newobj),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    console.log("item deleted");
  }

  const addItemtoCartHandler = (item) => {
    const newproduct = {
      ...item,
      imageUrl: item.imageUrl.props.children.props.src,
    };

    updateItems((prev) => {
      let bool = false;
      const newarr = prev.map((val) => {
        if (val.name === item.name) {
          const newquantity = item.quantity;
          val.quantity = newquantity;
          bool = true;

          fetch(`${API_URL}${useremail}/${val._id}`, {
            method: "PUT",
            body: JSON.stringify(newproduct),
            headers: {
              "Content-Type": "application/json",
            },
          });
        }

        return val;
      });

      if (bool === true) {
        return newarr;
      } else {
        fetch(`${API_URL}${useremail}`, {
          method: "POST",
          body: JSON.stringify(newproduct),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            item._id = data._id;
          });

        return [...newarr, item];
      }
    });
    setTotalPrice((prev) => {
      return prev + item.price;
    });
  };

  const removeItemFromCartHandler = (item) => {
    updateItems((prev) => {
      console.log(prev);
      const newarr = prev.filter((val) => {
        if (val.name === item.name) {
          let xyz = Number(val.quantity) - 1;
          val.quantity = xyz;
          removeproductfromcart(val);
          console.log(xyz);
          if (xyz > 0) {
            return val;
          }
        } else {
          return val;
        }
      });
      console.log(newarr);
      return newarr;
    });
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
