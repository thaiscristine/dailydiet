import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
    size: "large",
    color: theme.COLORS.GRAY_700,
}))``;