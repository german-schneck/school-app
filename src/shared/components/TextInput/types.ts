import {TextInput} from 'react-native';

export interface TextInputProps {
  label: string;
  error?: string;
  value: TextInput['props']['value'];
  placeholder: TextInput['props']['placeholder'];
  onChangeText: TextInput['props']['onChangeText'];
}
