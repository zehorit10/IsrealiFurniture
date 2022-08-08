import React from "react";

import { Dialog, DialogTitle, DialogContent, IconButton, Box, Button, TextField, Stack } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Context from "../context";
import useHttp from "../api/hooks/http";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginForm({ open, setOpen }) {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const { setIsAuth, setIsEmployee, setIsAdmin } = React.useContext(Context);

    const { getData, data, loading, error } = useHttp("login");
    console.log(data);

    const notify = () => {
        if (error || (data && !data.login)) {
            toast.error("ההתחברות נכשלה");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getData({ email, password });
        notify();
    }

    React.useEffect(() => {
        if (data && !error && !loading) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("role", data.role);
            setIsAuth(true);
            if( data.role === "employee") {
                setIsEmployee(true);
              } else if( data.role === "admin") {
                setIsEmployee(true);
                setIsAdmin(true);
              }
            setOpen(false);
        }
    }, [data]);

    return (
        <Dialog open={open}>
            <DialogTitle variant="contained" align="center">התחברות</DialogTitle>
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
                        label="מייל"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="סיסמא"
                        variant="outlined"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="contained" color="primary" type="submit" fullWidth>התחברות </Button>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}
export default LoginForm;