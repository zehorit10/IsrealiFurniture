import React from "react";

import { Dialog, DialogTitle, DialogContent, IconButton, Box, Button, TextField, Stack } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Login } from "@mui/icons-material";

import Context from "../context";
import useHttp from "../api/hooks/http";

function LoginForm({ open, setOpen }) {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [password, setPassword] = React.useState("");

    const { setIsAuth } = React.useContext(Context);

    const { getData, data, loading, error } = useHttp("login");
    console.log(data);

    const handleSubmit = (e) => {
        e.preventDefault();
        getData({ name, email, phone, password });
    }

    React.useEffect(() => {
        if (data && !error && !loading) {
            localStorage.setItem("token", data.token);
            setIsAuth(true);
            setOpen(false);
        }
    }, [data]);

    return (
        <Dialog open={open}>
            <DialogTitle variant="contained" align="center">הרשמה</DialogTitle>
            <IconButton onClick={() => {
                setOpen(false);
            }} sx={{ position: "absolute", top: 6, right: 6 }}>
                <CloseIcon />
            </IconButton>
            <DialogContent>
                <Stack direction="column" spacing={2} component="form" onSubmit={handleSubmit} sx={{ p: 4 }}>
                    <TextField
                        label="שם"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        label="מייל"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="טלפון"
                        variant="outlined"
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
                    <Button variant="contained" color="primary" type="submit" fullWidth>התחברות </Button>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}
export default LoginForm;