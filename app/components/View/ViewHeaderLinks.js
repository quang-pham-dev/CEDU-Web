import styled from 'styled-components';
import colors from 'styles/colors';

export default styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  a {
    font-size: 12px;
    border-right: 1px solid ${colors.$silver};
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;
