import { Box, Typography, Stack, Divider } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Footer(){
    return(
        <>
        <Box sx={{width:1,height:"15vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <StarBorderIcon fontSize="large" color="primary" />
        </Box>
        <Box sx={{bgcolor: "primary.main", color: "secondary.main", py:5}}>
            <Stack direction="row" justifyContent="space-around" alignItems="center" sx={{width:1}}>
                <Typography align="center" variant="body1"> 
                    <Typography variant="caption">טלפון:</Typography>&nbsp;
                    052-7736690
                </Typography>
                <Typography align="center" variant="body1"> 
                    <Typography variant="caption">כתובת:</Typography>&nbsp;
                    הרצל 100, בני ברק                
                </Typography>
                <Typography align="center" variant="body1"> 
                    <Typography variant="caption">מייל:</Typography>&nbsp;
                    saramaimon01@gmail.com
                </Typography>
            </Stack>
            <Divider variant="middle"  sx={{bgcolor: "secondary.main", my:4}}/>
            <Typography align="center" variant="h6">זהורית ושירי</Typography>
            <Typography align="center" variant="subtitle2">&copy; 2022</Typography>
        </Box>
        </>
    )
}
export default Footer;