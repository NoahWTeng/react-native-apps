import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from '../styles';

export function Header() {
  return (
    <View style={styles.title}>
      <Image
        source={{
          uri:
            'https://www.logaster.com.mx/blog/wp-content/uploads/sites/4/2019/03/0080_t_pizza-logo_1.png',
          width: 60,
          height: 60,
        }}
      />
      <Text style={styles.header}>Restaurant Review</Text>
    </View>
  );
}
