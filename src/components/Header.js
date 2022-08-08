import React from "react";
import { useNavigate } from "react-router-dom"
import { Box, Grid, AppBar, Tabs, Tab, IconButton, Typography, Button, Stack, Menu, MenuItem } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Context from "../context";
import categoryList from "../constant/category";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";


const menuList = [
    { title: "דף הבית", path: "/" },
    { title: "אודות", path: "/about" },
    { title: "קטלוג", path: "/catalog" },
    { title: "צור קשר", path: "/contact" },
    { title: "מוצר חדש", path: "/newProduct", isEmployee: true }, //manageer && worker
    { title: "סל קניות", path: "/cart", isAuth: true }, //castomer
    { title: "פרופיל", path: "/profile", isAuth: true }, 
    { title: "השלמת הזמנה", path: "/order", isAuth: true }, //castomer
    { title: "הסטורית הזמנות", path: "/orders", isAuth: true }, 
    { title: "ניהול משתמשים", path: "/users", isEmployee: true }, //manageer edit && worker
    { title: "פרטי מוצר", path: "/productDetails" },
    { title: "מלאי מחסן", path: "/stackProduct", isEmployee: true }, //manageer && worker
    { title: "ניהול הזמנות", path: "/managementOrders", isEmployee: true }, //manageer && worker
    { title: "צאט", path: "/chat", isAuth: true }


]



function Header() {

    let navigate = useNavigate();
    const { cartTotal, isAuth, isEmployee, isAdmin } = React.useContext(Context);

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
            return setValue(newValue);
        } else {
            setValue(newValue);
            navigate(newValue);
        }
    };

    const [openLogin, setOpenLogin] = React.useState(false);
    const [openSingin, setOpenSingin] = React.useState(false);


    return (
        <>
            <LoginForm open={openLogin} setOpen={setOpenLogin} />
            <RegistrationForm open={openSingin} setOpen={setOpenSingin} />
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
                                {!isAuth && <Button variant="contained" color="secondary" onClick={() => setOpenLogin(true)}>
                                    התחברות
                                </Button>}
                                {!isAuth && <Button variant="contained" color="secondary" onClick={() => setOpenSingin(true)}>
                                    הרשמה
                                </Button>}
                                {isAuth && <Button variant="contained" color="secondary" onClick={() => {
                                    localStorage.clear();
                                    window.location.replace("/");
                                }}>
                                    התנתקות
                                </Button>}
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
                                if (item.isAuth && !isAuth) return null;
                                if (item.isEmployee && !isEmployee ) return null;
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
                        let path = item.value == 0 ? "/catalog" : `/catalog/${item.value}`;
                        navigate(path);
                    }}>{item.label}</MenuItem>)}
                </Menu>
            </AppBar>
        </>
    )
}

export default Header;