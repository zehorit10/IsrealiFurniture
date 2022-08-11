import React from "react";
import { Grid, TextField, Typography, Stack, Text, Box, Button, Textarea } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");

    // const { getData, data, loading, error } = useHttp("contact");


    const notify = () => {
        toast('ההודעה נשלחה בהצלחה!', {
            position: "top-center",
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 1,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        notify();
    }

    return (
        <Grid container spacing={2} sx={{ my: 3 }}>
            <Grid item xs={12}>
                <Typography align="center" variant="h4">צור קשר</Typography>
                <Stack direction="column" alignItems={"center"} component='form' onSubmit={handleSubmit} spacing={1}>
                    <ToastContainer
                        position="top-center"
                        autoClose={7000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    <TextField
                        variant="outlined"
                        size="small"
                        label="שם:"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        size="small"
                        label="מייל:"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        size="small"
                        label="טלפון:"
                        fullWidth
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        size="small"
                        label="פרטי הודעה:"
                        fullWidth
                        multiline rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button type="submit" variant="contained" fullWidth > שלח</Button>
                </Stack >
            </Grid>
        </Grid >

    )
}
export default Contact;