import styled from "styled-components";

const PetTravelStyles = styled.div`
    width: 80%;
    margin: 50px auto 30px;

    h2 {
        font-size: 1.7rem;
        font-weight: 600;
        color: #337ab7;
        text-align: center;
    }

    .select-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 10px;
    }

    /* 라이브러리 css 변경사항 */
    .MuiInput-underline {
        &:before,
        &:after {
            border-bottom: 1px solid #337ab7;
        }
    }

    .MuiFormLabel-root {
        color: #337ab7;

        &.Mui-focused {
            font-weight: bold;
        }
    }
`;

export default PetTravelStyles;