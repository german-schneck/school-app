// Dependencies
import {StyleSheet} from 'react-native';
import theme from '../../styles/theme';

export default StyleSheet.create({
  body: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    borderTopWidth: 1,
    borderTopColor: '#e9e9e9',
  },
  active: {
    backgroundColor: '#e9eef1',
    borderTopColor: theme.colors.cyan,
  },
  text: {
    color: '#000',
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: '600',
  },
  activeText: {
    color: theme.colors.cyan,
  },
});
