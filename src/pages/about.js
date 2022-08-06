import * as React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import { w3cwebsocket as W3CWebSocket } from "websocket"

const AboutContent = styled.div`
    color: #fff;
    font-family: "Ubuntu", monospace, sans-serif;
`;

const About = () => {
    const [presence, setPresence] = React.useState(null);

    React.useEffect(() => {
        let ws = new W3CWebSocket("wss://api.lanyard.rest/socket");

        ws.onopen = () => {
            console.log("Presence websocket connected");
        };

        ws.onmessage = raw => {
            if (typeof raw.data === "string")
            {
                let json = JSON.parse(raw.data);

                if (json.op === 0)
                {
                    setPresence(json.d);
                }
                else if (json.op === 1)
                {
                    let dataToSend = JSON.stringify({
                        op: 2,
                        d: {
                            subscribe_to_id: "660292639412846621"
                        }
                    });

                    ws.send(dataToSend);

                    setInterval(() => {
                        console.log("HB");
                        let hb = JSON.stringify({ op: 3 });
                        ws.send(hb);
                    }, json.d.heartbeat_interval);
                }
            }
        };

        return () => ws.close();
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
            <AboutContent>
                WIP
            </AboutContent>
        </>
    );
}

export default About