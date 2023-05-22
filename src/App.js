import "./App.css";
import NavBar from "./navbar";
import Body from "./body";
import { faker } from "@faker-js/faker";
import MultipleItems from "./slider";

function App() {
  let products = createProducts(5);
  return (
    <>
      <div className="app">
        <div className="container">
          <NavBar />
          <Body />
        </div>
      </div>
      <div className="hero"></div>
      <div style={{ height: "800px", width: "100%" }}>
        <MultipleItems createProducts={products} />
      </div>
    </>
  );
}

const createProduct = () => {
  return {
    image: faker.image.url(),
    image1: faker.image.url(),
    title: faker.commerce.productName(),
    subTitle: faker.commerce.productMaterial(),
    price: faker.commerce.price(),
    ratings: faker.number.int({ min: 1, max: 5 }),
    reviews: faker.number.int({ min: 1, max: 500000 }),
  };
};

const createProducts = (numUsers = 5) => {
  return new Array(numUsers).fill(undefined).map(createProduct);
};

export default App;
