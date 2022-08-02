import React from "react";
import { Grid, Typography, FormControl, RadioGroup, FormLabel, Radio, FormControlLabel, Divider } from "@mui/material";
import { Box } from "@mui/system";

const data = { discount:10, description:"dgdsggfghghghghghgjghghgj", isAvailable:true, image: "https://cdn.pixabay.com/photo/2022/06/20/07/32/dirt-road-7273240_960_720.jpg", quantity: 3, name: "מגורים לפי מגע", price: 100, sku: "123456789" }


function ProductDetails() {
    return (
        <Grid container spacing={2} sx={{ my: 3 }}>
            <Grid item xs={4}>
                <img src={data.image} alt={data.name} style={{width: "100%",maxHeight: "100%"}} />
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
                    <span>זמין: {data.isAvailable} </span>
                    <br />     
                    <span>כמות: {data.quantity} </span>
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