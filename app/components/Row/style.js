import styled from 'styled-components';

export const RowStyle = ({ col, mcol }) => styled.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(${col}, 1fr);
    @media screen and (max-width: 767px) {
        grid-template-columns: repeat(${mcol}, 1fr);
    }
`;

export default RowStyle
