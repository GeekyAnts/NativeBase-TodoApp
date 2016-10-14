import {
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: 'green',
    flexDirection: 'row',
    paddingTop: 30,
  },
  left: {
    flex: 1,
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
  title: {
    alignSelf: 'center',
    backgroundColor: 'pink',
    width: 300,
    textAlign: 'center',
    paddingLeft: 200,
  },
});
