import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  cell: {
    height: 30,
    width: '25%',
    borderWidth: 1,
    borderColor: '#625f5e',
    backgroundColor: '#f0eeef',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  text: {
    fontSize: 11,
    textAlign: 'center',
  }
});
