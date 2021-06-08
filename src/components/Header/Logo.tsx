import styled from "@emotion/styled";
import React from "react";

interface IProps {
  color?: string;
}

const Root = styled.a<IProps>`
  display: flex;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  color: ${({ color }) => color ?? "#2934d0"};
  cursor: pointer;
  text-decoration: none;
`;

const Logo: React.FC<IProps> = ({ color }) => (
  <Root href="/" color={color}>
    задание.
  </Root>
);

export default Logo;
