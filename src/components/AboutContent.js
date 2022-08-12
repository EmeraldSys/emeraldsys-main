import * as React from "react";
import styled from "styled-components";
import WaveGif from "../images/wave.gif";

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

export default (props) => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            { !loading && <AboutContent>
                <GreetingImage src={WaveGif} />
                <AboutContentTitle>{props.title}</AboutContentTitle>
                <AboutContentDesc>{props.description}</AboutContentDesc>
                {props.children}
            </AboutContent> }
        </>
    );
};
