import styled from "styled-components";
import MAccordion from "@mui/material/Accordion";

export const Accordion = styled(MAccordion)(
  ({ theme }) => `   
   width: 60%;
   
   ${theme.breakpoints.down(theme.breakpoints.pixel)} {
    width: 100%;
  }  
`
);
