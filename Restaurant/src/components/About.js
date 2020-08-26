import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import fake from 'faker';
export function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>About Restaurant Review</Text>
      <Icon
        name="restaurant-outline"
        size={30}
        color={'#292929'}
        style={styles.icon}
      />
      <Text style={styles.text}>{fake.random.words(50)}</Text>
      <Text style={styles.text}>{fake.random.words(20)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  header: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  icon: {
    textAlign: 'center',
  },
  text: {paddingVertical: 16, fontSize: 14},
});
