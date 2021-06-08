import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as SupportTelegram } from "@src/assets/SupportTelegram.svg";
import { layoutStyle } from "@components/Layout";
import { useStores } from "@stores";
import { useObserver } from "mobx-react-lite";

interface IProps {
  authorized?: boolean;
}

const Root = styled.div<{ authorized?: boolean }>`
  display: flex;
  justify-content: center;
  padding: 30px 0;
  ${({ authorized }) => authorized && "background: #1721ad"};
  width: 100%;
`;
const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${layoutStyle};
`;
const SupportLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > * {
    padding-left: 10px;
  }
`;
const Text = styled.div`
  font-family: Graphik LCG;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
`;

const Bottom: React.FC<IProps> = () => (
  <Root>
    <Layout>
      <Text>задание. 2021</Text>
      <SupportLinks>
        {/*<Text>Поддержка:&nbsp;</Text>*/}
        <SupportTelegram
          style={{ cursor: "pointer" }}
          onClick={() => window.open(`https://www.t.me/chlenc/`, "_blank")}
        />
      </SupportLinks>
    </Layout>
  </Root>
);
export default Bottom;
