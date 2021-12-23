import { SharedComponents, Types } from "../../../shared";

import { useStyledTheme } from "../../theme";

import * as AccordionLib from "./lib";

interface IAccordion {
  data: Array<Types.IR2Item>;
  title?: string;
}

const renderItem = (item: Types.IR2Item) => (
  <SharedComponents.R2Item key={item.title} title={item.title} src={item.src} />
);

export const Accordion = ({ data, title = "Список предметов" }: IAccordion) => {
  const {
    palette: { white },
  } = useStyledTheme();
  return (
    <AccordionLib.Accordion>
      <AccordionLib.Summary
        expandIcon={<AccordionLib.Icon width={48} height={48} />}
      >
        <SharedComponents.Text text={title} type={"md"} color={white} />
      </AccordionLib.Summary>
      <AccordionLib.Details>{data.map(renderItem)}</AccordionLib.Details>
    </AccordionLib.Accordion>
  );
};
