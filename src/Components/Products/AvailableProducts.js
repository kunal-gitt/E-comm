import Card from "../UI/Card";
import ProductItem from "./ProductItem/ProductItem";
import classes from "./AvailableProducts.module.css";

const DUMMY_MEALS = [
  {
    album: "ALBUM 1",
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 1,
  },

  {
    album: "ALBUM 2",
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 1,
  },

  {
    album: "ALBUM 3",
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },

  {
    album: "ALBUM 4",
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",

    quantity: 1,
  },
];

const AvailableProducts = () => {
  const productlist = DUMMY_MEALS.map((product) => (
    <ProductItem
      id={product.id}
      key={product.id}
      name={product.album}
      imageUrl={<img src={product.imageUrl} alt={product.title} />}
      price={product.price}
    />
  ));

  return (
    <section className={classes.products}>
      <>
        <ul>{productlist}</ul>
      </>
    </section>
  );
};

export default AvailableProducts;
