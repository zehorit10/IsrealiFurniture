import React from "react";
import { Grid, Typography, FormControl, RadioGroup, FormLabel, Radio, FormControlLabel, Divider } from "@mui/material";

const data = { image: "https://cdn.pixabay.com/photo/2022/06/20/07/32/dirt-road-7273240_960_720.jpg", quantity: 3, name: "מגורים לפי מגע", price: 100, sku: "123456789" }


function ProductDetails() {
    return (
        <Grid container spacing={2} sx={{ my: 3 }}>
            <Grid item xs={4}>
                <img src={data.image} alt={data.name} style={{width: "100%",maxHeight: "100%"}} />
            </Grid>
            <Grid item xs={8}>
                <Typography align="left" variant="h4">{data.name} </Typography>
                <Typography align="center" variant="body1">
                    <br />
                    אמנם “רהיט ישראלי” הוקמה בשנת 2020, אך אנו בעלי ידע וניסיון עבר בענף הריהוט כבר למעלה מ-20 שנים.
                    <br />
                    <br />
                    אנחנו מייצרים רהיטים מעץ מלא במחירים מיוחדים לפי כל מידה בנוסף מזרנים ומיטות מכל הסוגים ומקפידים על קידום ועכשווית מוצרינו.
                    <br />
                    <br />
                    מטרתנו העיקרית לדאוג שאתם תקבלו מוצרים איכותיים במחירים שפויים!
                </Typography>
            </Grid>
        </Grid>
    )
}
export default ProductDetails;