import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    price: 6,
    title: "Smartphone",
    description: "A high-quality smartphone with a great camera",
  },
  {
    id: "p2",
    price: 12,
    title: "Laptop",
    description: "A powerful laptop for all your computing needs",
  },
  {
    id: "p3",
    price: 8,
    title: "Headphones",
    description: "Noise-cancelling headphones for immersive sound",
  },
  {
    id: "p4",
    price: 15,
    title: "Smartwatch",
    description: "A smartwatch to keep track of your fitness goals",
  },
  {
    id: "p5",
    price: 10,
    title: "Tablet",
    description: "A versatile tablet for work and play",
  },
  {
    id: "p6",
    price: 20,
    title: "Camera",
    description: "A digital camera with high resolution",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            key = {product.id}
            id = {product.id}  
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
