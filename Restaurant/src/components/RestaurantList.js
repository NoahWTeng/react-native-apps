import React from 'react';
import {View, TextInput, FlatList, StyleSheet} from 'react-native';
import {restaurant} from '../../fakesData';
import {RestaurantRow} from './RestaurantRow';
import {Header} from './Header';

import {styles} from '../styles';

export function RestaurantList({navigation}) {
  const [search, setSearch] = React.useState(null);

  return (
    <View style={styles.addressContainer}>
      <View style={stylesList.header}>
        <Header />
      </View>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Live Search"
          placeholderTextColor="#8c8c8c"
          onChangeText={(text) => {
            setSearch(text);
          }}
          value={search}
        />
      </View>

      <FlatList
        data={restaurant.filter(
          (elm) =>
            !search ||
            elm.name.toLowerCase().indexOf(search.toLowerCase()) > -1,
        )}
        renderItem={({item, index}) => (
          <RestaurantRow item={item} index={index} navigation={navigation} />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const stylesList = StyleSheet.create({
  header: {
    backgroundColor: '#FFFF',
  },
});
