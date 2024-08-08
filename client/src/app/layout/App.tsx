
import Catalog from "../features/Catalog/Catalog";
import Header from "./Header";
import { Container, createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";




function App() {

  const [darkMode,setDarkmode] =useState(false);
  const platteType = darkMode ? 'dark': 'light'
  const theme = createTheme({
   palette :{

    mode:platteType,
    background:{
    default: platteType =='light'? '#eaeaea' : '#121212'    }
   }
  })
  function handleThemeChange(){

   setDarkmode(!darkMode);

  }


  return (
    
      <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
<Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
<Container>
 <Catalog />
 </Container>
 </ThemeProvider>
      </>
  );
}

export default App;
