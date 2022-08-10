import React from "react";
import {useNavigate} from 'react-router-dom';
import { Box, Grid, Typography, Stack, LinearProgress, Button } from "@mui/material";
import CartItem from "./CartItem";
import useGet from "../../api/hooks/get";
import Context from "../../context";

function Cart() {

    let navigate = useNavigate();

    const {setCartSum} = React.useContext(Context);
    
    const { getData, data, loading, error } = useGet("orders/cart");
    const [sum, setSum] = React.useState(0);

    React.useEffect(() => {
        if (data) {
            setSum(0);
        }
    } , [data]);
    React.useEffect(() => {
        setCartSum(sum);
    } , [sum]);
    
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
                {(data.length > 0) && <Box sx={{height:"60vh", overflowY:"auto", pr:2}}>
                    {data[0].items.map((item, index) => <CartItem item={item} gatAllData={getData} setSum={setSum} key={index} />)}
                </Box>}
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
                    לא כולל משלוח והרכבה
                </Typography>
                <Button variant="contained" onClick={() => navigate("/order")}>מעבר להשלמת הזמנה</Button>
            </Grid>
        </Grid>
    )
}
export default Cart;