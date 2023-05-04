import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import adviceTypes from "../adviceTypes";
import dividerMob from "../assets/pattern-divider-mobile.svg";
import dividerDesk from "../assets/pattern-divider-desktop.svg";
import Dice from "../assets/icon-dice.svg";

interface Props {
  info: adviceTypes | null;
  setInfo: (info: adviceTypes | null) => void;
  counter: boolean;
  setCounter: (counter: boolean) => void;
}

export default function Card({ info, setInfo, counter, setCounter }: Props) {
  useEffect(() => {
    const generateAdvice = async () => {
      const response = await axios.get("https://api.adviceslip.com/advice");
      const data = response.data.slip;
      setInfo(data);
      console.log(info);
    };
    generateAdvice();
  }, [counter]);

  const handleClick = () => {
    setCounter(!counter);
  };

  return (
    <Container>
      <h1>advice # {info?.id}</h1>
      <p>"{info?.advice}"</p>
      <img className="mob" src={dividerMob} alt="Divider Pattern" />
      <img className="desk" src={dividerDesk} alt="Dice Icon" />

      <div className="generator" onClick={handleClick}>
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
  .desk {
    display: none;
  }

  @media (min-width: 1024px) {
    max-width: 540px;
    border-radius: 15px;
    padding: 48px 48px 79px 48px;

    h1 {
      font-size: 13px;
      line-height: 18px;
      letter-spacing: 4.08571px;
    }

    p {
      font-size: 28px;
      line-height: 38px;
      letter-spacing: -0.3px;
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
    .desk {
      display: unset;
    }

    .mob {
      display: none;
    }
  }
`;
