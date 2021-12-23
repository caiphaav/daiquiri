import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import { IconMenu } from "./icons";

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 64px;
  z-index: 10000;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #09090b;
`;

// const IconWrapper = styled.div(
//   ({ theme }) => `
//
//   position: relative;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   width: 64px;
//   cursor: pointer;
//   .form {
//     visibility: hidden;
//   }
//
//   &:hover {
//     .form {
//       padding: 16px;
//       visibility: visible;
//       opacity: 1;
//     }
//   }
//
//   ${theme.breakpoints.down(theme.breakpoints.ipad)} {
//     display: none;
//   }
// `
// );

const Inner = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
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

const RoutesWrapper = styled.div(
  ({ theme }) => `

  
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
   
  ${theme.breakpoints.down(theme.breakpoints.ipad)} {
    display: none;
  }     
`
);

const MenuWrapper = styled.div(
  ({ theme }) => `

  
  display: none;
   
  ${theme.breakpoints.down(theme.breakpoints.ipad)} { 
    position: absolute;
    right: 32px;
    display: flex; 
    align-items: center; 
    justify-content: center;
    width: 48px;
    height: 48px; 
    border-radius: 8px;
    transition: .2s linear;
    
    &:hover {
      cursor: pointer; 
      border: 1px solid white;
    }
  }     
`
);

const ROUTES: Array<string> = [
  "Главная",
  "Новости",
  "О сервере",
  "Скачать",
  "Регистрация",
];

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Inner>
        <RoutesWrapper>
          {ROUTES.map((route) => (
            <p key={route} onClick={() => navigate("/")}>
              {route}
            </p>
          ))}
        </RoutesWrapper>
        {/*<IconWrapper>*/}
        {/*  <NavBarLib.LoginForm } />*/}
        {/*  <IconUser fill={"white"} />*/}
        {/*</IconWrapper>*/}
        <MenuWrapper>
          <IconMenu fill={"white"} width={24} height={24} />
        </MenuWrapper>
      </Inner>
    </Wrapper>
  );
};
