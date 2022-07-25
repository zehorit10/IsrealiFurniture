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

} from "@mui/material";
import User from "./User";

function Users() {

    const [open, setOpen] = React.useState(false);

    return (
        <>
            <User open={open} setOpen={setOpen} />
                <Grid container spacing={4} columnSpacing={6} sx={{ py: 2 }}>
                    <Grid item xs={12}>
                        <Typography variant="h3">
                            ניהול לקוחות
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>שם </TableCell>
                                        <TableCell>מייל</TableCell>
                                        <TableCell>טלפון</TableCell>
                                        <TableCell>כתובת</TableCell>
                                        <TableCell>סוג משתמש</TableCell>
                                        <TableCell>
                                            <Button variant="contained" onClick={() => setOpen(true)}>
                                                הוספת משתמש
                                            </Button>
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
            export default Users;