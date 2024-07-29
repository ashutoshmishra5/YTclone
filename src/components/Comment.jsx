import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
display: flex;
gap: 10px;
margin: 30px 0px;
`;

const Avatar = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`;

const Details = styled.div`
display: flex;
flex-direction: column;
gap: 10px:
color: ${({ theme }) => theme.text}
`;

const Name = styled.span`
font-size: 12px;
font-weight: 400;
color: ${({ theme }) => theme.textSoft};
margin-left: 5px;
`;

const Date = styled.span`
font-size: 12px;
font-weight:400;
color: ${({ theme }) => theme.textSoft};
margin-left: 5px;
`
const Text = styled.span`
font-size: 14px;
color: ${({ theme }) => theme.text};
`;


const Comment = ()=> {
    return (
        <Container>
          <Avatar src="https://yt3.ggpht.com/ewoVq0zGyksCZIgG0RDSpNwWU8z1KXjE0Vq1cfyjkFZSWOkghiIyYGLMowt4BNoZEMHzj7BAIw=s88-c-k-c0x00ffffff-no-rj"></Avatar>
          <Details>
            <Name>
                John Doe <Date>1 day ago</Date>
            </Name>
            <Text>
            Chris Luno and Flavour Trip are absolutely the best music djs channels of 2024 for me, it's great to have them both featured on yt official channel
            </Text>
          </Details>
        </Container>
    )
};

export default Comment