import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ value }) => {
  const hamClicked = () => {
    const topnav = document.querySelector(".topnav");
    if (topnav.className === "topnav") {
      topnav.classList.add("responsive");
    } else {
      topnav.className = "topnav";
    }
  };
  return (
    <>
      <div className="topnav">
        <NavLink exact="true" activeclassname="active" to="/">
          Home
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/categories">
          Categoreis
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/checkout">
          <div className="navChekBtn">
            <div className="noOfItems" >{value} </div>
            ₹6000
          </div>
        </NavLink>
        <button className="nav_hamburger" onClick={hamClicked}>
          <i className="fa fa-bars"></i>
        </button>
      </div>
    </>
  );
};
export default Nav;

// *{
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// body {
//   margin: 0;
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//     sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   font-size: 10px;
// }

// code {
//   font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
//     monospace;
// }

// .topnav{
//   background-color: #596275;
//   // display: flex;flex-direction: row;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// }

// .topnav>a{
//   // background-color: yellowgreen;
//   float: left;
//   display: block;
//   padding:  1rem;
//   text-decoration: none;
//   font-size: 1.3rem;
//   color: white;
// }

// .nav_hamburger{
//   display: none;
//   background-color:transparent ;
//   color: white;
//   border: solid 0px black;
//   font-size: 1.5rem;
// }

// @media only screen and(max-width:600px) {
//   .topnav >a:not(:first-child){
//     display: none;
//   }
//   .nav_hamburger{
//     float: right;
//     display: block;
//     margin-top: 1rem;
//     margin-right: .5rem;

//   }
// }

// @media only screen and(max-width:600px)  {
//   .topnav.responsive {position: relative;}
//   .nav_hamburger {
//     position: absolute;
//     right: 0;
//     top: 0;
//   }
//   .topnav.responsive a {
//     float: none;
//     display: block;
//     text-align: left;
//   }
// }
