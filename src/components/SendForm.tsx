import axios from "axios";
import React from "react";
import "./SendForm.css";

export function SendForm() {
    const [message, setMessage] = React.useState("");

    const send = async (message: string) => {
        await axios.post('/api/v1' + '/send', {  
            body: message,
        }).finally(() => {
            setMessage("");
        });
    }

    return (
        <div className="container">
            <div className="form">
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type="submit" onClick={() => send(message)}>Send</button>
            </div>
        </div>
    );
}