import React from "react";
import useGet from "../../api/hooks/get";
import useDelete from "../../api/hooks/delete";
import User from "./User";
import EditUser from "./EditUser";
import { Stack, Box, LinearProgress, Grid, Typography, TableContainer, TableCell, TableRow, Table, TableHead, TableBody, Button, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Context from "../../context";
import EditIcon from '@mui/icons-material/Edit';



function Users() {

    const { isAdmin } = React.useContext(Context);
    const { getData, data, loading, error } = useGet("users");

    const [open, setOpen] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [user, setUser] = React.useState({});

    const getProfile = useGet("users/profile");

    const deleteUser = useDelete("users/");

    React.useEffect(() => {
        if (deleteUser.data !== null && !deleteUser.error) {
            getData();
        }
    }, [deleteUser.data]);

    React.useEffect(() => {
        getData();
    }, [open, openEdit]);

    // React.useEffect(() => {
    //     getData();
    // }, [openEdit]);

    const handleEdit = async (e) => {
        // e.preventDefault();
        // const { id } = e.target.dataset;
        // const { data } = await fetch(`/api/users/${id}`, {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // });
        // setOpen(true);
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
        <>
            <User open={open} setOpen={setOpen} />
            <EditUser openEdit={openEdit} setOpenEdit={setOpenEdit} user={user} />
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
                                        
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map((user, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{user.name} </TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>{user.phone}</TableCell>
                                            <TableCell>{user.role}</TableCell>
                                            
                                            <TableCell>
                                                <IconButton onClick={() => {
                                                    deleteUser.getData(user._id);
                                                }} aria-label="delete">
                                                    <DeleteIcon />
                                                </IconButton>
                                                <IconButton onClick={() => {
                                                    setUser(user);
                                                    setOpenEdit(true)
                                                }}>
                                                    <EditIcon />
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
                    {/* {isAdmin && <Button variant="contained" onClick={() => setOpen(true)}>הוספת משתמש</Button>} */}
                    {isAdmin && <Button variant="contained" onClick={() => setOpen(true)}>הוספת משתמש</Button>}
                </Grid>
            </Grid>
        </>
    )
}
export default Users;