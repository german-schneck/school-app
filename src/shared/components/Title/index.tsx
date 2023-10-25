// Dependencies
import React from 'react';
import {Text} from 'react-native';

// StyleSheet
import styles from './styles';

// Types
import {TitleProps} from './types';

const Title = ({title, description}: TitleProps) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </>
  );
};

export default Title;
