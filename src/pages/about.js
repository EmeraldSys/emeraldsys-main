import * as React from "react"
import { Helmet } from "react-helmet"
import "../styles/about.css"

import { w3cwebsocket as W3CWebSocket } from "websocket"

const About = () => {
    const [presence, setPresence] = React.useState(null);

    React.useEffect(() => {
        let initWS = new W3CWebSocket("wss://api.lanyard.rest/socket");

        initWS.onopen = () => {
            console.log("Presence websocket connected");
            console.log(typeof initWS);
        };

        initWS.onmessage = raw => {
            if (typeof raw.data === "string")
            {
                let json = JSON.parse(raw.data);

                if (json.op === 0)
                {
                    console.log(json);
                }
                else if (json.op === 1)
                {
                    let dataToSend = JSON.stringify({
                        op: 2,
                        d: {
                            subscribe_to_id: "660292639412846621"
                        }
                    });

                    initWS.send(dataToSend);

                    setInterval(() => {
                        console.log("HB");
                        let hb = JSON.stringify({ op: 3 });
                        initWS.send(hb);
                    }, json.d.heartbeat_interval);
                }
            }
        };

        return () => initWS.close();
    }, []);

    return (
        <>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <title>EmeraldSys | About</title>
            </Helmet>
        </>
    );
}

export default About