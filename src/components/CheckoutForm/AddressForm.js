import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Dirección  envío
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='Nombre'
            name='Nombre'
            label='Nombre'
            fullWidth
            autoComplete='tú nombre'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='Apellido'
            name='Apellido'
            label='Apellido'
            fullWidth
            autoComplete='tu apellido'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='dirección'
            name='dirección'
            label='dirección'
            fullWidth
            autoComplete='dirección  envío'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='dirección2'
            name='dirección2'
            label='dirección'
            fullWidth
            autoComplete='dirección  envío 2'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='ciudad'
            name='ciudad'
            label='ciudad'
            fullWidth
            autoComplete='dirección  envío 2'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='state'
            name='state'
            label='State/Provincia/Region'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='zip'
            name='zip'
            label='Zip / Codigo  postal'
            fullWidth
            autoComplete='shipping postal-code'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='Pais'
            name='Pais'
            label='Pais'
            fullWidth
            autoComplete='Pais envío'
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color='secondary' name='guardar dirección ' value='si' />
            }
            label='Use esta dirección para conocer los detalles del pago'
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
