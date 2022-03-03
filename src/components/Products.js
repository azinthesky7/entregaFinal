import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Product from "./Product";
import products from "../product-data";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Products = () => {
  const classes = useStyles();

  const {categorias}= useParams()
  
const  filterProducts = products.filter(product => {
  if(categorias) {
      return product.categoria==categorias
  }else{
    return true
  }
})



  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {filterProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Product key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
