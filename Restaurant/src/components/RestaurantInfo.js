import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Stars} from './Stars';

export function RestaurantInfo({route, navigation}) {
  const item = route.params.item;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <Image
            sytle={styles.img}
            source={{uri: item.thumbnailUrl, width: 100, height: 100}}
          />
        </View>

        <View style={styles.headerRight}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.address}>{item.address}</Text>
          <Stars rating={item.rating} size={14} />
          <TouchableOpacity
            onPress={() => navigation.navigate('AddReview')}
            style={styles.button}>
            <Text style={styles.buttonText}>Add Review</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bodyContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  headerLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRight: {
    flex: 2,
    justifyContent: 'space-around',
  },
  bodyContainer: {
    flex: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
  },
  address: {
    color: 'grey',
  },
  button: {
    borderWidth: 1,
    borderRadius: 2,
    width: 100,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  buttonText: {},
});
