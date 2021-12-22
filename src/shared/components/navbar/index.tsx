import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { IconUser } from "./icons";
import * as NavBarLib from "./lib";

interface IWrapper {
  scrollOffset: number;
}

const Wrapper = styled.div<IWrapper>`
  transform: ${({ scrollOffset }) => `translate3d( 0, ${scrollOffset}px, 0)`};
  transition: 0.15s linear;
  position: absolute;
  left: 0;
  top: 0;
  height: 64px;
  z-index: 10000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.palette.secondary};
`;

const IconWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 64px;
  cursor: pointer;
  .form {
    visibility: hidden;
  }

  &:hover {
    .form {
      padding: 16px;
      visibility: visible;
      opacity: 1;
    }
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  background: black;
  padding: 0 96px;
  display: flex;
  align-items: center;

  p {
    transition: 0.15s ease-in;
    color: white;
    margin-right: 48px;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.palette.pink};
    }
  }
`;

const RoutesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
`;

const ROUTES: Array<string> = [
  "Главная",
  "Новости",
  "О сервере",
  "Игровой магазин",
];

export const NavBar = () => {
  const navigate = useNavigate();

  const [offsetY, setOffsetY] = useState(0);

  const onScroll = useCallback(
    () => setOffsetY(window.scrollY),
    [window.scrollY, setOffsetY]
  );

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => document.addEventListener("scroll", onScroll);
  }, [onScroll]);
  return (
    <Wrapper scrollOffset={offsetY}>
      <Inner>
        <RoutesWrapper>
          {ROUTES.map((route) => (
            <p key={route} onClick={() => navigate("/")}>
              {route}
            </p>
          ))}
        </RoutesWrapper>
        <IconWrapper>
          <NavBarLib.LoginForm scrollOffset={offsetY} />
          <IconUser fill={"white"} />
        </IconWrapper>
      </Inner>
    </Wrapper>
  );
};
