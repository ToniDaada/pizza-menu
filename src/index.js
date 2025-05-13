import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = function () {
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>;
    </header>
  );
};
const Menu = function () {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {pizzaData.map((data, id) => (
        <Pizza
          key={id}
          name={data.name}
          ingredients={data.ingredients}
          photoName={data.photoName}
          price={data.price}
        />
      ))}
    </div>
  );
};

function Pizza(props) {
  // console.log(props);
  return (
    <div className="pizza">
      <img src={props.photoName} alt="Pizza Spinaci" />
      <div>
        <h3> {props.name} </h3>
        <p>{props.ingredients}</p>
        <span>${props.price}</span>
      </div>
    </div>
  );
}
const Footer = function () {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(`${isOpen}`);

  // hour <= openHour && hour >= closeHour
  //   ? alert("We are  closed")
  //   : alert(`We are open`);

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}
      {isOpen ? ` We're currently open!` : ` We're currently closed`}
    </footer>
  );

  // React.createElement("footer", null, `We're currenttly open!`);
};

// How we render the root in React v18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
