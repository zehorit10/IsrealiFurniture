import React from "react";
import { Grid, Typography, IconButton, Stack } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function CartItem({ item }) {
    return (
        <Grid container spacing={4} sx={{ py: 2 }} alignItems="center">
            <Grid item xs={3}>
                <img src={item.image} alt={item.name} width="100%" />
            </Grid>
            <Grid item xs={3.5}>
                <Typography variant="subtitle1">{item.name}</Typography>
                <Typography variant="subtitle2">{item.price} ₪</Typography>
                <Typography variant="body2">{item.sku}</Typography>
            </Grid>
            <Grid item xs={3.5}>
                <Typography variant="subtitle2">כמות:</Typography>
                <Typography variant="body2">{item.quantity}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Stack direction="row" alignItems="center" justifyContent="center">
                    <IconButton aria-label="edit">
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Stack>
            </Grid>
        </Grid>

    )
}
export default CartItem;