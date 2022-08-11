import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Typography, FormControl, RadioGroup, FormLabel, Radio, FormControlLabel, Divider, TextField, Button } from "@mui/material";
import Context from "../../context";
import usePut from "../../api/hooks/put";

function Order() {
    let navigate = useNavigate();
    const { cartSum, setCartSum } = React.useContext(Context);
    const [sum, setSum] = React.useState(cartSum);
    const [shipAddress, setShipAddress] = React.useState("");
    const chackout = usePut("orders/checkout", {cost: sum, shipAddress});

    React.useEffect(() => {
        if(chackout.data && !chackout.error) {
            setCartSum(0);
            setSum(0);
            setShipAddress("");
            navigate("/orders");
        }
    } , [chackout.data]);
    
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
                        defaultValue="1"
                        name="radio-buttons-group"
                        onChange={(e) => {
                            let val = e.target.value;
                            switch (val) {
                                case "1":
                                    setSum(cartSum + 0);
                                    break;
                                case "2":
                                    setSum(cartSum + 150);
                                    break;
                                case "3":
                                    setSum(cartSum + 1000);
                                    break;
                                default:
                                    setSum(cartSum + 0);
                                    break;
                            }
                        }}
                    >
                        <FormControlLabel value="1" control={<Radio />} label="איסוף עצמי" />
                        <FormControlLabel value="2" control={<Radio />} label="משלוח תוך 3 ימים עסקים (150 ₪)" />
                        <FormControlLabel value="3" control={<Radio />} label="משלוח תוך שבוע (1000 ₪)" />
                    </RadioGroup>
                </FormControl>
                <Divider />
                <FormControl fullWidth>
                    <FormLabel>אפשרויות הרכבה: </FormLabel>
                    <RadioGroup
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="1" control={<Radio />} label="ללא הרכבה (לא ניתן אחריות על מוצרים שלא הורכבו על ידינו)" />
                        <FormControlLabel value="2" control={<Radio />} label="כולל הרכבה ואחריות בתוספת על כל פריט בין 200 ל-300 שקלים. (התשלום בנפרד ביום ההרכבה למרכיב עצמו)" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="h5">
                    <Typography variant="caption" sx={{ fontSize: "75%" }}>
                        סך הכל לתשלום:
                    </Typography>
                    &nbsp;
                    {sum} ₪
                </Typography>
                <Typography variant="subtitle2">
                    כולל משלוח
                </Typography>
                <TextField
                    label="כתובת למשלוח"
                    value={shipAddress}
                    onChange={(e) => setShipAddress(e.target.value)}
                    fullWidth
                />
                <Button disabled={sum == 0} variant="contained" color="primary" onClick={() => chackout.getData()}>
                    הזמנה
                </Button>
            </Grid>
        </Grid>
    )
}
export default Order;