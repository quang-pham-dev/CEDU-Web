import styled from 'styled-components';
import colors from 'styles/colors';

export default styled.div`
    position: relative;
    .select-master {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 35px;
        border: 1px solid ${colors.$grey.base};
        position: relative;
        &:hover {
            cursor: pointer;
        }
        .select-icon {
            position: absolute;
        };
        .text {
            margin-left: 35px;
            margin-right: 15px;
            position: absolute;
        };
        .wrap-triangle {
            width: 15px;
            height: 100%;
            display: inline-flex;
            align-self: flex-end;
            align-items: center;
            justify-content: center;
        };
    }
    .select-collapsed {
        width: 100%;
        height: 100%;
        position: absolute;
        &_container {
            display: none
        }
    }
    .select-expanded {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        &_container {
            margin-top: 2px;
            border: 1px solid ${colors.$grey.base};
            &__item {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 40px;
                &-icon {
                    z-index: 1;
                    left: 1px;
                    position: absolute;
                }
                &-view {
                    position: absolute;
                    width: 100%;
                    height: 40px;
                    background-color: ${colors.$white};
                    padding-left: 35px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    &_label {}
                    &_sublabel {
                        font-size: 10px;
                    }
                    &:hover {
                        cursor: pointer;
                        background-color: ${colors.$grey.lighten3};
                    }
                }
            }
        }
    }
`