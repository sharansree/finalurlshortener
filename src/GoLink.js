import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from './firebase';

function GoLink() {
    const { code } = useParams();
    const navigate = useNavigate();
    const [url, setUrl] = useState("");

    useEffect(() => {
        let query = db.collection("urls").where("code", "==", code);
        query.onSnapshot((data) => {
            if (data.empty) {
                return navigate("/");
            }
            let finalData = data.docs[0].data();
            setUrl(finalData.url);
        });
    }, [code, navigate]);

    useEffect(() => {
        if (url) {
            window.location.replace(url);
        }
    }, [url]);

    return (
        <div>
            {url}
        </div>
    );
}

export default GoLink;