import React from "react";
import { Grid, Typography, IconButton, Stack, Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function ProductStocCard() {
    return (
        <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn.pixabay.com/photo/2022/06/20/07/32/dirt-road-7273240_960_720.jpg"
                />
                <CardContent>
                    <Grid item >
                        <Typography variant="subtitle2">{/*item.name*/} מיטת נוער</Typography>
                        <Typography variant="caption" color="text.secondary">{/*item.sku*/"מקט: "}74615  <br /> </Typography>
                        <Typography variant="caption" color="text.secondary">כמות:  47</Typography>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>

    )
}
export default ProductStocCard;