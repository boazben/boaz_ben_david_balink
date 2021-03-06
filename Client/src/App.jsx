import {English } from './utils/dictionary';
import { createContext, useState } from 'react';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import Add from './Pages/Add/Add';
import Edit from './Pages/Edit/Edit';
import Home from './Pages/Home/Hmoe';
import { StyledApp } from './styles/App.style';
import { ThemeProvider } from 'styled-components';
import {theme} from './styles/theme';
import GlobalStyles from './styles/Global.styled';

export const LanguageContext = createContext()


function App() {
  const [language, setLanguage] = useState(English)

  return (
    <div dir={language.dir}>
      <LanguageContext.Provider value={[language, setLanguage]}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <StyledApp >
            <Header />
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/add' element={<Add />}/>
              <Route path='/edit/:id' element={<Edit />}/>
            </Routes>
          </StyledApp>
        </ThemeProvider>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
