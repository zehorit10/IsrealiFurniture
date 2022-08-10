import * as React from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Context from '../../context';
import ProductDetails from './ProductDetails';
import {useNavigate} from 'react-router-dom';


import { IconButton, Alert,  Link, Typography, Button, CardMedia, CardContent, CardActions, Card } from "@mui/material";
import usePost from "../../api/hooks/post";

export default function ProductCard({ product }) {

  let navigate = useNavigate();

  
  const { addToCart, removeFromCart, isAuth } = React.useContext(Context);
  const [quantity, setQuantity] = React.useState(1);

  const addItem = usePost("orders/addToCart", { product: product._id, quantity });

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          מקט: {product.sku}
        </Typography>
        <Typography gutterBottom variant="subtitle2">
          מחיר: {product.price} ₪
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"
          disabled={isAuth ? false : true}
          onClick={() => {
            // <Alert onClose={() => {}}>המוצר נוסף לסל בהצלחה!</Alert>
            setQuantity(1);
            addItem.getData();
            // addToCart({ ...product, quantity: quantity })
          }}>הוסף לסל</Button>
        <IconButton onClick={() => setQuantity(quantity + 1)}>
          <AddIcon fontSize='small' />
        </IconButton>
        <Typography variant='caption'>{quantity}</Typography>
        <IconButton onClick={() => { if (quantity > 1) setQuantity(quantity - 1) }}>
          <RemoveIcon fontSize='small' />
        </IconButton>
      </CardActions>

      <CardActions>
        <Button variant='contained' fullWidth onClick={() => navigate("/ProductDetails/" + product._id )}>פרטים נוספים</Button>
      </CardActions>
    </Card>
  );
}