import React from "react";

import { Grid, Alert, AlertTitle } from "@mui/material";
import UploadImage from "./UploadImage";
import ProductForm from "./ProductForm";

import usePost from "../../api/hooks/post";

function NewProduct() {

    const [inputs, setInputs] = React.useState({});
    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    const { getData, data, loading, error } = usePost("products/", inputs)

    const handleSubmit = async (e) => {
        e.preventDefault();
        getData();
    }

    React.useEffect(() => {
        if (data && !data.errors) {
            setInputs({});
        }
    }, [data])



    return (
        <Grid container spacing={2} sx={{ my: 3 }} component="form" onSubmit={handleSubmit}>
            <Grid item xs={12} md={4}>
                <UploadImage inputs={inputs} handleChange={handleChange} />
            </Grid>
            <Grid item xs={12} md={4}>
                <ProductForm inputs={inputs} handleChange={handleChange} loading={loading} />
            </Grid>
            <Grid item xs={12} md={4}>
                {(error) && <Alert severity="error">
                    <AlertTitle>שגיאה</AlertTitle>
                    משהו בפרטי המוצר לא תקין, אנא נסו שנית!!
                </Alert>}
                {(data && !data.errors) &&<Alert severity="success">
                    <AlertTitle>הצלחה</AlertTitle>
                    מוצר נשמר בהצלחה!
                </Alert>}
            </Grid>
        </Grid>
    )
}
export default NewProduct;