import styled from 'styled-components';
import colors from 'styles/colors';

export default styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    align-items: center;
    justify-content: center;
    .modal {
        min-width: 450px;
        min-height: 200px;
        background: ${colors.$white};
        border-radius: 8px;
        position: relative;
        &-header {
            display: flex;
            height: 50px;
            border-bottom: 1px solid ${colors.$silver};
            padding: 6px;
            align-items: center;
            justify-content: center;
            &_close {
                position: absolute;
                right: 5px;
                cursor: pointer;
            }
        }
        &-body {
            width: 100%;
            margin-top: -50px;
            padding: 56px 6px 45px 6px;
        }
        &-footer {
            display: flex;
            justify-content: flex-end;
            bottom: 0;
            width: 100%;
            height: 45px;
            padding: 6px;
            position: absolute;
            .mgr-5 {
                margin-right: 5px;
            }
        }
    }
`