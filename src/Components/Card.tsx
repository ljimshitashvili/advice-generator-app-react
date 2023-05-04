import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import adviceTypes from "../adviceTypes";

interface Props {
  info: adviceTypes | null;
  setInfo: (info: adviceTypes | null) => void;
}

export default function Card({ info, setInfo }: Props) {
  useEffect(() => {
    const generateAdvice = async () => {
      const response = await axios.get("https://api.adviceslip.com/advice");
      const data = response.data.slip;
      setInfo(data);
      console.log(info);
    };
    generateAdvice();
  }, []);

  return <Container>{info?.id}</Container>;
}

const Container = styled.div`
  width: 100%;
  max-width: 343px;
  background: #313a48;
  border-radius: 10px;
  box-shadow: 30px 50px 80px 0px #0000001a;
  padding: 40px 24px 71px;
`;
