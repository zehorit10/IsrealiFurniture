import React from "react";
import { useParams } from 'react-router-dom'
import { Grid, Typography, Stack, LinearProgress, FormControl, RadioGroup, FormLabel, Radio, FormControlLabel, Divider } from "@mui/material";
import { Box } from "@mui/system";
import useGet from "../../api/hooks/get";


// const data = { discount:10, description:"dgdsggfghghghghghgjghghgj", isAvailable:true, image: "https://cdn.pixabay.com/photo/2022/06/20/07/32/dirt-road-7273240_960_720.jpg", quantity: 3, name: "מגורים לפי מגע", price: 100, sku: "123456789" }


function ProductDetails() {

    const { id } = useParams();
    const { getData, data, loading, error } = useGet("products/" + (id || "0"));
    
    const isAvailable = () => {
        if (data) {
            let stock = Number(data.stock);
            if (data.isAvailable && stock > 0) {
                return "כן";
            }else{
                return "לא";
            }
        }
        return "לא ידוע";
    }

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
        <Grid container spacing={2} sx={{ my: 3 }}>
            <Grid item xs={4}>
                <img src={data.image} alt={data.name} style={{ width: "100%", maxHeight: "100%" }} />
            </Grid>
            <Grid item xs={8}>
                <Typography align="left" variant="h4">{data.name} </Typography>
                <Typography align="left" variant="body1">
                    <span>מספר מוצר: {data.sku}</span>
                    <br />
                    <span>תאור: {data.description}</span>
                    <br />
                    <span>מחיר: {data.price} ש"ח</span>
                    <br />
                    <span>הנחה: {data.discount} </span>
                    <br />
                    <span>זמין: {isAvailable()} </span>
                    <br />
                    <span>כמות: {data.stock} </span>
                    <br />
                </Typography>
            </Grid>
            <Box>
                <Typography align="center" variant="h4" >
                    תגובות
                </Typography>
            </Box>
        </Grid>
    )
}
export default ProductDetails;