import React from "react";
import  ReactDOM  from "react-dom";
import "./index.css";
const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
      image: "https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/focaccia.jpg?raw=true"
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
      image: "https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/margherita.jpg?raw=true"

    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
      image: "https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/spinaci.jpg?raw=true"

    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
      image: "https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/funghi.jpg?raw=true"

    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
      image: "https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/salamino.jpg?raw=true"

    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
      image: "https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/prosciutto.jpg?raw=true"

    },
  ];

function App(){
    return (
        <div className="container">
            
        <Header />
        <Menu />
        <Footer />
        </div>
    )
    
}
const Header = () =>{
    return(
        <header className="header">
            <h1>
                 Ratnesh's Pizzeria
            </h1>

        </header>
    ) 
}


const Menu = () =>{
    const dataLength = pizzaData.length;
    return(
        <div className="menu">
            <h2>Our Menu</h2>
            {dataLength>0 ? <React.Fragment>
                <p>Authentic italian cuisine. 6 Creative dishes to choose from. All from our stone oven, all organic, all delicious</p>
            <ul className="pizzas">
                {pizzaData.map((pizza, index)=>{
                   return <Pizza  pizzaObj = {pizza} key={index}/>
                })}
            </ul>
            </React.Fragment> : <p>We are currently working on our Pizza Menu, Thank you for your patience</p>}
            
        </div>
   )
}

const Pizza = ({pizzaObj}) =>{
    return(
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out":""}`}>
            <img src= {pizzaObj.image} alt={pizzaObj.name}/>
        <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut ? "SOLD OUT" : `$${pizzaObj.price}`}</span>
        </div>
        </li>
    )
}

const Footer = () =>{
    const currentHour = new Date().getHours();
    const openHour = 10;
    const closeHour = 23;
    const isOpen = currentHour>=openHour && currentHour<closeHour

    return(
        <footer className="footer">
        {isOpen?
       <Order closeHour = {closeHour} /> : <p>We warmly welcome you anytime from {openHour}:00 to {closeHour}:00.</p>
}
        </footer>
    )
}

const Order = (props) =>{
    return (
        <div className="order">
            <p>We're here to serve you until {props.closeHour}:00. Feel free to join us in person or place your order online.</p>

            <button className="btn">Order Now</button>
        </div> 
    )
}

ReactDOM.render(<React.StrictMode>
    <App />
</React.StrictMode>, document.getElementById("root"));