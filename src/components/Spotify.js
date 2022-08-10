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

export default (props) => (
    <>
        {props.src && <SpotifyHolder>
            <SpotifyAlbumHolder>
                <SpotifyAlbumImage src={props.src.album_art_url} />
                <SpotifyIndicator src="https://cdn-icons-png.flaticon.com/512/174/174872.png" />
            </SpotifyAlbumHolder>
            <SpotifyDetailHolder>
                <SpotifyTop><a href={`https://open.spotify.com/track/${props.src.track_id}`} target="_blank">{props.src.song}</a></SpotifyTop>
                <SpotifyMiddle>
                    <SpotifyText>by {props.src.artist}</SpotifyText>
                </SpotifyMiddle>
                <SpotifyMiddle>
                    <SpotifyText>on {props.src.album}</SpotifyText>
                </SpotifyMiddle>
            </SpotifyDetailHolder>
        </SpotifyHolder> }
    </>
);
