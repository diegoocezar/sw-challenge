import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px auto 40px;
  /* justify-content: center; */
  align-items: center;
  img {
    width: 80vw;
    max-width: 600px;
  }
  strong {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.5rem;
    color: #dc1716;
    margin-top: 30px;
    display: block;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Button = styled.button.attrs(props => ({
  type: 'button',
  disabled: props.loading,
}))`
  margin: 20px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.8em;
  font-weight: bold;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: none;
  color: #fff;
  background: #000;
  box-shadow: 0 0 20px rgba(220, 23, 22, 0.1);
  border: 1px solid #ffe62c;
  transition: color 0.5s;

  &:hover {
    cursor: pointer;

    background: rgba(255, 0, 0, 0.1);
  }

  &[disabled] {
    cursor: not-allowed;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
