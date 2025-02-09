import styled, { createGlobalStyle } from "styled-components";
import EditableTable from "./components/EditableTable";
import CountdownBar from "./components/CountdownBar";

const GlobalStyle = createGlobalStyle`
input, span {
  font-family: Montserrat;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.5rem;
  letter-spacing: 0%;
}

textarea {
  font-family: Montserrat;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.75rem;
  letter-spacing: 0%;
}

* {
  box-sizing: border-box;
}`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <EditableTable />
      <CountdownBar />
    </>
  );
};

export default App;
