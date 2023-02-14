import { Link } from "react-router-dom";

const DUMMY_PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

export default function ProductsPage() {
  return (
    <>
      <h2>Products Page</h2>
      <ul>
        {DUMMY_PRODUCTS.map((prod) => (
          <li id={prod.id}>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
