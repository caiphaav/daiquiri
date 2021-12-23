import { useStyledTheme } from "../../theme";
import { HorizontalBox, Column, Row, VerticalBox } from "../containers";
import { Text } from "../text";

import * as FooterLib from "./lib";
import * as FooterIcons from "./icons";

export const Footer = () => {
  const {
    palette: { white },
  } = useStyledTheme();
  return (
    <FooterLib.Wrapper>
      <FooterLib.Img
        src={"http://gamehag.com/img/games/background/r2-online.jpg"}
      />
      <Column alignItems={"center"} justifyContent={"center"}>
        <Text type={"h2"} text={"Будь с нами на связи!"} color={white} />
        <VerticalBox height={24} />
        <Row
          flex={0}
          alignItems={"center"}
          justifyContent={"center"}
          height={"fit-content"}
        >
          <FooterLib.Item
            url={"https://discord.gg/zUzR653CQj"}
            Icon={FooterIcons.IconDS}
          />
          <HorizontalBox width={24} />
          <FooterLib.Item
            url={"https://vk.com/daiquiri_games"}
            Icon={FooterIcons.IconVK}
          />
        </Row>
      </Column>
    </FooterLib.Wrapper>
  );
};
