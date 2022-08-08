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
import { Collapse, TextField, Grid } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import usePut from "../../api/hooks/put";

export default function ProductStocCard({ product }) {

  const [stockOpen, setStockOpen] = React.useState(false);
  const [stock, setStock] = React.useState(product.stock);

  const {getData, data, loading, error} = usePut("products/" + product._id, { stock });
  console.log(data);
  React.useEffect(() => {
    if (data !== null) {
      setStock(data.stock);
    }
  }, [data]);

  return (
    <Card sx={{ maxWidth: 400, height:450 }}>
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
      </CardContent>
      <CardActions>
        <Grid container spacing={4} alignItems="center" >
          <Grid item xs={4}>
        <Typography variant="caption">מלאי:  </Typography>
        <Typography variant="body1">
          {stock}
          <IconButton onClick={() => setStockOpen(!stockOpen)}>
            <EditIcon />
          </IconButton>
        </Typography>
          </Grid>
          <Grid item xs={8}>
        <Collapse in={stockOpen} orientation="horizontal">
          <TextField
            label="מלאי"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            size="small"
            type="number"
            sx={{ width: 0.5 }}
          />
          <IconButton onClick={() => {
            getData();
            setStockOpen(false)
            }}>
            <CheckIcon />
          </IconButton>
        </Collapse>
          </Grid>
        </Grid>
        {/* <Typography gutterBottom variant="subtitle1">
          מלאי:
        </Typography>
        <IconButton onClick={() => setStock(stock + 1)}>
          <AddIcon fontSize='small' />
        </IconButton>
        <Typography variant='caption'> {stock}</Typography>
        <IconButton onClick={() => { if (stock > 1) setStock(stock - 1) }}>
          <RemoveIcon fontSize='small' />
        </IconButton> */}
      </CardActions>

    </Card>
  );
}