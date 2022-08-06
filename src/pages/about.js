import * as React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import { w3cwebsocket as W3CWebSocket } from "websocket"

import WaveGif from "../images/wave.gif"

const AboutContent = styled.div`
    background: #222;
    box-shadow: 3px 3px #333;
    min-height: 150px;
    width: 550px;
    padding: 20px;
    border-radius: 5px;
    margin: 25% auto;
    color: #fff;
    font-family: "Ubuntu", monospace, sans-serif;
`;

const AboutContentTitle = styled.div`
    font-weight: 700;
    font-size: 35px;
`;

const AboutContentDesc = styled.div`
    margin-top: 15px;
    font-size: 18px;
`;

const GreetingImage = styled.img`
    float: left;
    border-radius: 5px;
    margin-right: 10px;
`;

const About = () => {
    const [presence, setPresence] = React.useState(null);

    React.useEffect(() => {
        let initWS = new W3CWebSocket("wss://api.lanyard.rest/socket");

        initWS.onopen = () => {
            console.log("Presence websocket connected");
        };

        initWS.onmessage = raw => {
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
                <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <title>EmeraldSys | About</title>
            </Helmet>
            <AboutContent>
                <GreetingImage src={WaveGif} />
                <AboutContentTitle>Howdy!</AboutContentTitle>
                <AboutContentDesc>
                    I am a freelance developer, learning and working on many projects
                    and also contributing to some. I founded EmeraldSys back in 2018 to build a structure
                    that will support my ongoing projects.
                </AboutContentDesc>
            </AboutContent>
        </>
    );
}

export default About