import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <MainContainer>
      <GlobalStyles></GlobalStyles>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;
