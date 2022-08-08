import React from "react";
import { Box, Grid, Typography, Stack, LinearProgress } from "@mui/material";
import CartItem from "./CartItem";
import useGet from "../../api/hooks/get";


const data = [
    { image: "https://cdn.pixabay.com/photo/2022/06/20/07/32/dirt-road-7273240_960_720.jpg", quantity: 3, name: "מגורים לפי מגע", price: 100, sku: "123456789" },
    { image: "https://cdn.pixabay.com/photo/2022/06/20/07/32/dirt-road-7273240_960_720.jpg", quantity: 3, name: "מגורים לפי מגע", price: 100, sku: "123456789" },
    { image: "https://cdn.pixabay.com/photo/2022/06/20/07/32/dirt-road-7273240_960_720.jpg", quantity: 3, name: "מגורים לפי מגע", price: 100, sku: "123456789" },
    { image: "https://cdn.pixabay.com/photo/2022/06/20/07/32/dirt-road-7273240_960_720.jpg", quantity: 3, name: "מגורים לפי מגע", price: 100, sku: "123456789" },
    { image: "https://cdn.pixabay.com/photo/2022/06/20/07/32/dirt-road-7273240_960_720.jpg", quantity: 3, name: "מגורים לפי מגע", price: 100, sku: "123456789" },
    { image: "https://cdn.pixabay.com/photo/2022/06/20/07/32/dirt-road-7273240_960_720.jpg", quantity: 3, name: "מגורים לפי מגע", price: 100, sku: "123456789" },
    { image: "https://cdn.pixabay.com/photo/2022/06/20/07/32/dirt-road-7273240_960_720.jpg", quantity: 3, name: "מגורים לפי מגע", price: 100, sku: "123456789" },
    { image: "https://cdn.pixabay.com/photo/2022/06/20/07/32/dirt-road-7273240_960_720.jpg", quantity: 3, name: "מגורים לפי מגע", price: 100, sku: "123456789" },
    { image: "https://cdn.pixabay.com/photo/2022/06/20/07/32/dirt-road-7273240_960_720.jpg", quantity: 3, name: "מגורים לפי מגע", price: 100, sku: "123456789" },
    { image: "https://cdn.pixabay.com/photo/2022/06/20/07/32/dirt-road-7273240_960_720.jpg", quantity: 3, name: "מגורים לפי מגע", price: 100, sku: "123456789" },
    { image: "https://cdn.pixabay.com/photo/2022/06/20/07/32/dirt-road-7273240_960_720.jpg", quantity: 3, name: "מגורים לפי מגע", price: 100, sku: "123456789" },
    { image: "https://cdn.pixabay.com/photo/2022/06/20/07/32/dirt-road-7273240_960_720.jpg", quantity: 3, name: "מגורים לפי מגע", price: 100, sku: "123456789" },
    { image: "https://cdn.pixabay.com/photo/2022/06/20/07/32/dirt-road-7273240_960_720.jpg", quantity: 3, name: "מגורים לפי מגע", price: 100, sku: "123456789" },
    { image: "https://cdn.pixabay.com/photo/2022/06/20/07/32/dirt-road-7273240_960_720.jpg", quantity: 3, name: "מגורים לפי מגע", price: 100, sku: "123456789" },
    { image: "https://cdn.pixabay.com/photo/2022/06/20/07/32/dirt-road-7273240_960_720.jpg", quantity: 3, name: "מגורים לפי מגע", price: 100, sku: "123456789" },
]

function Cart() {
    
    const { getData, data, loading, error } = useGet("cart");

    if (loading) {
        return <Stack alignItems="center" justifyContent="center" sx={{ width: 1, height: "50vh" }}>
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        </Stack>
    }

    if (error) {
        return <div>Error</div>;
    }

    return (
        <Grid container spacing={4} columnSpacing={6} sx={{ py: 2 }}>
            <Grid item xs={12}>
                <Typography variant="h3">
                    סל קניות
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <Box sx={{height:"60vh", overflowY:"auto", pr:2}}>
                    {data.map((item, index) => <CartItem item={item} key={index} />)}
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="h5">
                    <Typography variant="caption" sx={{ fontSize: "75%" }}>
                        סך הכל לתשלום:
                    </Typography>
                    &nbsp;
                    100 ₪
                </Typography>
                <Typography variant="subtitle2">
                    לא כולל משלוח והרכבה
                </Typography>
            </Grid>
        </Grid>
    )
}
export default Cart;