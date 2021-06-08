import React, { useState } from "react";
import styled from "@emotion/styled";
import Logo from "@components/Header/Logo";
import { ReactComponent as MenuIcon } from "@src/assets/menu.svg";
import Menu from "@components/Header/Menu";

interface IProps extends React.HTMLProps<HTMLDivElement> {
  logoColor?: string;
}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 8;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 40px;
`;

const Header: React.FC<IProps> = ({ logoColor, ...rest }) => {
  const [openedMenu, setOpenedMenu] = useState(false);

  return (
    <Root {...rest}>
      <Logo color={logoColor} />
      <MenuIcon
        onClick={() => setOpenedMenu(true)}
        style={{ cursor: "pointer" }}
      />
      {openedMenu && <Menu onClose={() => setOpenedMenu(false)} />}
    </Root>
  );
};
export default Header;
