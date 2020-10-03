import React, {useState} from 'react';
import {Image, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Block, Typography as Text, Card, Badge, Button} from '../../components';
import {sizes, profile, categories} from '../../constants';
import {styles} from './styles';

export function Browse(props) {
  const navigation = useNavigation();

  const [state, changeState] = useState({
    active: 'Products',
    profile,
  });
  const tabs = ['Products', 'Inspirations', 'Shop'];

  const renderTaps = (tab) => {
    const {active} = state;
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => changeState((s) => ({...s, active: tab}))}
        style={[styles.tab, isActive && styles.active]}>
        <Text title medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <Block color="white">
      <Block flex={false} row center space="between" style={styles.header}>
        <Text h1 bold>
          Browse
        </Text>
        <Button onPress={() => navigation.navigate('Settings')}>
          <Image source={profile.avatar} style={styles.avatar} />
        </Button>
      </Block>
      <Block flex={false} row style={styles.tabs}>
        {tabs.map((tab) => renderTaps(tab))}
      </Block>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingVertical: sizes.base * 2}}>
        <Block flex={false} row space="between" style={styles.categories}>
          {categories.map((category) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('Explore', {category})}>
                <Card center middle shadow style={styles.category}>
                  <Badge margin={[0, 0, 15]} size={50} color="badge">
                    <Image source={category.image} />
                  </Badge>
                  <Text medium height={20}>
                    {category.name}
                  </Text>
                  <Text gray caption>
                    {category.count} products
                  </Text>
                </Card>
              </TouchableOpacity>
            );
          })}
        </Block>
      </ScrollView>
    </Block>
  );
}
