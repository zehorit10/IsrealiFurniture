import React from "react";
import axios from "../axios";

// react hook to post data from backend
export default function useHttp(endpoint, method = "POST") {

    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);

    const getData = async (body = {}) => {
        setLoading(true);
        try {
            let res;
            switch(method){
                case "POST":
                    res = await axios.post(endpoint, body);
                    break;
                case "PUT":
                    res = await axios.put(endpoint, body);
                    break;
                default:
                    res = await axios.get(endpoint);
            }
            setData(res);
            setLoading(false);
            setError(false);
        } catch (err) {
            setData(null);
            setError(true);
            setLoading(false);
        }
    }

    return { getData, data, loading, error };
}
