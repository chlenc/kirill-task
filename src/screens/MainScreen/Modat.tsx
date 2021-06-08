import React from "react";
import styled from "@emotion/styled";
import { IDataItem } from "@stores/DataStore";
import DataRow from "@src/screens/MainScreen/DataRow";

interface IProps {
  onClose: () => void;
  data: IDataItem;
}

const Wrapper = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Root = styled.div`
  height: 100px;
  box-sizing: border-box;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px 0 0;
  @media only screen and (min-width: 992px) {
    margin: 0 10%;
  }
`;

const Modal: React.FC<IProps> = ({ onClose, data }) => (
  <Wrapper onClick={onClose}>
    <Root>
      <DataRow style={{ maxWidth: 200, borderBottom: "none" }} data={data} />
    </Root>
  </Wrapper>
);
export default Modal;
