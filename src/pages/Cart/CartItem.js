import React from "react";
import { Grid, Typography, IconButton, Stack } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useGet from "../../api/hooks/get";
import usePut from "../../api/hooks/put";

function CartItem({ item, gatAllData, setSum }) {

    const { getData, data, loading, error } = useGet("products/" + (item.product || "0"));
    const deleteItem = usePut("orders/removeFromCart", { product: item.product });

    const [totalPrice, setTotalPrice] = React.useState(0);
    React.useEffect(() => {
        if (data) {
            setTotalPrice(data.price * item.quantity);
        }
    } , [data]);
    React.useEffect(() => {
        if (data) {
            setSum(sum => sum + totalPrice);
        }
    }, [totalPrice]);
    
    React.useEffect(() => {
        if (!deleteItem.error && deleteItem.data) {
            setSum(sum => sum - totalPrice);
            gatAllData();
        }
    } , [deleteItem.data]);

    if (loading || error) return null;

    return (
        <Grid container spacing={4} sx={{ py: 2 }} alignItems="center">
            <Grid item xs={3}>
                <img src={data.image} alt={data.name} width="100%" />
            </Grid>
            <Grid item xs={3.5}>
                <Typography variant="subtitle1">{data.name}</Typography>
                <Typography variant="subtitle2">{totalPrice} ₪</Typography>
                <Typography variant="body2">{data.sku}</Typography>
            </Grid>
            <Grid item xs={3.5}>
                <Typography variant="subtitle2">כמות:</Typography>
                <Typography variant="body2">{item.quantity}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Stack direction="row" alignItems="center" justifyContent="center">
                    {/* <IconButton aria-label="edit">
                        <EditIcon />
                    </IconButton> */}
                    <IconButton onClick={() => deleteItem.getData()} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Stack>
            </Grid>
        </Grid>

    )
}
export default CartItem;