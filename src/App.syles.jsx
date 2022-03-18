import styled from 'styled-components';

const background = '#0a1929';
const lightBlue = '#9dc0e5';
const hoverButton = '#293642';

export const Wrapper = styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${background};
    color: white;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;

    *,
    *::after,
    *::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    div {
        display: flex;
    }

    button {
        background: transparent;
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
        color: white;
        font-weight: bold;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: ${hoverButton};
    }
`;

export const StyledContent = styled.div`
    border: 1px solid #1a2e42;
    border-radius: 10px;
    flex-direction: column;
    row-gap: 40px;
    padding: 50px 40px;
`;

export const StyledStepsContainer = styled.div`
    column-gap: 150px;
`;

export const StyledStep = styled.div`
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    color: ${({ isDone }) => (isDone ? 'white' : 'grey')};
    position: relative;

    &::after {
        display: ${({ isLast }) => (isLast ? 'none' : 'initial')};
        content: '';
        position: absolute;
        right: -125px;
        width: 100px;
        height: 2px;
        top: 50%;
        background-color: grey;
        border-radius: 100px;
    }

    span {
        color: ${background};
        background: ${({ isDone }) => (isDone ? `${lightBlue}` : 'grey')};
        width: 25px;
        height: 25px;
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const StyledButtons = styled.div`
    justify-content: ${({ finish }) => (finish ? 'flex-end' : 'space-between')};
`;

export const StyledBackButton = styled.button`
    color: ${({ isDisabled }) => (isDisabled ? 'grey' : 'white')} !important;

    &:hover {
        background-color: ${({ isDisabled }) =>
            !isDisabled ? `${hoverButton}` : `${background}`} !important;
        cursor: ${({ isDisabled }) =>
            !isDisabled ? 'pointer' : 'default'} !important;
    }
`;

export const StyledSkipButton = styled.button``;

export const StyledHighlightButton = styled.button`
    color: ${lightBlue} !important;
`;
