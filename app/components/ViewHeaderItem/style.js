import styled from 'styled-components';
import colors from 'styles/colors';
import { Link } from 'react-router-dom';

export default styled(Link)`
  height: 100%;
  min-width: 100px;
  font-size: 12px;
  border-right: 1px solid ${colors.$silver};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
