import React from "react";
import { Dialog, Box, LinearProgress, Collapse, DialogTitle, DialogContent, IconButton, Alert, Button, Stack, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Context from "../../context";
import usePut from "../../api/hooks/put";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import roles from "../../constant/roles";
import Edit from "@mui/icons-material/Edit";


function EditUser({ openEdit, setOpenEdit, user }) {

    const { isAdmin } = React.useContext(Context);


    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [role, setRole] = React.useState("");

    const { getData, data, loading, error } = usePut("users/", { _id:user._id, name, email, phone, role });

    const handleSubmit = (e) => {
        e.preventDefault();
        getData();
    }

    React.useEffect(() => {
        setName(user.name);
        setEmail(user.email);
        setPhone(user.phone);
        setRole(user.role);
    } , [user]);

    React.useEffect(() => {
        if (data && !error) {
            toast.success("השינויים נשמרו בהצלחה");
            setTimeout(() => {
                setOpenEdit(false);
            }, 1000);
        }
    }, [data]);

    React.useEffect(() => {
        if (error) {
            toast.error("העדכון נכשל");
        }
    }, [error]);

    return (
        <Dialog open={openEdit}>
            <DialogTitle variant="contained" align="center">משתמש</DialogTitle>
            <IconButton onClick={() => {
                setOpenEdit(false);
            }} sx={{ position: "absolute", top: 6, right: 6 }}>
                <CloseIcon />
            </IconButton>
            <DialogContent>
                <Stack direction="column" spacing={2} component="form" onSubmit={handleSubmit} sx={{ p: 4 }}>
                    <ToastContainer
                        position="top-right"
                        autoClose={4000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    <TextField
                            label="שם"
                            type="username"
                            variant="outlined"
                            fullWidth
                            value={name || ''}
                            onChange={(e) => setName(e.target.value)}
                        />
                    <TextField
                            label="מייל"
                            variant="outlined"
                            type="email"
                            fullWidth
                            value={email || ''}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    <TextField
                            label="טלפון"
                            variant="outlined"
                            type="phone"
                            fullWidth
                            value={phone || ''}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    {isAdmin && <FormControl size="small" fullWidth>
                        <InputLabel>סוג משתמש</InputLabel>
                        <Select
                            label="סוג משתמש"
                            name="role"
                            variant="outlined"
                            fullWidth
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            {roles.map((c, i) => (
                                <MenuItem key={i} value={c.value}>{c.label}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>}
                    <Button variant="contained" color="primary" type="submit" fullWidth>שמירת משתמש </Button>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}
export default EditUser;