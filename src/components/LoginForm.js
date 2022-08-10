import React from "react";

import { Dialog, DialogTitle, DialogContent, IconButton, Box, Button, TextField, Stack, Link, Alert } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Context from "../context";
import useHttp from "../api/hooks/http";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {myEncrypt} from "../func";
import axios from "../api/axios";

function LoginForm({ open, setOpen }) {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [newPassword, setNewPassword] = React.useState(null);

    const { setIsAuth, setIsEmployee, setIsAdmin } = React.useContext(Context);

    const { getData, data, loading, error } = useHttp("login");

    const handleSubmit = async(e) => {
        e.preventDefault();
        getData({ email, password: await myEncrypt(password) });
    }

    React.useEffect(() => {
        if (data && !error && !loading) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("role", data.role);
            setIsAuth(true);
            if (data.role === "employee") {
                setIsEmployee(true);
            } else if (data.role === "admin") {
                setIsEmployee(true);
                setIsAdmin(true);
            }
            setOpen(false);
        }
    }, [data]);
    React.useEffect(() => {
        if (error) {
            toast.error("ההתחברות נכשלה");
            // setTimeout(() => {
            //     setOpen(false);
            // }, 2500);
            // setEmail("");
            // setEmail("");
        }
    }, [error]);


    return (
        <Dialog open={open}>
            <DialogTitle variant="contained" align="center">התחברות</DialogTitle>
            <IconButton onClick={() => {
                setOpen(false);
            }} sx={{ position: "absolute", top: 6, right: 6 }}>
                <CloseIcon />
            </IconButton>
            <DialogContent>
                {newPassword && <Alert severity="info">{newPassword}</Alert>}
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
                        label="מייל"
                        type="username"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="סיסמא"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="contained" color="primary" type="submit" fullWidth>התחברות </Button>
                    <Button type="button" variant="text" onClick={async() => {
                        let response = await axios.post("reset-password", { email });
                        setNewPassword(response.newPassword);
                        
                    }}>שכחת סיסמא? לחץ כאן</Button>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}
export default LoginForm;