// Dependencies
import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {format} from 'date-fns';
import DatePicker from 'react-native-date-picker';

// StyleSheet
import styles from './styles';

// Types
import {SelectorInputProps} from './types';

function DateInput({
  label,
  value,
  error,
  placeholder,
  onChange,
}: SelectorInputProps): React.ReactElement {
  const [isDatePickerOpened, setDatePickerOpened] = useState<boolean>(false);

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={[styles.button, !!error && styles.errorInput]}
        onPress={() => setDatePickerOpened(true)}>
        <Text
          style={[
            styles.buttonText,
            value !== undefined && styles.buttonTextFilled,
          ]}>
          {value ? format(value, 'dd/MM/yyyy') : placeholder}
        </Text>
      </TouchableOpacity>

      {error && <Text style={styles.error}>{error}</Text>}

      <DatePicker
        modal
        mode={'date'}
        open={isDatePickerOpened}
        date={value ?? new Date()}
        maximumDate={new Date()}
        onConfirm={date => {
          onChange(date);
          setDatePickerOpened(false);
        }}
        onCancel={() => {
          setDatePickerOpened(false);
        }}
      />
    </>
  );
}

export default DateInput;
