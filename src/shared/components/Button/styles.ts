import {StyleSheet} from 'react-native';
import theme from '../../styles/theme';

export default StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    height: 52,
  },

  buttonTxt: {
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.25,
    fontWeight: '700',
    textTransform: 'uppercase',
  },

  disabled: {
    opacity: 0.4,
  },

  // Primary Variant
  primary: {
    backgroundColor: theme.colors.cyan,
    borderRadius: 52,
  },
  primaryText: {
    color: '#fff',
  },

  // Secondary Variant
  secondary: {
    backgroundColor: '#f3f3f3',
    borderRadius: 4,
  },
  secondaryText: {
    color: '#000',
  },
});
