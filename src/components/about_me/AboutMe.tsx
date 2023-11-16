import React from 'react';

import logo from '../../assets/100_0233.png';
import i18n from "../LangConfig";

import './AboutMe.scss';

export default class AboutMe extends React.Component {
  render() {
    return (

        <div className="hg">
          <div>
            <h1>Nicolas MINÉ</h1>
            <h2>{i18n.t("Hi")}</h2>
            <h3>Ingénieur en informatique</h3>
          </div>
          <div>
            <div className="circular-container">
              <img src={logo} alt="me" className="circular-image"></img>
            </div>
          </div>
        </div>
    );
  }
}
