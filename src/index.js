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
    <header className="header ">
      <h1 style={style}>Fast React Pizza Co.</h1>;
    </header>
  );
};
const Menu = function () {
  const numPizzas = pizzaData.length;

  return (
    <div className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine & creative dishes to choose from. All from
            our stone oven, all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzaData.map((data, id) => (
              <Pizza pizzaObj={data} key={data.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu</p>
      )}
    </div>
  );
};

function Pizza({ pizzaObj }) {
  // console.log(pizzaObj);

  // if (pizzaObj.soldOut) return null;
  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : null}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3> {pizzaObj.name} </h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : "$" + pizzaObj.price}</span>
      </div>
    </div>
  );
}
const Footer = function () {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(`${isOpen}`);

  // hour <= openHour && hour >= closeHour
  //   ? alert("We are  closed")
  //   : alert(`We are open`);

  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()} */}
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We are still working on our menu. Please come back at {openHour}:00.
        </p>
      )}
    </footer>
  );

  function Order({ closeHour }) {
    return (
      <div className="order">
        <p>
          We're currently open! until {closeHour}:00. Come visit us or order
        </p>
        <button className="btn">ORDER NOW</button>
      </div>
    );
  }

  // return (
  //   <footer className="footer">
  //     {isOpen && (
  //       <div className="order">
  //         <p>
  //           {/* {new Date().toLocaleTimeString()} */}
  //           We're currently open! until {closeHour}:00. Come visit us or order
  //         </p>
  //         <button className="btn">ORDER NOW</button>
  //       </div>
  //     )}
  //   </footer>
  // );

  // React.createElement("footer", null, `We're currenttly open!`);
};

// How we render the root in React v18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
