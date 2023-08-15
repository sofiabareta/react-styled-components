import React from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/themes";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import {GlobalStyle} from "./Components/GlobalStyle";
import { BtnTema } from "./Components/UI";
import ThemeSwitcher from "./Components/ThemeSwitcher";
import { useState } from "react";

function App() {
  const [tema, setTema] = useState(true)

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <BtnTema onClick={() => setTema(tema => !tema)}>
        <ThemeSwitcher tema={tema} />
      </BtnTema>
      <GlobalStyle />
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
