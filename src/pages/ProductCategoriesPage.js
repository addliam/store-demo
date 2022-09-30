import React from 'react'
import {ProductCategoriesListComponent} from "./components/ProductCategoriesListComponent"

export const ProductCategoriesPage = () => {
  return (
    <div>
        <h1>Product Categories</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, tempora aut quas unde et quia quaerat corrupti commodi similique illum eum veritatis excepturi qui nisi voluptates autem fugiat recusandae assumenda.</p>
        {<ProductCategoriesListComponent/>}
    </div>
  )
}
