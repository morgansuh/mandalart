import styled from 'styled-components';

const ButtonWrapper = styled.button`
  width: 10rem;
  height: 2rem;
  background-color: #FCF0EC;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--gray);
  font-weight: 600;
  cursor: pointer;
  color: var(--red);

  &:hover {
    opacity: 0.5;
  }

  &:not(:first-child) {
    margin-left: 1rem;
    color: var(--fireorange);
  }
`;

export default ButtonWrapper;
