import React, {useState} from 'react';
import {db} from "./firebase";
import {v4 as uuidv4} from 'uuid';
import "./Home.css";

function Home()
{
    const [url, setUrl] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        let code = uuidv4();
        await db.collection("urls").add({
            url: url,
            code: code
        });
        alert("This is your URL: http://localhost:3000/l/" + code);
    };

    return(
        <div>
           <form onSubmit={handleFormSubmit}>
            <input type="text" value={url} onChange={(e => setUrl(e.target.value))} placeHolder="Enter the url here" />
            <input type="submit" value="shorten url" />
           </form>
        </div>
    );
}

export default Home