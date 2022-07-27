import React from "react";
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Home() {
    const [imgGalleryIndex, setImgGalleryIndex] = React.useState(1);

    const increment = () => {
        if (imgGalleryIndex == 12) return setImgGalleryIndex(1);
        setImgGalleryIndex(prv => prv + 1)
    }
    const decrement = () => {
        if (imgGalleryIndex == 1) return setImgGalleryIndex(12);
        setImgGalleryIndex(prv => prv - 1)
    }


    return (
        <Box>
            <Box sx={{ width: 1, height: "50vh", position: "relative" }}>
                <IconButton size="large" sx={{ position: "absolute", top: "50%", right: "1%" }} onClick={increment}><ArrowBackIosIcon /></IconButton>
                <IconButton size="large" sx={{ position: "absolute", top: "50%", left: "1%" }} onClick={decrement}><ArrowForwardIosIcon /></IconButton>
                <img src={`./images/${imgGalleryIndex}.jpg`} style={{
                    width: "100%",
                    maxHeight: "100%"
                }} />
            </Box>

            <Divider sx={{ my: 2 }} />
            <Box>
                <Typography variant="h4" align="center" > בין לקוחותינו</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <img src={`./images/brand1.png`} style={{
                            width: "100%",
                            maxHeight: "100%"
                        }} />
                    </Grid>
                    <Grid item xs={2} sx={{ p: 2 }}>
                        <img src={`./images/edu1.png`} style={{
                            width: "100%",
                            maxHeight: "100%"
                        }} />
                    </Grid>
                    <Grid item xs={2} sx={{ p: 2 }}>
                        <img src={`./images/harel.png`} style={{
                            width: "100%",
                            maxHeight: "100%"
                        }} />
                    </Grid>
                    <Grid item xs={2} sx={{ p: 2 }}>
                        <img src={`./images/strauss.png`} style={{
                            width: "100%",
                            maxHeight: "100%"
                        }} />
                    </Grid>
                    <Grid item xs={2} sx={{ p: 2 }}>
                        <img src={`./images/osem.jpg`} style={{
                            width: "100%",
                            maxHeight: "100%"
                        }} />
                    </Grid>
                    <Grid item xs={2} sx={{ p: 2 }}>
                        <img src={`./images/brand1.png`} style={{
                            width: "100%",
                            maxHeight: "100%"
                        }} />
                    </Grid>
                </Grid>
            </Box>

            <Divider sx={{ my: 2 }} />
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <img src={`./images/eliCohen.jpg`} style={{
                            width: "100%",
                            maxHeight: "100%"
                        }} />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography align="center" variant="h4">אלי כהן מנהל החנות</Typography>
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
            </Box>

        </Box>
    )
}
export default Home;