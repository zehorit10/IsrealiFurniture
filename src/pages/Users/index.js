import React from "react";
import useGet from "../../api/hooks/get";
import User from "./User";
import { Stack, Box, LinearProgress, Grid, Typography, TableContainer, TableCell, TableRow, Table, TableHead, TableBody, Button, IconButton } from "@mui/material";
import { useParams } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import Context from "../../context";


function Users() {
    const { isAuth } = React.useContext(Context);
    // const { category } = useParams();
    const { getData, data, loading, error } = useGet("users");
    // console.log(data);
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
            <User open={open} setOpen={setOpen} />
            <Grid container spacing={4} columnSpacing={6} sx={{ py: 2 }}>
                <Grid item xs={12}>
                    <Typography variant="h3">
                        ניהול לקוחות
                    </Typography>
                </Grid>
                <Grid item xs={10}>
                    <Box sx={{ height: "60vh", overflowY: "auto", pr: 2 }}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>שם </TableCell>
                                        <TableCell>מייל</TableCell>
                                        <TableCell>טלפון</TableCell>
                                        <TableCell>סוג משתמש</TableCell>
                                        <TableCell>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((user, index) => (
                                        <TableRow key={user.name}>
                                            <TableCell>{user.name} </TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>{user.phone}</TableCell>
                                            <TableCell>{user.role}</TableCell>
                                            <TableCell>
                                                <IconButton aria-label="delete">
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Grid>

                <Grid item xs={2}>
                    {isAuth && <Button variant="contained" onClick={() => setOpen(true)}>
                        הוספת משתמש
                    </Button>}
                </Grid>
            </Grid>
        </>
    )
}
export default Users;