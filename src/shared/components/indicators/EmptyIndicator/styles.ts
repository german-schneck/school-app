import {StyleSheet} from 'react-native';
import theme from '../../../styles/theme';

export default StyleSheet.create({
  title: {
    fontSize: 22,
    lineHeight: 22,
    fontWeight: '400',
    textAlign: 'center',
    color: theme.colors.cyan,
    paddingHorizontal: 22,
    paddingVertical: 8,
  },
  description: {
    color: '#2e2e2e',
    fontSize: 14,
    lineHeight: 26,
    fontWeight: '300',
    textAlign: 'center',
    paddingHorizontal: 22,
  },
  container: {
    paddingVertical: 22,
  },
  actions: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
