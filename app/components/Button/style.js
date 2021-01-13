import styled from 'styled-components';
import colors from 'styles/colors';

export default styled.button`
  text-transform: uppercase;
  min-width: 70px;
  img {
    margin-right: 5px;
    width: 18px;
  }
  &:hover {
    cursor: pointer;
  }
  &.small {}
  &.medium {}
  &.large {}
  &.bold {
    font-weight: 600;
    color: ${colors.$grey.darken2}
  }
  &.primary {
    border: none;
    background-color: ${colors.$bluegrey.base};
    color: ${colors.$white};
  }
  &.default {
    border: none;
    background-color: unset;
    &:hover {
      background-color: ${colors.$grey.lighten3};
    }
  }
`;
