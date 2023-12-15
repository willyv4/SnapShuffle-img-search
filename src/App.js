import { ThemeProvider } from "styled-components";
import { NavBar } from "./components/NavBar";
import theme from "./ColorTheme";
import { Main } from "./styledComponents/Main";
import { ImageList } from "./components/ImageList";
import { createContext, useState } from "react";
import { Hero } from "./components/Hero";
const MyContext = createContext();

function App() {
  const [query, setQuery] = useState("");

  return (
    <MyContext.Provider value={{ query, setQuery }}>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Main>{!query ? <Hero /> : <ImageList />}</Main>
      </ThemeProvider>
    </MyContext.Provider>
  );
}

export { App, MyContext };
