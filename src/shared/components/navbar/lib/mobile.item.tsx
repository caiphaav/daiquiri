import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { INavBarItem } from "../../../types";
import { useStyledTheme } from "../../../theme";

import { Column } from "../../containers";
import { Text } from "../../text";

interface IMobileItem {
  item: INavBarItem;
}

export const MobileItem = ({ item: { name, to, type } }: IMobileItem) => {
  const navigate = useNavigate();
  const {
    palette: { white },
  } = useStyledTheme();
  const onRefClick = useCallback(() => navigate(to), [navigate, to]);

  if (type === "link") {
    return (
      <a href={to}>
        <Column
          flex={0}
          height={"48px"}
          alignItems={"center"}
          justifyContent={"center"}
          background={"#09090b"}
        >
          <Text type={"md"} text={name.toUpperCase()} color={white} />
        </Column>
      </a>
    );
  }

  return (
    <Column
      onClick={onRefClick}
      flex={0}
      height={"48px"}
      alignItems={"center"}
      justifyContent={"center"}
      background={"#09090b"}
    >
      <Text type={"md"} text={name.toUpperCase()} color={white} />
    </Column>
  );
};
