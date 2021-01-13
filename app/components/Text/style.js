import styled from 'styled-components';
import colors from 'styles/colors';

export default styled.span`
  &.sm {
    font-size: 12px;
  }
  &.md {
    font-size: 13px;
  }
  &.lg {
    font-size: 14px;
  }
  &.xl {
    font-size: 16px;
  }
  &.white {
    color: ${colors.$white};
  }
  &.black {
    color: ${colors.$black};
  }
  &.primary {
  color: ${colors.$primary_01};
  }
  &.danger {
    color: ${colors.$danger_01};
  }
  &.warning {
    color: ${colors.$warning_01};
  }
  &.green {
    color: green;
  }
  &.bold {
    font-weight: bolder;
  }
`;
