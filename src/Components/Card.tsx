import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import adviceTypes from "../adviceTypes";
import dividerMob from "../assets/pattern-divider-mobile.svg";
import Dice from "../assets/icon-dice.svg";

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

  return (
    <Container>
      <h1>advice # {info?.id}</h1>
      <p>"{info?.advice}"</p>
      <img src={dividerMob} alt="Divider Pattern" />
      <div className="generator">
        <img src={Dice} alt="Dice Icon" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 343px;
  background: #313a48;
  border-radius: 10px;
  box-shadow: 30px 50px 80px 0px #0000001a;
  padding: 40px 24px 71px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  position: relative;

  h1 {
    font-size: 11px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 3.45714px;
    color: #53ffaa;
    text-transform: uppercase;
  }

  p {
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    letter-spacing: -0.257143px;
    color: #cee3e9;
  }

  .generator {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: #53ffaa;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -32px;
    cursor: pointer;
  }
`;
