import React from 'react';
import {View, Text, Button} from 'react-native';
import {Stars} from './Stars';

import {styles} from '../styles';

export function RestaurantRow({item, index, navigation}) {
  const pressInfo = () => {
    navigation.navigate('RestaurantInfo', {item});
  };

  return (
    <View
      key={item.name}
      style={[
        styles.addressContent,
        {
          backgroundColor: index % 2 !== 0 ? '#f0f0f0' : 'white',
        },
      ]}>
      <View style={styles.row}>
        <View style={styles.stars}>
          <Stars rating={item.rating} />
        </View>
        <View style={styles.addressView}>
          <Text style={styles.elmName}>{item.name}</Text>
          <Text style={styles.elmAddress}>{item.address}</Text>
        </View>
        <View style={styles.edges}>
          <Button title="+ Info" onPress={() => pressInfo()} />
        </View>
      </View>
    </View>
  );
}
