import styled from "styled-components";

const Container = styled.div`
width: 300px;
margin-bottom: 45px;
cursor: pointer;
`;

const Image = styled.img`
width: 100%;
height: 202px;
background-color: #999;
`;

const Details = styled.div`
display:flex;
margin-top: 16px;
gap: 12px;
`;

const ChannelImage = styled.img`
width: 36px;
height: 36px;
border-radius: 50%;
background-color: #999;
`;

const Texts = styled.div`

`;

const Title = styled.h1`
font-size: 16px;
font-weight: 500;
color: ${({theme})=> theme.text}

`;
const ChannelName = styled.h2`
font-size: 14px;
color: ${({theme})=> theme.textSoft};
margin: 9px 0px;
`;
const Info = styled.div`
font-size: 14px;
color: ${({theme})=> theme.textSoft};
`;

function Cards() {
    return (
        <Container>
            <Image src="https://wallpapercave.com/wp/wp5984937.jpg"/>
            <Details>
                <ChannelImage src="https://wallpapercave.com/wp/wp5984937.jpg"/>
                <Texts>
                <Title>Test Video</Title>
                <ChannelName>YouTube Official</ChannelName>
                <Info>98,124 views  30 Jun 2022</Info>
                </Texts>
            </Details>
            
        </Container>  
    );
    }
  
  export default Cards;
  