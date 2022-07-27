import React from 'react'
import { Grid, Paper, Button, Typography, TextField, Dialog, DialogTitle, IconButton, DialogContent, Stack } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function RegistrationForm({ open, setOpen }) {

    const phoneRegExp = /^05\d([-]{0,1})\d{7}$/
    // const passwordRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    const initialValues = {
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(1, "שם קצר מידי").required("חובה"),
        email: Yup.string().email("הכנס מייל תקין").required("חובה"),
        // phoneNumber: Yup.number().typeError("Enter valid Phone number").required("Required"),
        phoneNumber: Yup.string().matches(phoneRegExp, "הכנס מספר תקין").required("חובה"),
        password: Yup.string().min(8, "מינימום 8 תווים").required('חובה'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "סיסמא לא תואמת").required('חובה')
    })
    const onSubmit = (values, props) => {

        alert(JSON.stringify(values), null, 2)
        props.resetForm()
    }
    return (
        <Dialog open={open}>
            <Grid >
                <Paper elevation={0} >
                    <DialogTitle variant="contained" align="center">הרשמה</DialogTitle>
                    <IconButton onClick={() => {
                        setOpen(false);
                    }} sx={{ position: "absolute", top: 6, right: 6 }}>
                        <CloseIcon />
                    </IconButton>
                    <DialogContent>
                        <Stack direction="column" spacing={2} component="form" sx={{ p: 4 }}>
                            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                                {(props) => (
                                    <Form noValidate>
                                        <Field as={TextField} name='name' label='שם' fullWidth
                                            error={props.errors.name && props.touched.name}
                                            helperText={<ErrorMessage name='name' />} required />

                                        <Field as={TextField} name='email' label='מייל' fullWidth
                                            error={props.errors.email && props.touched.email}
                                            helperText={<ErrorMessage name='email' />} required />

                                        <Field as={TextField} name="phoneNumber" label='מספר טלפון' fullWidth
                                            error={props.errors.phoneNumber && props.touched.phoneNumber}
                                            helperText={<ErrorMessage name='phoneNumber' />} required />

                                        <Field as={TextField} name='password' label='סיסמא' type='password' fullWidth
                                            error={props.errors.password && props.touched.password}
                                            helperText={<ErrorMessage name='password' />} required />

                                        <Field as={TextField} name='confirmPassword' label='אימות סיסמא' type='password' fullWidth
                                            error={props.errors.confirmPassword && props.touched.confirmPassword}
                                            helperText={<ErrorMessage name='confirmPassword' />} required />

                                        <Button variant="contained" color="primary" type="submit" fullWidth>הרשמה </Button>

                                    </Form>
                                )}
                            </Formik>
                        </Stack>
                    </DialogContent >
                </Paper>
            </Grid>
        </Dialog >
    )
}

export default RegistrationForm;