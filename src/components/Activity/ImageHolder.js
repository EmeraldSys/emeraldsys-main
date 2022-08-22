import * as React from "react";
import styled from "styled-components";
import LargeImage from "./LargeImage";
import SmallImage from "./SmallImage";

const ImageHolder = styled.div`
    float: left;
    position: relative;
    display: inline;
`;

export default (props) => (
    <ImageHolder>
        {(typeof props.appId === "string" && typeof props.smallId === "string" && typeof props.largeId === "string")
            ? <>
                <LargeImage src={`https://cdn.discordapp.com/app-assets/${props.appId}/${props.largeId}.png?size=1024`} />
                <SmallImage src={`https://cdn.discordapp.com/app-assets/${props.appId}/${props.smallId}.png?size=1024`} />
            </>
            : ((typeof props.appId === "string")
                ? <LargeImage src={`https://dcdn.dstn.to/app-icons/${props.appId}`} />
                : <>🎮</>)
        }
    </ImageHolder>
);
