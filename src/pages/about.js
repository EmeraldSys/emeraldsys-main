import * as React from "react";
import { Helmet } from "react-helmet";
import GlobalStyle from "../styles/globalStyles";
import styled from "styled-components";
import PulseRing from "../components/PulseRing";
import PulseDot from "../components/PulseDot";
import WaveGif from "../images/wave.gif";

import { w3cwebsocket as W3CWebSocket } from "websocket";

const AboutContent = styled.div`
    background: #222;
    box-shadow: 3px 3px #333;
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

const SpotifyHolder = styled.div`
    padding: 5px;
`;

const SpotifyAlbumHolder = styled.div`
    position: relative;
    display: inline;
`;

const SpotifyAlbumImage = styled.img`
    height: 48px;
    border-radius: 5px;
`;

const SpotifyIndicator = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    height: 14px;
`;

const SpotifyDetailHolder = styled.div`
    float: right;
`;

const SpotifyTop = styled.span`
    position: relative;
    margin-left: 10px;
`;

const SpotifyMiddle = styled.div`
    position: relative;
    display: block;
`;

const SpotifyText = styled.span`
    position: relative;
    margin-left: 10px;
`;

const About = () => {
    const [presence, setPresence] = React.useState(null);

    React.useEffect(() => {
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
            <GlobalStyle />
            <AboutContent>
                <GreetingImage src={WaveGif} />
                <AboutContentTitle>Howdy!</AboutContentTitle>
                <AboutContentDesc>
                    I am a freelance developer, learning and working on many projects
                    and also contributing to some. I founded EmeraldSys back in 2018 to build a structure
                    that will support my ongoing projects.
                </AboutContentDesc>
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
                    {presence.listening_to_spotify && <SpotifyHolder>
                        <SpotifyAlbumHolder>
                            <SpotifyAlbumImage src={presence.spotify.album_art_url} />
                            <SpotifyIndicator src="https://cdn-icons-png.flaticon.com/512/174/174872.png" />
                        </SpotifyAlbumHolder>
                        <SpotifyDetailHolder>
                            <SpotifyTop>{presence.spotify.song}</SpotifyTop>
                            <SpotifyMiddle>
                                <SpotifyText>by {presence.spotify.artist}</SpotifyText>
                            </SpotifyMiddle>
                            <SpotifyMiddle>
                                <SpotifyText>on {presence.spotify.album}</SpotifyText>
                            </SpotifyMiddle>
                        </SpotifyDetailHolder>
                    </SpotifyHolder> }
                </PresenceList> }
            </AboutContent>
        </>
    );
};

export default About;
