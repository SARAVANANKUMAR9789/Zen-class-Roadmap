import React from 'react'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeItem } from '../Slices/cartSlice';
import { CardMedia } from '@mui/material';

export const CartPage = () => {

  const dispatch = useDispatch()
  let { items = [] } = useSelector((state) => state.cart)
  console.log(items);
  const Increase = (e) => {
    dispatch(increaseQuantity({ id: e }))
  }
  const Decrease = (e) => {
    dispatch(decreaseQuantity({ id: e }))
  }
  const RemoveItem = (e) => {
    dispatch(removeItem({ id: e }))
  }
  return (

    <>
      {
        items?.map((value, index) => {
          console.log(value);
          return <div key={index}>
            <CardContent variant="outlined">
              <Card sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', width: '100%'}}>
                  <CardMedia
                    component={"img"}
                    sx={{ height: 140, width: 140, padding: 2 }}
                    image={value.imageUrl}
                    title="green iguana"
                  />
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      {value.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Box>
                <Box sx={{ display: 'flex', textAlign: "right" }}>
                  <CardContent sx={{ flex: '1 0 auto'}}>
                    <CardActions>
                      <Typography component="div" variant="h5">
                        ${value.price}
                      </Typography>
                      <Button size="small" onClick={() => Decrease(value.id)}>Decrease</Button>
                      <Typography component="div" variant="h5">
                        {value.quantity}
                      </Typography>
                      <Button size="small" onClick={() => Increase(value.id)}>Increase</Button>
                    </CardActions>
                  <CardActions>
                    <Button size="small" onClick={() => RemoveItem(value.id)}>Remove Item</Button>
                  </CardActions>
                  </CardContent>
                </Box>
              </Card>
            </CardContent>
          </div>
        })
      }
    </>
  )
}
