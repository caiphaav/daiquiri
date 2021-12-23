import { SharedComponents, Types } from "../../../shared";

export const R2Item = ({ src, title }: Types.IR2Item) => {
  return (
    <>
      <SharedComponents.Row justifyContent={"flex-start"} alignItems={"center"}>
        <img alt={title} width={48} height={48} src={src} />
        <SharedComponents.HorizontalBox width={24} />
        <SharedComponents.Text type={"sm"} text={title} />
      </SharedComponents.Row>
      <SharedComponents.VerticalBox height={8} />
    </>
  );
};
