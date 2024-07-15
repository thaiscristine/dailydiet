import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;
export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`;
export const ProfileImg = styled.Image`
    width: 37px;
    height: 37px;
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.S}px;
        color: ${theme.COLORS.BASE.GRAY_100};
        text-align: center;
        margin-top: 24px;
        margin-right: 32px;
        
    `}
`
;