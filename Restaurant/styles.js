import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  column: {flexDirection: 'column'},
  row: {flexDirection: 'row'},
  addressContent: {
    marginBottom: 6,
    padding: 4,
  },
  edges: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 50,
  },
  title: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
  addressContainer: {
    flex: 9,
  },
  addressView: {
    flexDirection: 'column',
    flex: 8,
    justifyContent: 'center',
  },
  elmName: {
    fontWeight: '600',
  },
  elmAddress: {
    color: 'grey',
    fontSize: 12,
  },
  textInput: {
    fontSize: 14,
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderBottomColor: '#8c8c8c',
    borderBottomWidth: 1,
  },
  infoBox: {
    marginHorizontal: 40,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 0.5,
  },
});
