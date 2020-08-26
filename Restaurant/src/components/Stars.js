import React from 'react';

import {View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export function Stars({rating, size}) {
  const stars = [...Array(Math.ceil(rating))];

  return (
    <View style={{flexDirection: 'row'}}>
      {stars.map((elm, idx) => {
        const name = Math.floor(rating) > idx ? 'star' : 'star-half';
        return <Icon key={idx} name={name} color="#FFD64C" size={size} />;
      })}
    </View>
  );
}
