import { NavigateFunction, useNavigate } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react";

import { INavBarItem } from "../../types";

import {
  NAVBAR_DESKTOP_LINKS,
  NAVBAR_DESKTOP_REFS,
  NAVBAR_MOBILE_ROUTES,
} from "./constants";
import * as NavBarLib from "./lib";
import { useCallback, useState } from "react";

const renderDesktopRef = (navigate: NavigateFunction) => (route: INavBarItem) =>
  (
    <p key={route.name} onClick={() => navigate(route.to)}>
      {route.name}
    </p>
  );

const renderDesktopLink = (route: INavBarItem) => (
  <a key={route.name} href={route.to} target={"_blank"} rel={"noreferrer"}>
    <p>{route.name}</p>
  </a>
);

const renderMobileRoutes = (route: INavBarItem) => (
  <NavBarLib.MobileItem item={route} key={route.name} />
);

export const NavBar = () => {
  const navigate = useNavigate();

  const [hasBurgerMenu, setBurgerMenu] = useState<boolean>(false);

  const onMenuClick = useCallback(
    () => setBurgerMenu((prev) => !prev),
    [setBurgerMenu]
  );

  return (
    <NavBarLib.Wrapper>
      <NavBarLib.Inner>
        <NavBarLib.DesktopWrapper>
          {NAVBAR_DESKTOP_REFS.map(renderDesktopRef(navigate))}
        </NavBarLib.DesktopWrapper>
        <NavBarLib.DesktopWrapper>
          {NAVBAR_DESKTOP_LINKS.map(renderDesktopLink)}
        </NavBarLib.DesktopWrapper>
        <NavBarLib.MenuWrapper onClick={onMenuClick}>
          <Hamburger size={24} color={"white"} toggled={hasBurgerMenu} />
        </NavBarLib.MenuWrapper>
      </NavBarLib.Inner>
      <NavBarLib.MobileWrapper isActive={hasBurgerMenu}>
        {NAVBAR_MOBILE_ROUTES.map(renderMobileRoutes)}
      </NavBarLib.MobileWrapper>
    </NavBarLib.Wrapper>
  );
};
