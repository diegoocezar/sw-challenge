import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  max-width: 280px;
  height: 280px;
  background: #000;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(220, 23, 22, 0.1);
  margin: 80px auto 40px;
  border: 1px solid #ffe62c;
  border-top: none;
  footer {
    text-align: center;
    color: #ffe62c;
  }
`;

export const Header = styled.h1`
  padding: 20px 10px;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 10px 10px 0 0;
  background-color: #ffe62c;
`;

export const List = styled.ul`
  width: 100%;
  height: 65%;
  padding: 10px;
  box-sizing: border-box;
`;

export const ListItem = styled.li`
  display: inline-block;
  margin: 10px 15px;
  color: #fff;
  strong {
    font-weight: bold;
    font-size: 1.1rem;
    color: #dc1716;
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
