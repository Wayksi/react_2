import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  padding-right: ${(props) => props.theme.pagePadding};
  padding-left: ${(props) => props.theme.pagePadding};
  position: absolute;
  box-sizing: border-box;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding-top: 0;
  padding-bottom: 0;
  height: ${(props) => props.theme.footerHeight};
  background-color: ${(props) => props.theme.colorWhite};
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Copyright = styled.span`
  min-width: 148px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  vertical-align: middle;
  text-align: right;
`;
  