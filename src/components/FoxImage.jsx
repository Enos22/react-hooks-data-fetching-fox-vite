import { useState, useEffect } from 'react';
import foxLogo from '../assets/fox-logo.png'

const API_URL = "https://randomfox.ca/floof/"

function FoxImage() {
  const [image, setImage] = useState(foxLogo)

  useEffect(() => {
    //
    fetch(API_URL)
      .then((response => response ? "Network Error," : response.json()))
      .then((data) => setImage(data.image))
      .then(error => console.error('Error fetching image:', error));
  }, []);


  return (
    <div>
      <p>Learn more about us!</p>
      <img src={image} alt="fox logo" />
    </div>
  );
}

export default FoxImage