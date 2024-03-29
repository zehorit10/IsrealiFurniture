import React from "react";
import { Dialog,Box,LinearProgress, DialogTitle, DialogContent, IconButton, Alert, Button, Stack, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Context from "../../context";
import useHttp from "../../api/hooks/http";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import roles from "../../constant/roles";
import {myEncrypt} from "../../func";


function User({ open, setOpen }) {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [role, setRole] = React.useState("");
    const { setIsAuth } = React.useContext(Context);

    const { getData, data, loading, error } = useHttp("register");

    const handleSubmit = async(e) => {
        e.preventDefault();
        getData({ name, email, phone, password: await myEncrypt(password), role });
    }

    React.useEffect(() => {
        if (data && data.register) {
            toast.success("ההרשמה בוצעה בהצלחה");
            setTimeout(() => {
                setOpen(false);
            }, 4000);
            setName("");
            setEmail("");
            setPhone("");
            setPassword("");
            setRole("");
        }
    }, [data]);
    React.useEffect(() => {
        if (error) {
            toast.error("ההרשמה נכשלה");
        }
    }, [error]);

    return (
        <Dialog open={open}>
            <DialogTitle variant="contained" align="center">משתמש</DialogTitle>
            <IconButton onClick={() => {
                setOpen(false);
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
                        variant="outlined"
                        type="username"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        label="מייל"
                        variant="outlined"
                        type="email"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="טלפון"
                        variant="outlined"
                        type="phone"
                        fullWidth
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <TextField
                        label="סיסמא"
                        variant="outlined"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormControl size="small" fullWidth>
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
                    </FormControl>
                    <Button variant="contained" color="primary" type="submit" fullWidth>שמירת משתמש </Button>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}
export default User;