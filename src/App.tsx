import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Card from "./Components/Card";
import adviceTypes from "./adviceTypes";
import { useState } from "react";

function App() {
  const [info, setInfo] = useState<adviceTypes | null>(null);

  return (
    <MainContainer>
      <GlobalStyles />
      <Card info={info} setInfo={setInfo} />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #202733;
  display: flex;
  align-items: center;
  justify-content: center;
`;
