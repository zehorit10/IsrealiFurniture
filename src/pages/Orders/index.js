import React from "react";
import { Grid, Stack, Box, LinearProgress, Typography, TableContainer, TableCell, TableRow, Table, TableHead, TableBody } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Context from "../../context";
import useGet from "../../api/hooks/get";


function Orders() {
    const { getData, data, loading, error } = useGet("orders");

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
                    הסטורית הזמנות
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>מספר הזמנה</TableCell>
                                <TableCell>תאריך</TableCell>
                                <TableCell>סך הכל</TableCell>
                                <TableCell>סטטוס</TableCell>
                                <TableCell>פרטי הזמנה</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((order, index) => (
                                <TableRow key={order.index}>
                                    <TableCell>{order.customer} </TableCell>
                                    <TableCell>{order.date}</TableCell>
                                    <TableCell>{order.cost}</TableCell>
                                    <TableCell>{order.delivery}</TableCell>
                                    <TableCell>{order.items}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}
export default Orders;