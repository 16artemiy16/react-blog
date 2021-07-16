import styled from 'styled-components';

export const DivMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  
  & .MuiFormControl-root {
    margin: 1em 0;
  }
  
  & .MuiButton-root {
    margin-top: 2em;
  }
`;
