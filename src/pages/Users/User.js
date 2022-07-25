import React from "react";

import { Dialog, DialogTitle, DialogContent, IconButton, Box, Button,TextField, Stack } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

function User({ open, setOpen }) {
    return (
        <Dialog open={open}>
            <DialogTitle>משתמש</DialogTitle>
            <IconButton onClick={() => {
                setOpen(false);
            }} sx={{ position: "absolute", top: 6, right: 6 }}>
                <CloseIcon />
            </IconButton>
            <DialogContent>
                <Stack direction="column" spacing={2} component="form" sx={{p:4}}>
                    <TextField 
                    label="שם"
                    variant="outlined"
                    fullWidth
                    />
                    <TextField 
                    label="מייל"
                    variant="outlined"
                    fullWidth
                    />
                    <TextField 
                    label="טלפון"
                    variant="outlined"
                    fullWidth
                    />
                    <TextField 
                    label="סיסמא"
                    variant="outlined"
                    fullWidth
                    />
                    <TextField 
                    label="סוג משתמש"
                    variant="outlined"
                    fullWidth
                    />
                    <Button variant="contained" color="primary" type="submit" fullWidth>שמירת משתמש</Button>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}
export default User;