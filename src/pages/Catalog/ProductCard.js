import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import Context from '../../context';

export default function ProductCard({ product }) {
  const { addToCart, removeFromCart } = React.useContext(Context);
  const [quantity, setQuantity] = React.useState(1);

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
        <Button size="small" onClick={() => addToCart({ ...product, quantity: quantity })}>הוסף לסל</Button>
        <IconButton onClick={() => setQuantity(quantity + 1)}>
          <AddIcon fontSize='small' />
        </IconButton>
        <Typography variant='caption'>{quantity}</Typography>
        <IconButton onClick={() => { if (quantity > 1) setQuantity(quantity - 1) }}>
          <RemoveIcon fontSize='small' />
        </IconButton>
      </CardActions>
      <CardActions>
        <Button variant='contained' fullWidth>פרטים נוספים</Button>
      </CardActions>
    </Card>
  );
}