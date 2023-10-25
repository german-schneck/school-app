// Dependencies
import React from 'react';
import {TextInput as RNTextInput, Text, View} from 'react-native';

// Types
import {TextInputProps} from './types';

// StyleSheet
import styles from './styles';

function TextInput({
  label,
  value,
  placeholder,
  error,
  onChangeText,
}: TextInputProps): React.ReactElement {
  return (
    <View style={styles.layout}>
      <Text style={styles.label}>{label}</Text>
      <RNTextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={[styles.input, !!error && styles.errorInput]}
        placeholderTextColor={'#aaaaaa'}
      />

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

export default TextInput;
