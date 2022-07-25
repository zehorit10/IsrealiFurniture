import React from "react";
import axios from "../axios";

// react hook to get data from backend
export default function useGet(endpoint, body = null){    

    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    
    const getData = async () => {
        setData(null);
        setLoading(true);
        setError(false);
        
        try {
            const res = await axios.get(endpoint, body);
            setData(res);
            setLoading(false);
        } catch (err) {
            setError(true);
            setLoading(false);
        }  
    }

    React.useEffect(() => {
         getData();
    }, [endpoint]);

    return { getData, data, loading, error };

}
