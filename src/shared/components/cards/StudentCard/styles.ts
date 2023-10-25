import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  layout: {
    backgroundColor: '#FFF',
    padding: 22,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e9e9e9',
  },

  title: {
    flex: 1,
    flexDirection: 'column',
  },

  name: {
    flex: 1,
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
    lineHeight: 22,
  },

  container: {
    paddingTop: 8,
  },

  text: {
    fontSize: 14,
    color: '#3f3f3f',
    fontWeight: '400',
    lineHeight: 22,
  },

  inline: {
    flexDirection: 'row',
  },

  button: {
    height: 36,
    backgroundColor: '#3f3f3f',
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 8,
  },
});
