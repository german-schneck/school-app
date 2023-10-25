// Dependencies
import React, {useRef} from 'react';
import {Picker} from '@react-native-picker/picker';
import {Text, TouchableOpacity} from 'react-native';

// StyleSheet
import styles from './styles';

interface SelectorInputProps {
  label: string;
  items: Array<{
    label: string;
    value: string;
  }>;
  placeholder: string;
  value?: string;
  error?: string;
  onChange: (value: string) => void;
}

function SelectorInput({
  label,
  items = [],
  value,
  error,
  placeholder,
  onChange,
}: SelectorInputProps): React.ReactElement {
  const selectorRef = useRef<Picker<string>>(null);

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={[styles.button, !!error && styles.errorInput]}
        onPress={() => selectorRef.current?.focus()}>
        <Text
          style={[
            styles.buttonText,
            value !== undefined && styles.buttonTextFilled,
          ]}>
          {value ? value : placeholder}
        </Text>
      </TouchableOpacity>
      {error && <Text style={styles.error}>{error}</Text>}

      <Picker
        ref={selectorRef}
        mode={'dropdown'}
        enabled={true}
        style={styles.picker}
        renderToHardwareTextureAndroid={true}
        selectedValue={value}
        accessibilityLabel="Change Region"
        onValueChange={onChange}>
        {items.map((item, index) => (
          <Picker.Item
            key={`--picker-item-${index.toString()}`}
            label={item.label}
            value={item.value}
          />
        ))}
      </Picker>
    </>
  );
}

export default SelectorInput;
