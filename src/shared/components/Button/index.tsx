// Dependencies
import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';

// Types
import {ButtonProps} from './types';

// StyleSheet
import styles from './styles';

function Button({
  variant = 'primary',
  caption,
  style = [],
  isLoading = false,
  disabled = false,
  onPress,
}: ButtonProps): React.ReactElement {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[variant],
        style,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={isLoading || disabled}
      activeOpacity={0.8}>
      {isLoading ? (
        <ActivityIndicator size={'small'} color={'#fff'} />
      ) : (
        <Text style={[styles.buttonTxt, styles[`${variant}Text`]]}>
          {caption}
        </Text>
      )}
    </TouchableOpacity>
  );
}

export default Button;
