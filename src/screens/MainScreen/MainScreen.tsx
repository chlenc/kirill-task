import React from "react";
import { Column } from "@components/flex";
import styled from "@emotion/styled";
import { useStores } from "@stores";
import { Observer, useObserver } from "mobx-react-lite";
import Loading from "@components/Loading";
import DataRow from "@src/screens/MainScreen/DataRow";
import { useHistory } from "react-router-dom";
import Modal from "@src/screens/MainScreen/Modat";

const Title = styled.div`
  padding-bottom: 20px;
  font-weight: bold;
`;

const MainScreen = () => {
  const { dataStore, routerStore } = useStores();
  const history = useHistory();
  const handleOpenModal = (id: number) => () =>
    history.push({
      pathname: history.location.pathname,
      search: `?user=${id}`,
    });
  const handleClose = () =>
    history.push({
      pathname: history.location.pathname,
      search: "",
    });
  return (
    <Observer>
      {() =>
        dataStore.initialized ? (
          <Column style={{ width: "100%" }}>
            <Title>Recent Communications </Title>
            {dataStore.data.map((v) => (
              <DataRow onClick={handleOpenModal(v.id)} data={v} key={v.id} />
            ))}
            {routerStore.selectedUser != null && (
              <Modal data={routerStore.selectedUser!} onClose={handleClose} />
            )}
          </Column>
        ) : (
          <Loading />
        )
      }
    </Observer>
  );
};

export default MainScreen;
