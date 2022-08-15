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

export default (props) => (
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
        </SpotifyDetailHolder>
    </SpotifyHolder>
);
