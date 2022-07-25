import { TextField, Stack, Button, LinearProgress, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import category from "../../constant/category";

function ProductForm({ inputs, handleChange, loading }) {

   const [isLoading, setIsLoading] = useState(loading);
   useEffect(() => {
      setIsLoading(loading);
   }, [loading])

   return (
      <Stack direction="column" spacing={2}>
         <TextField
            variant="outlined"
            size="small"
            label="שם המוצר:"
            name="name"
            value={inputs["name"] || ""}
            onChange={handleChange}
            fullWidth
         />
         <FormControl size="small" fullWidth>
            <InputLabel>קטגוריה</InputLabel>
            <Select
               label="קטגוריה"
               name="category"
               value={inputs["category"] || ""}
               onChange={handleChange}
            >
               {category.map((c, i) => (
                  <MenuItem key={i} value={c.value}>{c.label}</MenuItem>
               ))}
            </Select>
         </FormControl>
         <TextField
            variant="outlined"
            size="small"
            label="מקט:"
            name="sku"
            value={inputs["sku"] || ""}
            onChange={handleChange}
            fullWidth
         />
         <TextField
            variant="outlined"
            size="small"
            label="מחיר:"
            name="price"
            value={inputs["price"] || ""}
            onChange={handleChange}
            fullWidth
         />
         <TextField
            variant="outlined"
            size="small"
            label="הנחה:"
            name="discount"
            value={inputs["discount"] || ""}
            onChange={handleChange}
            fullWidth
         />
         <TextField
            variant="outlined"
            size="small"
            label="מלאי:"
            name="stock"
            value={inputs["stock"] || ""}
            onChange={handleChange}
            fullWidth
         />
         <TextField
            variant="outlined"
            size="small"
            label="תאור:"
            name="description"
            value={inputs["description"] || ""}
            onChange={handleChange}
            fullWidth
         />
         {isLoading && <LinearProgress />}
         <Button type="submit" variant="contained" disabled={isLoading}>
            שמירת מוצר
         </Button>
      </Stack>
   )
}
export default ProductForm;