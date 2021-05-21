import styled from "styled-components";

export default function App() {
  const AppStyled = styled.div`
    background-color: pink;
  `;
  return (
    <AppStyled>
      <header className="App-header">
        <h1>Portfolio</h1>
      </header>
    </AppStyled>
  );
}
