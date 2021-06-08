import Logo from "@components/Header/Logo";
import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as Close } from "@src/assets/CloseMenu.svg";
import { layoutStyle } from "@components/Layout";
import Bottom from "./Bottom";
import { useObserver } from "mobx-react-lite";
import { Row } from "@components/flex";

interface IProps {
  onClose: () => void;
}

const Root = styled.div`
  position: fixed;
  z-index: 5;
  display: flex;
`;
const Top = styled.div`
  background: #2934d0;
  position: fixed;
  top: 0;
  bottom: 50%;
  left: 0;
  right: 0;
  z-index: 10;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  ${layoutStyle};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;
const Background = styled.div`
  position: fixed;
  z-index: 4;
  background: #4d4d4d;
  opacity: 0.5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const Menu: React.FC<IProps> = ({ onClose }) =>
  <Root>
    <Background onClick={onClose} />
    <Top>
      <Info>
        <Row
          style={{ paddingTop: 15, width: '100%' }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Logo color="#ffffff" />
          <Close onClick={onClose} style={{ cursor: "pointer" }} />
        </Row>
      </Info>
      <Bottom />
    </Top>
  </Root>;
export default Menu;
