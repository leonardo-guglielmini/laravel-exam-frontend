import { useState, useEffect } from "react";
import GlobalContext from "../contexts/GlobalContext";
import axios from "axios";


function Homepage() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/api/products`);
                setData(res.data.results);
            }
            catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <>
        </>
    )
}

export default Homepage