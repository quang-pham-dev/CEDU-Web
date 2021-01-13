import styled from 'styled-components';
import colors from 'styles/colors';

export default styled.div`
  height: 100vh;
  margin-top: 50px;
  position: fixed;
  z-index: 1;
  border-right: 1px solid ${colors.$silver};
  background-color: ${colors.$white};
  .menu-item-link {
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid ${colors.$silver};
    z-index: 1;
    position: relative;
    .menu-title {
      position: absolute;
      margin-left: 40px;
    }
    &.active {
      .menu-title {
        color: white
      }
    }
  }
`;
