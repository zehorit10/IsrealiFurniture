<<<<<<< HEAD
import React from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> 0bac53e1ea341c6872d3e414e60f1691a4995297
import { Grid, TextField, Typography, Stack, Text, Box, Button, Textarea } from "@mui/material";

function Contact({ inputs, handleChange, loading }) {
    return (
<<<<<<< HEAD

        <Grid container spacing={2} sx={{ my: 3 }}>
            <Grid item xs={2}>
                <Stack direction="column" spacing={4}>
                    <Box sx={{ height: 50 }}>  </Box>
                    <Typography align={"end"}>
                        שם
                    </Typography>
                    <Typography align={"end"}>
                        מייל
                    </Typography>
                    <Typography align={"end"}>
                        טלפון
                    </Typography>
                    <Typography align={"end"}>
                        פרטי הודעה
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={8}>
                <Typography align="center" variant="h4">צור קשר</Typography>
                <Stack direction="column" spacing={1}>
=======
        <Grid container spacing={2} sx={{ my: 3 }}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6} >
                <Typography align="center" variant="h4">צור קשר</Typography>
                <Stack direction="column" alignItems={"center"} spacing={1}>
>>>>>>> 0bac53e1ea341c6872d3e414e60f1691a4995297
                    <TextField
                        variant="outlined"
                        size="small"
                        label="שם:"
<<<<<<< HEAD
                    />

                    <TextField 
                        variant="outlined"
                        size="small"
                        label="מייל"
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
                        multiline
                        rows={4}
                    />

                    <Button type="submit" variant="contained" >
=======
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
>>>>>>> 0bac53e1ea341c6872d3e414e60f1691a4995297
                        שלח
                    </Button>
                </Stack>
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
    )
}
export default Contact;