import styled from '@emotion/styled';
import { theme } from '../../utils/theme';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
  border: none;
  padding: 15px;
`;

export const Input = styled.input`
  font-size: ${theme.typography.text};
  padding: ${theme.space.secondary}px;
  color: ${theme.colors.text};
`;

export const Label = styled.label`
  font-size: ${theme.typography.title};
  color: ${theme.colors.text};
  padding-bottom: ${theme.space.secondary}px;
  display: flex;
  flex-direction: column;
  line-height: 1.8;
`;

export const Button = styled.input`
    display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  max-width: 100px;
  margin-left: auto;
  margin-right: auto;
  background-color: blue;
  border-radius: 10%;
  border: none;
  opacity: 70%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  color: #fff;
  cursor: pointer;
`;

export const ErrorInput = styled.p`
  margin: 0;
  padding-top: 5px;
  font-size: 12px;
  color: orangered;
`;