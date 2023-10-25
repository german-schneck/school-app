import {StyleProp, ViewStyle} from 'react-native';

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  caption: string;
  isLoading?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}
