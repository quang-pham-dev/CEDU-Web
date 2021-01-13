import styled from 'styled-components';
import colors from 'styles/colors';

export default styled.div`
  width: 250px;
  height: 200px;
  padding: 50px 5px 5px 5px;
  margin-right: 10px;
  border: 1px solid silver;
  position: absolute;
  right: 0;
  z-index: 2;
  display: none;
  background-color: ${colors.$grey.lighten3};
`;
