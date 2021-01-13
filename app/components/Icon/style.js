import styled from 'styled-components';
import colors from 'styles/colors';

export default styled.span`
  border: 1px solid none;
  border-radius: 50%;
  padding: 5px;
  img {
    &.sm {
      width: 20px;
      height: 20px;
    }
    &.md {
      width: 25px;
      height: 25px;
    }
    &.lg {
      width: 30px;
      height: 30px;
    }
    &.xl {
      width: 40px;
      height: 40px;
    }
  }
  &.hovering {
    &:hover {
      background-color: ${colors.$grey.lighten3};
    }
  }
  &.active {
    background-color: ${colors.$grey.lighten3};
  }
`;
