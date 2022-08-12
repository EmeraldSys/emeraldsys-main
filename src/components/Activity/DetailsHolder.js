import * as React from "react";
import styled from "styled-components";

const DetailsHolder = styled.div`
    float: right;
`;

const DetailsContent = styled.div`
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
    <DetailsHolder>
        <DetailsContent>{props.name}</DetailsContent>
        {props.details && <DetailsContent>{props.details}</DetailsContent>}
        {props.state && <DetailsContent>{props.state}</DetailsContent>}
    </DetailsHolder>
);
