import React from "react";
import {
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
import DeleteIcon from '@mui/icons-material/Delete';
import EditOrder from "./EditOrder";


function ManagementOrders() {
    const [open, setOpen] = React.useState(false);

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
                                    <TableCell>סטטוס</TableCell>
                                    <TableCell>פרטי הזמנה</TableCell>
                                    <TableCell>
                                        <Button variant="contained" onClick={() => setOpen(true)}>
                                            עריכת הזמנה
                                        </Button>
                                        <IconButton aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody></TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    )
}
export default ManagementOrders;