import React from "react";
import useGet from "../../api/hooks/get";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import NewProduct from "../NewProduct";
import {useNavigate} from 'react-router-dom';
import Context from "../../context";
import { Grid, Stack, LinearProgress, Box, Button } from "@mui/material";

function Catalog() {

    let navigate = useNavigate();

    const { isEmployee } = React.useContext(Context);
    const { category } = useParams();
    const { getData, data, loading, error } = useGet("products/catalog/" + (category || "0"));

    if (loading) {
        return <Stack alignItems="center" justifyContent="center" sx={{ width: 1, height: "50vh" }}>
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        </Stack>
    }
    if (error) {
        return <div>Error</div>;
    }

    return (
        <Grid container spacing={4} sx={{ my: 4 }}>
            {isEmployee &&<Button variant='contained' fullWidth onClick={() => navigate("../NewProduct")}>הוספת מוצר חדש</Button>}
            {/* {isEmployee &&<Button variant='contained' fullWidth>
                <NavLink to="../NewProduct" style={({ isActive }) => ({ color: '#f0f0f0', })}>
                    הוספת מוצר חדש
                </NavLink></Button>} */}
            {data.map((p, i) => <Grid key={i} item xs={4}><ProductCard product={p} /></Grid>)}
        </Grid>
    );
}
export default Catalog;
