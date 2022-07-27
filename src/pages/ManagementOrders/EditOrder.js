import React from "react";

import { Dialog, DialogTitle, DialogContent, IconButton, Box, Button,TextField, Stack } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

function EditOrder({ open, setOpen }) {
    return (
        <Dialog open={open}>
            <DialogTitle variant="contained" align="center">הזמנה</DialogTitle>
            <IconButton onClick={() => {
                setOpen(false);
            }} sx={{ position: "absolute", top: 6, right: 6 }}>
                <CloseIcon />
            </IconButton>
            <DialogContent>
                <Stack direction="column" spacing={2} component="form" sx={{p:4}}>
                    
                    <TextField 
                    label="פרטי הזמנה"
                    variant="outlined"
                    fullWidth
                    />
                    
                    <TextField 
                    label="סטטוס "
                    variant="outlined"
                    fullWidth
                    />
                    <Button variant="contained" color="primary" type="submit" fullWidth>שמירת משתמש</Button>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}
export default EditOrder;