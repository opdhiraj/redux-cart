import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCTS = [
  { id: "p1", price: 6, title: "A-title", description: "ab" },
  { id: "p2", price: 62, title: "A22-title", description: "ab22222" },
  { id: "p3", price: 36, title: "A3333-title", description: "a33333b" },
  { id: "p4", price: 64, title: "A444-title", description: "ab44444" },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
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
