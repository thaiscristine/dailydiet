import styled from "styled-components/native";

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