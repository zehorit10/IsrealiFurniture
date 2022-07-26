import React from "react";
import { Grid, TextField, Typography, Stack, Text, Box, Button, Textarea } from "@mui/material";

function Contact() {
    return (

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
                    <TextField
                        variant="outlined"
                        size="small"
                        label="שם:"
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
                        שלח
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    )
}
export default Contact;