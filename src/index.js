import {navbar} from "../components/navbar.js";

import '../styles/navbar.css';

let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();

import { getData, append } from "../components/fetch.js";

let url_1 = "https://fakestoreapi.com/products/category/electronics";
let container1 = document.getElementById("products");

getData(url_1).then((res) =>{
    append(res, container1);
});

let url_2 = "https://fakestoreapi.com/products/category/jewelery";

let container2 = document.getElementById("container");

getData(url_2).then((res) =>{
    append(res, container2);
});