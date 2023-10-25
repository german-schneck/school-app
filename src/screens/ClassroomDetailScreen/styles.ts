import {StyleSheet} from 'react-native';
import theme from '../../shared/styles/theme';

export default StyleSheet.create({
  layout: {
    backgroundColor: '#fff',
  },

  container: {
    padding: 22,
    paddingBottom: 0,
    backgroundColor: theme.colors.white,
  },

  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '400',
  },

  header: {
    backgroundColor: '#1ca4ff',
    padding: 22,
    minHeight: 200,
    justifyContent: 'flex-end',
  },

  field: {
    paddingVertical: 12,
  },

  label: {
    color: '#000',
    fontSize: 13,
    letterSpacing: 0.2,
    fontWeight: '600',
    textTransform: 'uppercase',
    paddingBottom: 4,
  },

  text: {
    color: '#000',
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '400',
  },

  actions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: 22,
  },

  actionButton: {
    height: 42,
    backgroundColor: theme.colors.cyanDark,
    marginLeft: 12,
  },

  studentsTitle: {
    paddingBottom: 0,
  },

  body: {
    paddingHorizontal: 22,
  },

  student: {
    flexDirection: 'row',
    paddingVertical: 4,
  },
});
