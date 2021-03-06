import React from 'react';
import AwesomeButton from 'react-native-really-awesome-button';
import { Colors } from '../../constants';

const BUTTON_HEIGHT = 48;

const Button = ({ label, rounded, color, variant, onClick, ...other }) => {

  let contained = variant === 'contained' || variant === 'raised' ? {'variant': 'contained', 'raised': true} : {};

  switch(color){
    case 'primary':
      styles.container.backgroundColor = Colors.primary;
      break;
    case 'secondary':
      styles.container.backgroundColor = Colors.secondary;
      break;
    default:
      styles.container.backgroundColor = color;
      break;
  }
  
  return (
    <AwesomeButton
      style={{container:Object.assign({}, styles.container, rounded && stylesRounded.container )}}
      onPress={(next) => {
        onClick
        next();
      }}
      {...contained}
      {...other}
      >
    {label}
    </AwesomeButton>
  );
};

const styles = {
  container: {
    height: BUTTON_HEIGHT
  },
};

const stylesRounded = {
  container: {
    borderRadius: BUTTON_HEIGHT / 2
  },
};

export default Button;
