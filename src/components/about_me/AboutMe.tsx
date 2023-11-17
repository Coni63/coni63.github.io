import React from 'react';
import { useTranslation } from 'react-i18next';

import logo from '../../assets/100_0233.png';

import './AboutMe.scss';

export function AboutMe() {
  const { t } = useTranslation(['aboutme']);
  return (

      <div className="horizontal-container">
        <div>
          <h1>Nicolas MINÉ</h1>
          <h3>{t("Position")}</h3>
        </div>
        <div>
          <div className="circular-container">
            <img src={logo} alt="me" className="circular-image"></img>
          </div>
        </div>
      </div>
  ); 
}
