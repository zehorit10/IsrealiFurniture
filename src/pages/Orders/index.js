import React from "react";
import {Grid, Typography, TableContainer, TableCell, TableRow, Table, TableHead, TableBody} from "@mui/material";

function Orders() {
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
                        <TableBody></TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}
export default Orders;