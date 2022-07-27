import React from "react";

import { Dialog, DialogTitle, DialogContent, IconButton, Box, Button,TextField, Stack } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Login } from "@mui/icons-material";

function LoginForm({ open, setOpen }) {
    return (
        <Dialog open={open}>
            <DialogTitle variant="contained" align="center">התחברות</DialogTitle>
            <IconButton onClick={() => {
                setOpen(false);
            }} sx={{ position: "absolute", top: 6, right: 6 }}>
                <CloseIcon />
            </IconButton>
            <DialogContent>
                <Stack direction="column" spacing={2} component="form" sx={{p:4}}>
                    <TextField 
                    label="מייל"
                    variant="outlined"
                    fullWidth
                    />
                    <TextField 
                    label="סיסמא"
                    variant="outlined"
                    fullWidth
                    />
                    <Button variant="contained" color="primary" type="submit" fullWidth>התחברות </Button>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}
export default LoginForm;