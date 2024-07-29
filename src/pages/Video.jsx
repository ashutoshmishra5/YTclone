import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../components/Comments";
const Container = styled.div`
display:flex;
gap:24px;`;
const Content = styled.div`
flex:5;`;
const VideoWrapper = styled.div`
`;

const Title = styled.h1`
font-size: 16px;
font-weight: 400;
margin-top: 16px;
margin-bottom: 8px;
color:${({ theme })=>theme.text};
`;

const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const Info = styled.div`
color:${({ theme })=>theme.textSoft};
`;
const Buttons = styled.div`
display: flex;
gap: 16px;
color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
display: flex;
align-items: center;
gap: 4px;
cursor: pointer;
`;

const Hr = styled.div`
margin: 15px 0px;
border: 0.5px solid ${({ theme }) => theme.soft}
`;

const Channel = styled.div`
display: flex;
justify-content: space-between;
gap: 5px;
`;

const ChannelInfo = styled.div`
display: flex;
gap: 16px;
`;
const Image = styled.img`
height: 50px;
border-radius: 50%;
`;
const ChannelDetail = styled.div`
display: flex;
flex-direction: column;
color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
font-weight: 500;
`;
const ChannelCounter = styled.span`
margin-top: 5px;
margin-buttom: 16px;
color: ${({ theme })=> theme.textSoft};
font-size:12px;
`;
const Description = styled.p`
font-size: 14px;
`;
const Subscribe = styled.button`
background-color: #cc1a00;
font-weight: 500;
color: white;
border: none;
border-radius: 3px;
height: max-content;
padding: 10px 20px;
cursor: pointer;
`;

const Recomendation = styled.div`
flex:2;`;
function Video() {
    return (
        <Container>
            <Content><VideoWrapper>
            <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/O0FivZZvJ_A"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            ></iframe>
          </VideoWrapper>
          <Title>Test Video</Title>
          <Details>
            <Info>1,651,656 views  29 Jul 2024</Info>
            <Buttons>
                <Button><ThumbUpOutlinedIcon/> 12k</Button>
                <Button><ThumbDownOffAltOutlinedIcon/> Dislike</Button>
                <Button><ReplyOutlinedIcon/>Share</Button>
                <Button><AddTaskOutlinedIcon/>Save</Button>
            </Buttons>
          </Details>
          <Hr/>

          <Channel>
            <ChannelInfo>
              <Image src="https://yt3.googleusercontent.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s160-c-k-c0x00ffffff-no-rj"></Image>
            </ChannelInfo>
            <ChannelDetail>
              <ChannelName>Youtube Official</ChannelName>
              <ChannelCounter>150k subscribers</ChannelCounter>
              <Description>YouTube's Official Channel helps you discover what's new & trending globally. Watch must-see videos, from music to culture to Internet phenomena
              </Description>
            </ChannelDetail>
            <Subscribe>Subscribe</Subscribe>
          </Channel>
          <Hr/>
        <Comments/>  
        </Content>
        <Recomendation>Recomendation</Recomendation>
        </Container>
    );
  }
  
  export default Video;
  
