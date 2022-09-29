import React, {useEffect, useState} from 'react'
import {ProductCardComponent} from "./components/ProductCardComponent";
import {Button} from 'react-bootstrap';

const axios = require("axios").default;

function TypesExample() {
  return (
    <>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
    </>
  );
}



// category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating: {rate: 3.9, count: 120}
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"

const ProductComponent = ({productObject}) => {
    const id = productObject.id;
    const title = productObject.title;
    const category = productObject.category;
    const description = productObject.description;
    const image = productObject.image;
    const price = productObject.price;
    const ratingRate = productObject.rating.rate;
    const ratingCount = productObject.rating.count;
    return (
        <div >
            <h3>{id}: {title}</h3>
            <h5>{category}</h5>
            <img src={image} height="200px" width="200px" alt="product at fake store" />
            <p>{description}</p>
            <span>Price: {price}</span>
            <span>Valoration: {ratingRate}</span>
            <span>Counts: {ratingCount}</span>
        </div>
    );
}

export const SamplePage = () => {
    const [productsArrayJson, setProductsArrayJson] = useState([]);
    const BASE_URL = "https://fakestoreapi.com";

    // useEffect(() => {
    //     const productsArray = [];
    //   axios.get(`${BASE_URL}/products/1`)
    //     .then((res)=>{
    //         let data = res.data;
    //         console.log(data);
    //         setProductsArrayJson([data]);
    //     })
    //     .catch((err)=>{console.error(err)});

    //   return () => {
    //   }
    // }, []);
    
    useEffect(() => {
        const allProductsArray = [];
        axios.get(`${BASE_URL}/products`)
          .then((res)=>{
              let data = res.data;
              console.log(data);
              setProductsArrayJson(data);
          })
      return () => {
      }
    }, []);
//https://react-bootstrap.github.io/components/cards/
//https://fakestoreapi.com/docs
  return (
    <div>
        <h1>SAMPLE PAGE FOR TEST</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ab, veritatis, recusandae excepturi neque dignissimos illum suscipit temporibus deleniti debitis ad sunt ut perspiciatis deserunt, eos id eum beatae dolor.</p>
        <TypesExample/>
        {
            productsArrayJson.map((obj,indx)=>{
                return <ProductCardComponent key={indx} productObject={obj}/>
            })
        }

    </div>
  )
}
