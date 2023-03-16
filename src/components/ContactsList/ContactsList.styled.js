import styled from '@emotion/styled';
import { theme } from '../../utils/theme';

export const Item = styled.li`
  padding-top: ${theme.space.secondary * 2}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.space.secondary * 2}px;
  font-size: ${theme.typography.title};
  color: ${theme.colors.text};
`;

export const DeleteButton = styled.button`
 background-color: #d81414;
  color: white;
  padding: 5px;
  border: none;
  cursor: pointer;
  border-radius: 15%;
  opacity: 70%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;