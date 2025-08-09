import { useState } from 'react'
import './App.css'
import Card from './Card'
import Cart from './Cart'
import waffleImage from './images/image-waffle-desktop.jpg';
import waffleMobile from './images/image-waffle-mobile.jpg';

import pannaCottaImage from './images/image-panna-cotta-desktop.jpg';
import pannaCottaMobile from './images/image-panna-cotta-mobile.jpg';

import cakeImage from './images/image-cake-desktop.jpg';
import cakeMobile from './images/image-cake-mobile.jpg';

import brownieImage from './images/image-brownie-desktop.jpg';
import brownieMobile from './images/image-brownie-mobile.jpg';

import cremeBruleeImage from './images/image-creme-brulee-desktop.jpg';
import cremeBruleeMobile from './images/image-creme-brulee-mobile.jpg';

import macaronImage from './images/image-macaron-desktop.jpg';
import macaronMobile from './images/image-macaron-mobile.jpg';

import meringueImage from './images/image-meringue-desktop.jpg';
import meringueMobile from './images/image-meringue-mobile.jpg';

import tiramisuImage from './images/image-tiramisu-desktop.jpg';
import tiramisuMobile from './images/image-tiramisu-mobile.jpg';

import baklavaImage from './images/image-baklava-desktop.jpg';
import baklavaMobile from './images/image-baklava-mobile.jpg';

function App() {
  const title = "Desserts"

   const images = [
    { id: 1, desktop: waffleImage, mobile: waffleMobile, alt: 'Waffle', description: 'Waffle with Berries', price: '6.50' },
    { id: 2, desktop: cremeBruleeImage, mobile: cremeBruleeMobile, alt: 'Crème Brûlée', description: 'Vanilla Bean Crème Brûlée', price: '7.00' },
    { id: 3, desktop: macaronImage, mobile: macaronMobile, alt: 'Macaron', description: 'Macaron Mix of Five', price: '8.00' },
    { id: 4, desktop: tiramisuImage, mobile: tiramisuMobile, alt: 'Tiramisu', description: 'Classic Tiramisu', price: '5.50' },
    { id: 5, desktop: baklavaImage, mobile: baklavaMobile, alt: 'Baklava', description: 'Pistachio Baklava', price: '4.00' },
    { id: 6, desktop: meringueImage, mobile: meringueMobile, alt: 'Pie', description: 'Lemon Meringue Pie', price: '5.00' },
    { id: 7, desktop: cakeImage, mobile: cakeMobile, alt: 'Cake', description: 'Red Velvet Cake', price: '4.50' },
    { id: 8, desktop: brownieImage, mobile: brownieMobile, alt: 'Brownie', description: 'Salted Caramel Brownie', price: '4.50' },
    { id: 9, desktop: pannaCottaImage, mobile: pannaCottaMobile, alt: 'Panna Cotta', description: 'Vanilla Panna Cotta', price: '6.50' },
  ];

  const products = [
  { id: 1, name: "Classic Tiramisu", category: "Tiramisu", price: 5.50 },
  { id: 2, name: "Waffle with Berries", category: "Waffle", price: 6.50 },
  { id: 3, name: "Vanilla Bean Crème Brûlée", category: "Crème Brûlée", price: 7.00 },
  { id: 4, name: "Macaron Mix of Five", category: "Macaron", price: 8.00 },
  { id: 5, name: "Pistachio Baklava", category: "Baklava", price: 4.00 },
  { id: 6, name: "Lemon Meringue Pie", category: "Pie", price: 5.00 },
  { id: 7, name: "Red Velvet Cake", category: "Cake", price: 4.50 },
  { id: 8, name: "Salted Caramel Brownie", category: "Brownie", price: 4.50 },
  { id: 9, name: "Vanilla Panna Cotta", category: "Panna Cotta", price: 6.50 }
];
 const [cart, setCart] = useState(products.map((product)=> ({id: product.id, quantity: 0})))
  return (
   <>
   <div id="main-container">
    <div id="titleCard-container">
      <h1 id='main-title'>{title}</h1>
      <div id="card-container">
        <Card products = {products} cart = {cart} setCart={setCart} images = {images}/>
      </div>
    </div>
    <div className="cart">
      <Cart products={products} cart={cart} setCart={setCart} images={images}/>
    </div>
   </div>

   </>
  )
}

export default App
