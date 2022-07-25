import React from "react";
import {Grid, Typography, FormControl, RadioGroup, FormLabel, Radio, FormControlLabel, Divider} from "@mui/material";

function Order() {
    return (
        <Grid container spacing={4} columnSpacing={6} sx={{ py: 2 }}>
            <Grid item xs={12}>
                <Typography variant="h3">
                    השלמת הזמנה
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <FormControl fullWidth>
                    <FormLabel>אפשרויות משלוח: </FormLabel>
                    <RadioGroup
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="איסוף עצמי" />
                        <FormControlLabel value="male" control={<Radio />} label="משלוח תוך 3 ימים עסקים (150 ₪)" />
                        <FormControlLabel value="other" control={<Radio />} label="משלוח תוך שבוע (1000 ₪)" />
                    </RadioGroup>
                </FormControl>
                <Divider />
                <FormControl fullWidth>
                    <FormLabel>אפשרויות משלוח: </FormLabel>
                    <RadioGroup
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="איסוף עצמי" />
                        <FormControlLabel value="male" control={<Radio />} label="משלוח תוך 3 ימים עסקים (150 ₪)" />
                        <FormControlLabel value="other" control={<Radio />} label="משלוח תוך שבוע (1000 ₪)" />
                    </RadioGroup>
                </FormControl>
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
                    כולל משלוח והרכבה
                </Typography>
            </Grid>
        </Grid>
    )
}
export default Order;