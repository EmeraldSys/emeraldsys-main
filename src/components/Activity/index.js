import * as React from "react";
import styled from "styled-components";
import ImageHolder from "./ImageHolder";
import DetailsHolder from "./DetailsHolder";

const Activity = styled.div`
    padding: 5px;
`;

export default (props) => (
    props.src && <Activity>
        <ImageHolder
            appId={props.src.application_id}
            smallId={props.src?.assets?.small_image ?? null}
            largeId={props.src?.assets?.large_image ?? null}
        />
        <DetailsHolder
            name={props.src?.name ?? ""}
            details={props.src?.details ?? null}
            state={props.src?.state ?? null}
        />
    </Activity>
);
