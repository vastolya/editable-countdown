import { styled } from "styled-components";
import Input from "./Input";
import Textarea from "./Textarea";

const Table = styled.div`
  width: 100rem;
  margin: 8.5rem auto 6.125rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const TableRow = styled.div<{ width?: string; height?: string; $bg?: string }>`
  display: flex;
  background: ${(props) => props.$bg || "none"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
`;

const TableDiv = styled.div<{
  width?: string;
  height?: string;
  $borderWidth?: string;
}>`
  display: flex;
  padding: 1.875rem 2.5rem;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-width: ${(props) => props.$borderWidth || "0 0 0 0"};
`;

const Label = styled.span<{ $marginRight?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${(props) => props.$marginRight || "0"};
  opacity: 60%;
`;

const TableCellWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const EditableTable = () => {
  return (
    <Table>
      <TableRow $bg="#e3e3e3" height="6.25rem">
        <TableDiv width="18.75rem" $borderWidth="0 1px 0 0">
          <Input id="date" />
        </TableDiv>
        <TableDiv width="12.5rem" $borderWidth="0 1px 0 0">
          <Input id="shift" />
        </TableDiv>
        <TableDiv width="50rem" $borderWidth="0 1px 0 0">
          <Label $marginRight="1.25rem">Мастер:</Label>
          <Input id="master" />
        </TableDiv>
        <TableDiv width="18.125rem">
          <Input id="equipment" />
        </TableDiv>
      </TableRow>

      <TableRow height="18.75rem">
        <TableCellWrapper>
          <TableDiv
            width="18.75rem"
            height="6.25rem"
            $borderWidth="0 1px 1px 0"
          >
            <Input id="personnel_header" />
          </TableDiv>
          <TableDiv width="18.75rem" $borderWidth="0 1px 0 0" height="12.5rem">
            <Input id="personnel_id" />
          </TableDiv>
        </TableCellWrapper>

        <TableCellWrapper>
          <TableRow>
            <TableDiv
              width="52.5rem"
              height="6.25rem"
              $borderWidth="0 1px 1px 0"
            >
              <Input id="personnel" textAlign={"center"} />
            </TableDiv>
          </TableRow>
          <TableRow>
            <TableDiv
              width="28.125rem"
              height="6.25rem"
              $borderWidth="0 1px 1px 0"
            >
              <Input id="status" />
            </TableDiv>
            <TableDiv
              width="9.375rem"
              height="6.25rem"
              $borderWidth="0 1px 1px 0"
            >
              <Input id="hours" textAlign="center" />
            </TableDiv>
            <TableDiv width="15rem" height="6.25rem" $borderWidth="0 1px 1px 0">
              <Input id="spi" />
            </TableDiv>
          </TableRow>
          <TableRow>
            <TableDiv width="12.5rem" height="6.25rem" $borderWidth="0 1px 0 0">
              <Input id="efficiency" />
              <Label>%</Label>
            </TableDiv>
            <TableDiv width="40rem" height="6.25rem" $borderWidth="0 1px 0 0">
              <Input id="machine_status" textColor="#E30000" />
            </TableDiv>
          </TableRow>
        </TableCellWrapper>

        <TableDiv width="28.75rem">
          <Textarea id="comment" />
        </TableDiv>
      </TableRow>
    </Table>
  );
};

export default EditableTable;
