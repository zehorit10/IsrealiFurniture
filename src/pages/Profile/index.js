import React from "react";
import { Grid, Typography, IconButton, Collapse, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

const data = {
    name: "אלכסנדר אברהם",
    email: "vdf@dfvfg",
    phone: "054-1234567",
    address: {
        street: "הגליל",
        number: "12",
        city: "ירושלים"
    }
}

function Profile() {

    const [nameOpen, setNameOpen] = React.useState(false);
    const [name, setName] = React.useState(data.name);
    const [emailOpen, setEmailOpen] = React.useState(false);
    const [email, setEmail] = React.useState(data.email);
    const [phoneOpen, setPhoneOpen] = React.useState(false);
    const [phone, setPhone] = React.useState(data.phone);
    const [streetOpen, setStreetOpen] = React.useState(false);
    const [street, setStreet] = React.useState(data.address.street);


    return (
        <Grid container spacing={4} columnSpacing={6} sx={{ py: 2 }}>
            <Grid item xs={12}>
                <Typography variant="h3">
                    פרופיל משתמש
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container alignItems="center">
                    <Grid item xs={3}>
                        <Typography variant="caption">שם:</Typography>
                        <Typography variant="body1">
                            {name}
                            <IconButton onClick={() => setNameOpen(!nameOpen)}>
                                <EditIcon />
                            </IconButton>
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Collapse in={nameOpen} orientation="horizontal">
                            <TextField
                                label="שם"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                size="small"
                            />
                            <IconButton onClick={() => setNameOpen(false)}>
                                <CheckIcon />
                            </IconButton>
                        </Collapse>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container alignItems="center">
                    <Grid item xs={3}>
                        <Typography variant="caption">מייל:</Typography>
                        <Typography variant="body1">
                            {email}
                            <IconButton onClick={() => setEmailOpen(!emailOpen)}>
                                <EditIcon />
                            </IconButton>
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Collapse in={emailOpen} orientation="horizontal">
                            <TextField
                                label="מייל"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                size="small"
                            />
                            <IconButton onClick={() => setEmailOpen(false)}>
                                <CheckIcon />
                            </IconButton>
                        </Collapse>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={3}>
                        <Typography variant="caption">טלפון:</Typography>
                        <Typography variant="body1">
                            {phone}
                            <IconButton onClick={() => setPhoneOpen(!phoneOpen)}>
                                <EditIcon />
                            </IconButton>
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Collapse in={phoneOpen} orientation="horizontal">
                            <TextField
                                label="טלפון"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                size="small"
                            />
                            <IconButton onClick={() => setPhoneOpen(false)}>
                                <CheckIcon />
                            </IconButton>
                        </Collapse>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={3}>
                        <Typography variant="h3">כתובת:</Typography>
                        <Typography variant="caption">רחוב:</Typography>
                        <Typography variant="body1">
                            {street}
                            <IconButton onClick={() => setStreetOpen(!streetOpen)}>
                                <EditIcon />
                            </IconButton>
                        </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Collapse in={streetOpen} orientation="horizontal">
                            <TextField
                                label="רחוב"
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                                size="small"
                            />
                            <IconButton onClick={() => setStreetOpen(false)}>
                                <CheckIcon />
                            </IconButton>
                        </Collapse>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
export default Profile;