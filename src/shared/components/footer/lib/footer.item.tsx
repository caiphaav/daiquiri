import { ItemWrapper } from "./footer.item.wrapper";
import { FC } from "react";

interface IITem {
  Icon: FC<any>;
  url: string;
}

export const Item = ({ Icon, url }: IITem) => {
  return (
    <a href={url} target={"_blank"} rel="noreferrer">
      <ItemWrapper>
        <Icon width={48} height={48} fill={"#e8e8e8"} />
      </ItemWrapper>
    </a>
  );
};
