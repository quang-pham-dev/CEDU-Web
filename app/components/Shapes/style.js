import styled from 'styled-components';

export const TriangleStyle = styled.span`
    cursor: pointer;
    &.down {
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 10px solid #555;
    }
    &.up {
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 10px solid #555;
    }
`