import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    color: '#000',
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#f0f0f0fa',
    borderRadius: 4,
  },
  buttonText: {
    color: '#aaaaaa',
  },
  label: {
    fontSize: 13,
    color: '#313131',
    fontWeight: '400',
    lineHeight: 22,
    padding: 4,
  },
  buttonTextFilled: {
    color: '#000',
    textTransform: 'uppercase',
  },
  picker: {
    height: 0,
  },
  error: {
    fontSize: 13,
    color: '#ec3131',
    fontWeight: '400',
    lineHeight: 22,
    padding: 4,
  },
  errorInput: {
    borderColor: '#ec3131',
  },
});
