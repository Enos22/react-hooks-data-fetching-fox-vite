import { useState, useEffect } from 'react';
import foxLogo from '../assets/fox-logo.png'

const API_URL = "https://randomfox.ca/floof/"

function FoxImage() {
    const [image, setImage] = useState(foxLogo)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //fetch data frm API
        fetch(API_URL)
            .then(response => response.ok ? response.json() : Promise.reject("Network Error"))
            .then(data => setImage(data.image))
            .catch(error => console.error('Error fetching image:', error))
            .finally(() => setLoading(false));

    }, []);


    return (
        <div>
            <p>Learn more about us!</p>
            {loading ? <p>Loading...</p> : ""}
            <img src={image} alt="fox logo" />
        </div>
    );
}

export default FoxImage