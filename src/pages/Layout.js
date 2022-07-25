import { Outlet } from "react-router-dom";
import { Box, Typography, Container } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout() {
    return (
        <Box sx={{ width: 1 }}>
            <Box component="header" sx={{ width: 1, height:"150px" }}>
               <Header />
            </Box>
            <Box component="main" sx={{width: 1, minHeight:"50vh"}}>
                <Container>
                    <Outlet />
                </Container>
            </Box>
            <Box component="footer" sx={{ width: 1 }}>
                <Footer />
            </Box>
        </Box>
    );
}
export default Layout;