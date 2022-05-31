import styled from 'styled-components';

/** 표에 CSS를 적용한 styledComponent */
const Table = styled.table`
    border-collapse: collapse;
    border-top: 3px solid #FF699B;
    font-size: 14px;
    text-align: center;
    margin: auto;
    width: 100%;

    th {
        color: #FF699B;
        background: #FFF4F8;
        padding: 10px;
        border: 1px solid #ddd;

        &:first-child {
            border-left: 0;
        }

        &:last-child {
            border-right: 0;
        }
    }

    td {
        padding: 10px;
        border: 1px solid #ddd;

        &:first-child {
            border-left: 0;
        }

        &:last-child {
            border-right: 0;
        }
    }
`;

export default Table;