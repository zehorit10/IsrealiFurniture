import React from "react";

import { Dialog, DialogTitle, DialogContent, IconButton, Alert, Button, TextField, Stack } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Context from "../../context";
import useHttp from "../../api/hooks/http";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function User({ open, setOpen }) {

    const notify = () => {
        if (data && data.register && !error && !loading) {
            toast.success("ההרשמה בוצעה בהצלחה");
        }
        else if (error || (data && !data.registe)) {
            toast.error("ההרשמה נכשלה");
        }
    }
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [role, setRole] = React.useState("");


    const { setIsAuth } = React.useContext(Context);

    const { getData, data, loading, error } = useHttp("register");
    console.log(data);

    const handleSubmit = (e) => {
        e.preventDefault();
        getData({ name, email, phone, password, role });
        notify();
    }

    React.useEffect(() => {
        if (error || (data && !data.registe)) {
            setTimeout(() => {
                setOpen(false);
            }, 2000);
        }
    }, [data]);

    return (
        <Dialog open={open}>
            <DialogTitle variant="contained" align="center">הוספת משתמש</DialogTitle>
            <IconButton onClick={() => {
                setOpen(false);
            }} sx={{ position: "absolute", top: 6, right: 6 }}>
                <CloseIcon />
            </IconButton>
            <DialogContent>
                <Stack direction="column" spacing={2} component="form" onSubmit={handleSubmit} sx={{ p: 4 }}>
                    <ToastContainer
                        position="top-right"
                        autoClose={4000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    {/* {(data && data.register && !error && !loading) && <Alert severity="success">ההרשמה בוצעה בהצלחה</Alert>}
                    {(error || (data && !data.registe)) && <Alert severity="error">ההרשמה נכשלה</Alert>} */}
                    <TextField
                        label="שם"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        label="מייל"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="טלפון"
                        variant="outlined"
                        fullWidth
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <TextField
                        label="סיסמא"
                        variant="outlined"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        label="סוג משתמש"
                        variant="outlined"
                        fullWidth
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    <Button variant="contained" color="primary" type="submit" fullWidth>הרשמה </Button>
                    {/* <Button variant="contained" color="primary" type="submit" fullWidth>הרשמה </Button> */}
                </Stack>
            </DialogContent>
        </Dialog>
    )
}
export default User;

// import React from "react";

// import { Dialog, DialogTitle, DialogContent, IconButton, Box, Button,TextField, Stack } from "@mui/material";
// import CloseIcon from '@mui/icons-material/Close';

// function User({ open, setOpen }) {
//     return (
//         <Dialog open={open}>
//             <DialogTitle variant="contained" align="center">משתמש</DialogTitle>
//             <IconButton onClick={() => {
//                 setOpen(false);
//             }} sx={{ position: "absolute", top: 6, right: 6 }}>
//                 <CloseIcon />
//             </IconButton>
//             <DialogContent>
//                 <Stack direction="column" spacing={2} component="form" sx={{p:4}}>
//                     <TextField
//                     label="שם"
//                     variant="outlined"
//                     fullWidth
//                     />
//                     <TextField
//                     label="מייל"
//                     variant="outlined"
//                     fullWidth
//                     />
//                     <TextField
//                     label="טלפון"
//                     variant="outlined"
//                     fullWidth
//                     />
//                     <TextField
//                     label="סיסמא"
//                     variant="outlined"
//                     fullWidth
//                     />
//                     <TextField
//                     label="סוג משתמש"
//                     variant="outlined"
//                     fullWidth
//                     />
//                     <Button variant="contained" color="primary" type="submit" fullWidth>שמירת משתמש</Button>
//                 </Stack>
//             </DialogContent>
//         </Dialog>
//     )
// }
// export default User;