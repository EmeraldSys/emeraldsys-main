import * as React from "react";
import styled from "styled-components";

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

const SpotifyDetails = styled.div`
    width: 300px;
    position: relative;
    margin-left: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
        overflow: visible;
    }
`;

const msToMinSeconds = millis => {
    let minutes = Math.floor(millis / 60000);
    let seconds = Number(((millis % 60000) / 1000).toFixed(0));
    return seconds == 60 ? minutes + 1 + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

export default (props) => {
    const [current, setCurrent] = React.useState(new Date().getTime());
    const [length, setLength] = React.useState(msToMinSeconds(props.src.timestamps.end - props.src.timestamps.start));
    const [elapsed, setElapsed] = React.useState("");

    React.useEffect(() => {
        let interval = setInterval(() => {
            setCurrent(new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
        const spotify = props.src;
        const timeElapsed = current - spotify.timestamps.start;
        setElapsed(msToMinSeconds(timeElapsed));
    }, [current]);

    return (
        props.src && <SpotifyHolder>
            <SpotifyAlbumHolder>
                <SpotifyAlbumImage src={props.src.album_art_url} />
                <SpotifyIndicator src="https://cdn-icons-png.flaticon.com/512/174/174872.png" />
            </SpotifyAlbumHolder>
            <SpotifyDetailHolder>
                <SpotifyDetails>
                    <a href={`https://open.spotify.com/track/${props.src.track_id}`} target="_blank">{props.src.song}</a>
                </SpotifyDetails>
                <SpotifyDetails>
                    by {props.src.artist}
                </SpotifyDetails>
                <SpotifyDetails>
                    on {props.src.album}
                </SpotifyDetails>
                <SpotifyDetails>
                    {elapsed} / {length}
                </SpotifyDetails>
            </SpotifyDetailHolder>
        </SpotifyHolder>
    );
};
