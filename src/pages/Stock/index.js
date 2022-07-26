import React from "react";
import { Grid } from "@mui/material";
import ProductStocCard from "./ProductStocCard";

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

function Stock() {
    return (
        <Grid container spacing={4} sx={{ my: 12 }}>
            {data.map((p, i) => <Grid key={i} item xs={3}><ProductStocCard product={p} /></Grid>)}
        </Grid>
    )
}
export default Stock;