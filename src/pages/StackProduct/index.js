import React from "react";

import useGet from "../../api/hooks/get";
import ProductStocCard from "./ProductStocCard";
import { useParams } from "react-router-dom";

import { Grid, Stack, LinearProgress, Box } from "@mui/material";

function StackProduct() {

    const { category } = useParams();
    const {getData, data, loading, error } = useGet("products/catalog/" + (category || "0"));

    console.log(data);

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
        <Grid container spacing={4} sx={{ my: 4 }}>
            {data.map((p, i) => <Grid key={i} item xs={4}><ProductStocCard product={p} /></Grid>)}
        </Grid>
    );
}
export default StackProduct;
