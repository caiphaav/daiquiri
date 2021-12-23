import { SharedComponents, Theme, Types } from "@shared";

export const Boss = ({
  name,
  description,
  src,
  data,
}: Types.ISealedCaveBoss) => {
  const {
    palette: { white },
  } = Theme.useStyledTheme();
  return (
    <>
      <SharedComponents.VerticalBox height={48} />
      <SharedComponents.Text text={name} type={"lg"} color={white} />
      <SharedComponents.VerticalBox height={16} />
      <SharedComponents.Text text={description} type={"sm"} color={white} />
      <SharedComponents.VerticalBox height={16} />
      <img alt={name} width={"60%"} src={src} />
      <SharedComponents.VerticalBox height={16} />
      <SharedComponents.Accordion data={data} />
    </>
  );
};
