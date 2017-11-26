import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const globalStyling = (props) => {

  // type your custom Theme config here..
  const myTheme = {

  };

  const finalTheme = {
    ...darkBaseTheme
  };

  Object.keys(myTheme).forEach((style, index) => {
    if (typeof myTheme[style] !== 'object') {
      finalTheme[style] = myTheme[style]
      return
    }
    Object.keys(myTheme[style]).forEach((prop, index) => {
      if (finalTheme[style][prop] === 'undefined') {
        finalTheme[style] = {
          [prop]: myTheme[style][prop]
        }
        return
      }
      finalTheme[style][prop] = myTheme[style][prop]
    })
  });

  return (
    <MuiThemeProvider style={myTheme} muiTheme={ getMuiTheme(finalTheme) }>
        {props.children}
    </MuiThemeProvider>
  )
}

export default globalStyling