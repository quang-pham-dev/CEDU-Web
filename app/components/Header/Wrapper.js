import styled from 'styled-components';
import colors from 'styles/colors';

export default styled.div`
  height: 50px;
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: row;
  z-index: 100;
  .header-cell {
    width: 50%;
    height: 50px;
    background-color: ${colors.$white};
    border-bottom: 1px solid ${colors.$silver};
  }
`;
