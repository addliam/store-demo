import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from 'react';
const axios = require("axios").default;

export const ProductCategoriesListComponent=() => {
  const [productCategoriesArray, setProductCategoriesArray] = useState([]);

  const BASE_URL = "https://fakestoreapi.com";
  
  const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
  };

  useEffect(() => {
    axios.get(`${BASE_URL}/products/categories`)
      .then(res=>{
        setProductCategoriesArray(res.data);
      })
    return () => {
    }
  }, []);

  return (

    <ListGroup defaultActiveKey="#link1">
        {
            productCategoriesArray.map((obj,indx)=>{
                return <ListGroup.Item key={indx} action href="#link2">{obj}
                   </ListGroup.Item>;
            })
        }
      {/* <ListGroup.Item action href="#link1">
        Link 1
      </ListGroup.Item>
      <ListGroup.Item action href="#link2">
        Link 2
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked}>
        This one is a button
      </ListGroup.Item> */}
    </ListGroup>
  );
}

