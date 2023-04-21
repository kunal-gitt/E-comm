import "./CartContainer.css";

const CartContainer = (props) => {
  return (
    <div className="cart-container-div">
      <h3 className="your-cart">Your Cart</h3>
      <div className="cart-items">{props.children}</div>
    </div>
  );
};

export default CartContainer;
