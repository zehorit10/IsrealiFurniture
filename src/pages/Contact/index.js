import React from "react";
import { Grid, TextField, Typography, Stack, Text, Box, Button, Textarea } from "@mui/material";

function Contact({ inputs, handleChange, loading }) {
    return (
        <Grid container spacing={2} sx={{ my: 3 }}>
            <Grid item xs={12}>
                <Typography align="center" variant="h4">צור קשר</Typography>
                <Stack direction="column" alignItems={"center"} spacing={1}>
                    <TextField
                        variant="outlined"
                        size="small"
                        label="שם:"
                        fullWidth
                    />
                    <TextField
                        variant="outlined"
                        size="small"
                        label="מייל:"
                        fullWidth
                    />
                    <TextField
                        variant="outlined"
                        size="small"
                        label="טלפון:"
                        fullWidth
                    />
                    <TextField
                        variant="outlined"
                        size="small"
                        label="פרטי הודעה:"
                        fullWidth
                        multiline rows={5}
                    />

                    <Button type="submit" variant="contained" fullWidth >
                        שלח
                    </Button>
                </Stack >
            </Grid>
        </Grid >

    )
}
export default Contact;