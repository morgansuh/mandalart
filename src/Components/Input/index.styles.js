import styled from 'styled-components';

const InputWrapper = styled.div`
  transition: transform 300ms ease;
  text-align: right;

  input {
    width: auto;
    max-width: 11rem;
    font-size: 2rem;
    font-weight: 700;
    text-align: right;
    margin-right: 0.3rem;
    background: var(--white);
    color: ${({ isFocus }) => (isFocus ? 'var(--white)' : 'var(--baemint)')};
    outline: 0;
    cursor: pointer;
    transition: width 300ms ease;

    overflow: auto;

    &::placeholder {
      color: white;
      opacity: 0.5;
    }

    &:focus {
      color: var(--baemint);
      background: var(--white);
      outline: 0;

      &::placeholder {
        color: transparent;
      }
    }
  }
`;

export default InputWrapper;
