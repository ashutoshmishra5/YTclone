import Cards from "../components/Cards";
import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`;

function Home() {
    return (
        <Container>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        </Container>

    );
  }
  
  export default Home;
  