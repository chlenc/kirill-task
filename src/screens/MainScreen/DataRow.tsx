import React from "react";
import { Column, Row } from "@components/flex";
import styled from "@emotion/styled";
import { IDataItem } from "@stores/DataStore";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  data: IDataItem;
}

const Avatar = styled.div<{ src: string }>`
  background: url("${({ src }) => src}") center no-repeat;
  background-size: contain;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 5px;
`;
const Name = styled.div`
  font-size: 16px;
`;
const Title = styled.div`
  font-size: 12px;
`;
const Subtitle = styled.div`
  font-size: 8px;
  color: darkgray;
`;

const Root = styled(Row)`
  padding-top: 10px;
  padding-bottom: 5px;
  width: 100%;
  border-bottom: 1px solid darkgray;
  cursor: pointer;
`;

const DataRow: React.FC<IProps> = ({ data, ...rest }) => {
  return (
    <Root {...rest}>
      <Avatar src={data.photoUrl} />
      <Column>
        <Name>{data.name}</Name>
        <Title>{data.title}</Title>
        <Subtitle>{data.subtitle}</Subtitle>
      </Column>
    </Root>
  );
};
export default DataRow;
