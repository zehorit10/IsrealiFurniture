import React from "react";
import axios from "../axios";

// react hook to delete data from backend
export default function useDelete(endpoint) {
        
        const [data, setData] = React.useState(null);
        const [loading, setLoading] = React.useState(false);
        const [error, setError] = React.useState(false);
        
        const getData = async (id) => {
            setData(null);
            setLoading(true);
            setError(false);

            try {
                const res = await axios.delete(endpoint +id, {});
                setData(res);
                setLoading(false);
            } catch (err) {
                setError(true);
                setLoading(false);
            }  
        }

        return { getData, data, loading, error };
    }
