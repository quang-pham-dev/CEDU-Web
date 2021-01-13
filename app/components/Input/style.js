import styled from 'styled-components';
import colors from 'styles/colors';

export default styled.div`
    display: flex;
    position: relative;
    align-items: center;
    input {
        width: 100%;
        height: 100%;
        position: absolute;
        padding-left: 7px;
        &.default {
            border-radius: 10px;
            border: 1px solid ${colors.$silver}
        }
    }
    &.withicon {
        input {
            padding-left: 35px;
        }
    }
    span {
        position: absolute;
        z-index: 1;
    }
`
