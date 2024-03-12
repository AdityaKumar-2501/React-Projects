import { useEffect, useState } from "react";
import "./styles.css";

export default function ScrollIndicator({ url }) {
    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [errorMessage, setErrorMessage] = useState("");

    // async function fetchData(getUrl) {
    //     try {
    //         setLoading(true);
    //         const response = await fetch(getUrl);
    //         const output = await response.json();
    //         if (output && output.products && output.products.length > 0) {
    //             setLoading(false);
    //             setData(output.products);
    //         }
    //     } catch (e) {
    //         console.log(e);
    //         setLoading(false);
    //         setErrorMessage(e);
    //     }
    // }

    // useEffect(() => {
    //     fetchData(url);
    // }, [url]);

    // if (loading) {
    //     return <h2>Loading data, Please Wait !</h2>;
    // }

    useEffect(() => {
        // This code runs after every render
        console.log("Component mounted or updated");

        // Cleanup function
        return () => {
            // This code runs when the component is unmounted
            console.log("Component unmounted");
        };
    }, [url]); // Empty dependency array means it only runs once, on mount

    return (
        <div>
            {/* {data && data.length > 0
                ? data.map((product) => <p key={product.id}>{product.title}</p>)
                : null} */}
            l;j
        </div>
    );
}
