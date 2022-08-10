import * as React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import GlobalStyle from "../styles/globalStyles";
import AboutContent from "../components/AboutContent";
import PulseRing from "../components/keyframes/PulseRing";
import PulseDot from "../components/keyframes/PulseDot";
import Spotify from "../components/Spotify";

import { w3cwebsocket as W3CWebSocket } from "websocket";

const PresenceList = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    min-height: 45px;
`;

const StatusHolder = styled.div`
    padding: 5px;
`;

const StatusDetailHolder = styled.div``;

const AvatarImageHolder = styled.div`
    float: left;
    position: relative;
    display: inline;
`;

const AvatarImage = styled.img`
    height: 48px;
    border-radius: 5px;
`;

const StatusIndicator = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    bottom: 5%;
    right: 0;

    &:before {
        content: '';
        position: relative;
        display: block;
        box-sizing: border-box;
        width: 300%;
        height: 300%;
        margin-left: -100%;
        margin-top: -100%;
        border-radius: 45px;
        background: ${props => props.statusColor};
        animation: ${PulseRing} 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
    }

    &:after {
        z-index: 1000;
        content: '';
        position: absolute;
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: ${props => props.statusColor};
        border-radius: 15px;
        box-shadow: 0 0 8px rgba(0,0,0,.3);
        animation: ${PulseDot} 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -.4s infinite;
    }
`;

const StatusDetailTop = styled.span`
    position: relative;
    margin-left: 10px;
`;

const StatusDetailBottom = styled.div`
    position: relative;
    display: block;
`;

const StatusText = styled.span`
    color: ${props => props.statusColor};
    margin-left: 10px;
`;

const About = () => {
    const [presence, setPresence] = React.useState({
        "spotify":{
            "track_id":"2I4omGCso5PnqRmjfbJWcM",
            "timestamps":{
                "start":1659909668992,
                "end":1659909847251
            },
            "song":"Bittersweet Melody - Marcus James Remix",
            "artist":"Said The Sky; FRND; Marcus James",
            "album_art_url":"https://i.scdn.co/image/ab67616d0000b2739a7ffcb5154d11fe92c8cfc2",
            "album":"Sentiment (The Remixes)"
        },
        "listening_to_spotify":true,
        "kv":{
            "website":"https://www.emeraldsys.xyz",
            "pronouns":"he/him",
            "birthday":"07/06/2004"
        },
        "discord_user":{
            "username":"ryand",
            "public_flags":256,
            "id":"660292639412846621",
            "discriminator":"4175",
            "bot":false,
            "avatar":"2643fb9c7d17ca57223563669b074a70"
        },
        "discord_status":"online",
        "activities":[
            {
                "type":2,
                "timestamps":{
                    "start":1659909668992,
                    "end":1659909847251
                },
                "sync_id":"2I4omGCso5PnqRmjfbJWcM",
                "state":"Said The Sky; FRND; Marcus James",
                "session_id":"956edc76061c94ba01ef3bd68893b9c1",
                "party":{
                    "id":"spotify:660292639412846621"
                },
                "name":"Spotify",
                "id":"spotify:1",
                "flags":48,
                "details":"Bittersweet Melody - Marcus James Remix",
                "created_at":1659909669011,
                "assets":{
                    "large_text":"Sentiment (The Remixes)",
                    "large_image":"spotify:ab67616d0000b2739a7ffcb5154d11fe92c8cfc2"
                }
            }
        ],
        "active_on_discord_web":false,
        "active_on_discord_mobile":false,
        "active_on_discord_desktop":true
    });

    /* React.useEffect(() => {
        const ws = new W3CWebSocket("wss://api.lanyard.rest/socket");

        ws.onopen = () => {
            console.log("Presence websocket connected");
        };

        ws.onmessage = raw => {
            if (typeof raw.data === "string") {
                const json = JSON.parse(raw.data);

                if (json.op === 0) {
                    setPresence(json.d);
                } else if (json.op === 1) {
                    const dataToSend = JSON.stringify({
                        op: 2,
                        d: {
                            subscribe_to_id: "660292639412846621"
                        }
                    });

                    ws.send(dataToSend);

                    setInterval(() => {
                        console.log("HB");
                        const hb = JSON.stringify({ op: 3 });
                        ws.send(hb);
                    }, json.d.heartbeat_interval);
                }
            }
        };

        return () => ws.close();
    }, []); */

    return (
        <>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <title>EmeraldSys | About</title>
            </Helmet>
            <GlobalStyle />
            <AboutContent title="Howdy!" description="I am a freelance developer, learning and working on many projects
                    and also contributing to some. I founded EmeraldSys back in 2018 to build a structure
                    that will support my ongoing projects.">
                {presence && <PresenceList>
                    <StatusHolder>
                        <StatusDetailHolder>
                            <AvatarImageHolder>
                                <AvatarImage src={`https://cdn.discordapp.com/avatars/${presence.discord_user.id}/${presence.discord_user.avatar}.png`} />
                                <StatusIndicator statusColor={`var(--presence-${presence.discord_status})`} />
                            </AvatarImageHolder>
                            <StatusDetailTop>{presence.discord_user.username}#{presence.discord_user.discriminator}</StatusDetailTop>
                            <StatusDetailBottom>
                                <StatusText statusColor={`var(--presence-${presence.discord_status})`}>{presence.discord_status}</StatusText>
                            </StatusDetailBottom>
                        </StatusDetailHolder>
                    </StatusHolder>
                    {presence.listening_to_spotify && <Spotify src={presence.spotify} /> }
                </PresenceList> }
            </AboutContent>
        </>
    );
};

export default About;
