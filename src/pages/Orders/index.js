import React from "react";
import {
    Grid,
    Stack,
    Box,
    LinearProgress,
    Typography,
    TableContainer,
    TableCell, TableRow, Table, TableHead, TableBody,
    FormControl, InputLabel, Select, MenuItem
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Context from "../../context";
import useGet from "../../api/hooks/get";
import useHttp from "../../api/hooks/http";
import { formatDate } from '../../func';

function Orders() {

    const { isAdmin, isEmployee } = React.useContext(Context);

    const { getData, data, loading, error } = useGet("orders");
    
    const changeStatus = useHttp("orders/status", "PUT");

    React.useEffect(() => {
        if (changeStatus.data && !changeStatus.error) {
            getData();
        }
    }, [changeStatus.data, changeStatus.error]);

    const status = (delivery) => {
        switch (delivery) {
            case "1":
                return "בהמתנה";
            case "2":
                return "נשלח";
            case "3":
                return "בוטל";
            default:
                return "בהמתנה";
        }
    }

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
                    {isAdmin || isEmployee ? "ניהול" : "היסטורית"}
                    &nbsp;
                    הזמנות
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>מספר הזמנה</TableCell>
                                <TableCell>שם המזמין</TableCell>
                                <TableCell>תאריך</TableCell>
                                <TableCell>סך הכל</TableCell>
                                <TableCell>סטטוס</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((order, index) => (
                                <TableRow key={index}>
                                    <TableCell>{order._id} </TableCell>
                                    <TableCell>{order.customer.name} </TableCell>
                                    <TableCell>{formatDate(new Date(order.date))}</TableCell>
                                    <TableCell>{order.cost}</TableCell>
                                    {(!isAdmin && !isEmployee) && <TableCell>{status(order.delivery)}</TableCell>}
                                    {(isAdmin || isEmployee) && <TableCell>
                                        <Box sx={{ minWidth: 120 }}>
                                            <FormControl fullWidth size="small">
                                                <InputLabel>סטטוס</InputLabel>
                                                <Select
                                                    value={order.delivery}
                                                    label="סטטוס"
                                                    onChange={(e) => {
                                                        changeStatus.getData({ id: order._id, delivery: e.target.value });
                                                    }}
                                                >
                                                    <MenuItem value={1}>בהמתנה</MenuItem>
                                                    <MenuItem value={2}>נשלח</MenuItem>
                                                    <MenuItem value={3}>בוטל</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </TableCell>}
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