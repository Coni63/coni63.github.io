import './App.scss';

import React from "react";

import {AboutMe} from './components/about_me/AboutMe';

import fr_flag from './assets/france.png';
import en_flag from './assets/royaume-uni.png';
import i18n from "./components/LangConfig";
import {Skills} from './components/skills/Skills';


export default class App extends React.Component {
  state = {
    lang: "en"
  };

  langChange = (e: any) => {
    if (e.target.lang === this.state.lang) return;

    this.setState({ lang: e.target.lang }, () => {
      localStorage.setItem("lang", this.state.lang);
      const lang = localStorage.getItem("lang");
      i18n.changeLanguage(lang!);
      console.log(`Language changed to '${lang}'`);
    });
  };

  render() {
    return (
      <>      
        <div id="Header">
          <img src={fr_flag} alt="french" lang="fr" onClick={this.langChange}></img>
          <img src={en_flag} alt="english" lang="en" onClick={this.langChange}></img>
        </div>
        <div id="App">
          {/* <div className="Section">
            <AboutMe/>
          </div> */}
          <div className="Section">
            <Skills/>
          </div>
        </div>
      </>
    );
  }
}
