import styled from 'styled-components';
import colors from 'styles/colors';

export default styled.div`
  float: left;
  width: 33%;
  height: 100%;
  display: flex;
  border-left: 1px solid ${colors.$silver};
  &.option-item-menu {
    width: 30%;
  }
  &.option-item-profile {
    width: 70%;
  }
  .option-item {
    width: 33%;
    .icon {
      width: 20px;
      margin: 5px;
    }
  }
`;
