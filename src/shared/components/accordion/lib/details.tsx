import styled from "styled-components";
import MDetails from "@mui/material/AccordionDetails";

export const Details = styled(MDetails)`
  width: 100%;
  background: ${({ theme }) => `${theme.palette.gray} !important`};
`;
