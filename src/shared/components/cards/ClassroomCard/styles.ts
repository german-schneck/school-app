import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  layout: {
    backgroundColor: '#FFF',
    padding: 14,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e9e9e9',
  },
  title: {
    fontSize: 18,
    color: '#000',
    fontWeight: '400',
    lineHeight: 28,
  },
  description: {
    fontSize: 14,
    color: '#5f5f5f',
    fontWeight: '400',
    lineHeight: 22,
  },
  container: {
    flex: 1,
    paddingLeft: 16,
  },
  inline: {
    flexDirection: 'row',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: '#9d36f1',
    marginTop: 8,
  },
  iconTxt: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '600',
  },
});
