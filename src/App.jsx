import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Profile from './components/Profile';
import { LanguageContext } from './context/LanguageContext';
import { LanguageContextProvider } from './context/LanguageContext.jsx'

import tr from "./data/tr.json";
import en from "./data/en.json";

import { useContext } from 'react';
import CustomizedSwitches from './components/CustomizedSwitches.jsx';

function App() {
  const {
    language,
    languageHandleChange,


    selectWord
  } = useContext(LanguageContext);


  return (
    <div >
      <div className="app-body">
        <div className="lang-switch">
          {language === tr ? (
            <button onClick={() => languageHandleChange(en)}><span className="text-greenColor">Turn</span> English</button>
          ) : (
            <button onClick={() => languageHandleChange(tr)}><span className="text-greenColor">Türkçe</span>'ye Geç</button>
          )}
        </div>

        <div className="dark-switch">
          <CustomizedSwitches


          />
        </div>

        <Switch>
          <Route path="/">
            <Header />
            <Skills />
            <Profile />
            <Projects />
            <Footer />
          </Route>
        </Switch>

      </div>
    </div>
  );
}

export default App;
