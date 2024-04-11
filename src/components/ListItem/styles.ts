import { View } from 'react-native';
import styled from 'styled-components/native';

export type IsDietProps = true | false;

type ListItemComponentStyleProps = {
  isDiet: IsDietProps;
}

export const Container = styled.View`
  flex: 1;
  padding: 14px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-width: 1px;
  border-radius: 10px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;
export const LeftInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Time = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Item = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.S}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Divider = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.S}px;
  margin: 0 10px;
`;

export const Status = styled(View)<ListItemComponentStyleProps>`
  background-color: ${({ theme, isDiet }) => isDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  width: 14px;
  height: 14px;
  border-radius: 50%;
`;
