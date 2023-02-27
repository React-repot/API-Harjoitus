import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const URL = "https://randomfox.ca/floof/"


function App() {
  const [image, setImage] = useState("")
  const [imageLink, setImageLink] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    axios.get(URL)
      .then((response) => {
        setImage(response.data.image)
        setImageLink(response.data.link)
        setIsLoading(false)
      }).catch(error => {
        alert(error)
      })
  }, [])

  if (isLoading) {
    return <h3>Loading your fox...</h3>
  }
  else {
    return (
      <div>
        <h1>Welcome to the foxhole</h1>
        <img src={image} />
        <p>Do you enjoy your fox? Here are more options:</p>
        <a href={imageLink}>Full size</a>
        <a href="">New fox</a>
      </div>
    );
  }
}

export default App;
