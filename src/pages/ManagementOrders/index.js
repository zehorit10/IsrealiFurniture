import React from "react";
import {
    Stack, Box, LinearProgress,
    Grid,
    Typography,
    TableContainer,
    TableCell,
    TableRow,
    Table,
    TableHead,
    TableBody,
    Button,
    IconButton

} from "@mui/material";
import EditOrder from "./EditOrder";
import DeleteIcon from '@mui/icons-material/Delete';
import Context from "../../context";
import useGet from "../../api/hooks/get";


function ManagementOrders() {
    const { getData, data, loading, error } = useGet("orders");
    const [open, setOpen] = React.useState(false);

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
        <>
            <EditOrder open={open} setOpen={setOpen} />
            <Grid container spacing={4} columnSpacing={6} sx={{ py: 2 }}>
                <Grid item xs={12}>
                    <Typography variant="h3">
                        ניהול הזמנות קיימות
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>מספר הזמנה </TableCell>
                                    <TableCell>תאריך</TableCell>
                                    <TableCell>שם לקוח</TableCell>
                                    <TableCell>מחיר</TableCell>
                                    <TableCell>פרטי הזמנה</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((order, index) => (
                                    <TableRow key={order.index}>
                                        <TableCell>{order.date}</TableCell>
                                        <TableCell>{order.customer} </TableCell>
                                        <TableCell>{order.cost}</TableCell>
                                        <TableCell>{order.items}</TableCell>
                                        <TableCell>
                                            <Button variant="contained" onClick={() => setOpen(true)}>
                                                עריכת הזמנה
                                            </Button>
                                            <IconButton aria-label="delete">
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    )
}
export default ManagementOrders;