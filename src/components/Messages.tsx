import React from "react";
import axios from "axios";
import "./Messages.css";

export function Messages() {
    const [messages, setMessages] = React.useState<any[]>([]);

    React.useEffect(() => {
        subscribe();
    }, []);

    const subscribe = async () => {
        try {
            const {data} = await axios.get("/api/v1" + '/messages');
            setMessages(prev => [...prev, data ]);
            await subscribe();
        } catch (e) {
            setTimeout(subscribe, 500);
        }
    }
    
    return (
        <div className="messages">
            <ul>
                {messages.map((msg, index) => 
                    <li key={index}>{msg.body}</li>
                )}
            </ul>
        </div>
    )
}