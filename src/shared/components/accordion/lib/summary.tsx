import styled from "styled-components";
import MSummary from "@mui/material/AccordionSummary";

export const Summary = styled(MSummary)`
  width: 100%;
  background: ${({ theme }) => `${theme.palette.secondary} !important`};
  color: white;
`;
