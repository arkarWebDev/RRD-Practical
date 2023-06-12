import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: 1,
    title: "Apple",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ab fugit sequi, error possimus dignissimos. Odit fuga inventore enim mollitia maiores eius officiis praesentium? Porro ducimus aspernatur explicabo qui dolor?",
  },
  {
    id: 2,
    title: "Mango",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ab fugit sequi, error possimus dignissimos. Odit fuga inventore enim mollitia maiores eius officiis praesentium? Porro ducimus aspernatur explicabo qui dolor?",
  },
  {
    id: 3,
    title: "Orange",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ab fugit sequi, error possimus dignissimos. Odit fuga inventore enim mollitia maiores eius officiis praesentium? Porro ducimus aspernatur explicabo qui dolor?",
  },
];

const Products = () => {
  return (
    <>
      {PRODUCTS.map((product) => (
        <Link to={`/product/${product.title}`}>
          <div key={product.id} className="card">
            <p className="title">{product.title}</p>
            <p>{product.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Products;
