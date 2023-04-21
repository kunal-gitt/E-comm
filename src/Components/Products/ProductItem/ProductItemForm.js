import Input from "../../UI/Input";

import classes from "./ProductItemForm.module.css";
import CartContext from "../../Store/CartContext";
import { useContext } from "react";

const ProductItemForm = (props) => {
  const cartctx = useContext(CartContext);

  const addItemToCart = (event) => {
    event.preventDefault();

    cartctx.additem({ ...props.item, quantity: 1 });
    console.log(cartctx.items);
  };

  return (
    <form className={classes.form}>
      <button onClick={addItemToCart}>ADD TO CART</button>
    </form>
  );
};

export default ProductItemForm;
