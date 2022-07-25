import React, { useState, useEffect } from "react";

import { Box, Button, TextField } from "@mui/material";

function UploadImage({inputs, handleChange}) {

    const [src, setSrc] = useState("");

    useEffect(() => {
        if(!inputs.image) setSrc("")
    }, [inputs])

    return (
        <>
            <TextField 
            label="העלאת תמונה" 
            size="small"
            variant="outlined"
            type={"url"}
            fullWidth
            name="image"
            value={inputs["image"] || ""}
            onChange={(e) => { 
                setSrc(e.target.value) 
                handleChange(e)
            }} />
            <Box sx={{ width: 1 }}>
                <img style={{
                    display: "block",
                    margin: "auto",
                    maxWidth: "100%"
                }}
                    src={src} />
            </Box>

        </>
    )
}
export default UploadImage;