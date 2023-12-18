import styled from 'styled-components';
export const PlanLayoutBox = styled.div`
  display: grid;
  grid-template-columns: 826px 522px;
  grid-template-rows: 500px 293px;
  grid-column-gap: 44px;
  grid-row-gap: 20px;
  padding-inline: 24px;
  padding-top: 10px;
  div:first-child {
    grid-column: 1 / span 1;
    grid-row: 1 / -1;
  }
`;