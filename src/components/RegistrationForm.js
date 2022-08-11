import React from "react";

import { Dialog, DialogTitle, DialogContent, IconButton, Alert, Button, TextField, Stack } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Context from "../context";
import useHttp from "../api/hooks/http";
import {myEncrypt} from "../func";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginForm({ open, setOpen }) {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [password, setPassword] = React.useState("");

    const { setIsAuth } = React.useContext(Context);

    const { getData, data, loading, error } = useHttp("register");

    const handleSubmit = async(e) => {
        e.preventDefault();
        getData({ name, email, phone, password: await myEncrypt(password) });
    }

    React.useEffect(() => {
        if (data && data.register) {
            toast.success("ההרשמה בוצעה בהצלחה");
            setTimeout(() => {
                setOpen(false);
            }, 2500);
            setName("");
            setEmail("");
            setPhone("");
            setPassword("");
        }
    }, [data]);
    React.useEffect(() => {
        if (error) {
            toast.error("ההרשמה נכשלה");
        }
    }, [error]);

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
                    {/* {(data && data.register && !error && !loading) && <Alert severity="success">ההרשמה בוצעה בהצלחה</Alert>}
                    {(error || (data && !data.registe)) && <Alert severity="error">ההרשמה נכשלה</Alert>} */}
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
                        type="password"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="contained" color="primary" type="submit" fullWidth>הרשמה </Button>
                    {/* <Button variant="contained" color="primary" type="submit" fullWidth>הרשמה </Button> */}
                </Stack>
            </DialogContent>
        </Dialog>
    )
}
export default LoginForm;