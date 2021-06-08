import React from "react";
import styled from "@emotion/styled";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "@stores/RouterStore";
import Header from "@components/Header";
import MainScreen from "@src/screens/MainScreen";

interface IProps {
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
`;

const App: React.FunctionComponent<IProps> = () => {
  return (
    <Root>
      <Header />
      <Switch>
        <Route path={ROUTES.ROOT}>
          <MainScreen/>
        </Route>
      </Switch>
    </Root>
  );
};

export default App;
