import React from "react";
import { useNavigate } from "react-router-dom"
import { Box, Grid, AppBar, Tabs, Tab, IconButton, Typography, Button, Stack, Menu, MenuItem } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Context from "../context";
import categoryList from "../constant/category";


const menuList = [
    { title: "דף הבית", path: "/" },
    { title: "אודות", path: "/about" },
    { title: "קטלוג", path: "/catalog" },
    { title: "צור קשר", path: "/contact" },
    { title:  "מוצר חדש", path: "/newProduct" },
    { title: "סל קניות", path: "/cart" },
    { title: "פרופיל", path: "/profile" },
    { title: "השלמת הזמנה", path: "/order" },
    { title: "הסטורית הזמנות", path: "/orders" },
    { title: "ניהול משתמשים", path: "/users" },
    { title: "פרטי מוצר", path: "/productDetails" },
    { title: "מלאי מחסן", path: "/stock" },

]



function Header() {

    let navigate = useNavigate();
    const { cartTotal } = React.useContext(Context);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const [value, setValue] = React.useState("/");
    const handleChange = (event, newValue) => {
        if (newValue === '/catalog') {
            return;
        } else {
            setValue(newValue);
            navigate(newValue);
        }
    };



    return (
        <AppBar>
            <Box sx={{ width: 1, height: 0.65, bgcolor: "primary.main" }}>
                <Grid container justifyContent="space-between" alignItems="center" sx={{ width: 1, height: 1 }}>
                    <Grid item xs={2} >
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                        >
                            <Button variant="contained" color="secondary">התחברות</Button>
                            <Button variant="contained" color="secondary">הרשמה</Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={4} >
                        <Typography align="center" color="secondary" variant="h3">
                            רהיט ישראלי
                        </Typography>
                        <Typography>
                            {cartTotal}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} >
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                        >
                            <IconButton>
                                <InstagramIcon color="secondary" />
                            </IconButton>
                            <IconButton>
                                <FacebookIcon color="secondary" />
                            </IconButton>
                            <IconButton>
                                <WhatsAppIcon color="secondary" />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: 1, height: 0.35, bgcolor: "secondary.main" }}>
                <Tabs value={value} onChange={handleChange} centered>
                    {menuList.map((item, index) => {
                        if (item.path === "/catalog") {
                            return (
                                <Tab key={index}
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    label={item.title}
                                    value={item.path}
                                />
                            )
                        } else {
                            return (
                                <Tab key={index} label={item.title} value={item.path} />
                            )
                        }
                    })}
                </Tabs>
            </Box>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {categoryList.map((item, index) => <MenuItem key={index} onClick={() => {
                    setAnchorEl(null);
                    let path = item.value== 0 ? "/catalog": `/catalog/${item.value}`;
                    navigate(path);
                }}>{item.label}</MenuItem>)}
            </Menu>
        </AppBar>
    )
}

export default Header;