import React from "react";
import { Grid, Typography, IconButton, Collapse, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import useGet from "../../api/hooks/get";
import usePut from "../../api/hooks/put";

function Profile() {

    const getProfile = useGet("users/profile");

    const [nameOpen, setNameOpen] = React.useState(false);
    const [name, setName] = React.useState("");
    const [emailOpen, setEmailOpen] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [phoneOpen, setPhoneOpen] = React.useState(false);
    const [phone, setPhone] = React.useState("");

    React.useEffect(() => {
        if (getProfile.data !== null) {
            setName(getProfile.data.name);
            setEmail(getProfile.data.email);
            setPhone(getProfile.data.phone);
        }
    }, [getProfile.data]);

    const updateProfile = usePut("users/profile", { name, email, phone });
    console.log(updateProfile.data);

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
                            <IconButton onClick={() => {
                                updateProfile.getData();
                                getProfile.getData();
                                setNameOpen(false)
                            }}>
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
                            <IconButton onClick={() => {
                                updateProfile.getData();
                                getProfile.getData();
                                setEmailOpen(false)
                            }}>
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
                            <IconButton onClick={() => {
                                updateProfile.getData();
                                getProfile.getData();
                                setPhoneOpen(false)
                            }}>
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