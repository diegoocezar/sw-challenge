import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  max-width: 280px;
  height: 280px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  margin: 80px auto 40px;
  footer {
    text-align: center;
  }
`;

export const Header = styled.h1`
  padding: 20px 10px;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  border-bottom: 1px solid #eee;
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
  strong {
    font-weight: bold;
    font-size: 1.1rem;
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
  color: #000;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);

  &:hover {
    cursor: pointer;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid #fff;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
