import React, {useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

import {Block, Typography as Text, Button, Input} from '../../components';
import {sizes, colors, explore} from '../../constants';
import {styles} from './styles';

const {width, height} = Dimensions.get('window');

export function Explore() {
  const navigation = useNavigation();

  const [state, changeState] = useState({
    searchFocus: new Animated.Value(0.6),
    searchString: null,
    images: explore,
  });

  const handleSearchFocus = (status) => {
    Animated.timing(state.searchFocus, {
      toValue: status ? 0.8 : 0.6, // status === true, increase flex size
      duration: 150, // ms
      useNativeDriver: false,
    }).start();
  };

  const renderSearch = () => {
    const {searchString, searchFocus} = state;
    const isEditing = searchFocus && searchString;

    return (
      <Block animated middle flex={searchFocus} style={styles.search}>
        <Input
          placeholder="Search"
          placeholderTextColor={colors.gray2}
          style={styles.searchInput}
          onFocus={() => handleSearchFocus(true)}
          onBlur={() => handleSearchFocus(false)}
          onChangeText={(text) =>
            changeState((s) => ({...s, searchString: text}))
          }
          value={searchString}
          onRightPress={() =>
            isEditing ? changeState((s) => ({...s, searchString: null})) : null
          }
          rightStyle={styles.searchRight}
          rightLabel={
            <Icon
              name={isEditing ? 'close' : 'search'}
              size={sizes.base / 1.6}
              color={colors.gray2}
              style={styles.searchIcon}
            />
          }
        />
      </Block>
    );
  };

  const renderImage = (img, index) => {
    const sizes = Image.resolveAssetSource(img);
    const fullWidth = width - sizes.padding * 2.5;
    const resize = (sizes.width * 100) / fullWidth;
    const imgWidth = resize > 75 ? fullWidth : sizes.width * 1;

    return (
      <TouchableOpacity
        key={`img-${index}`}
        onPress={() => navigation.navigate('Product')}>
        <Image
          source={img}
          style={[styles.image, {minWidth: imgWidth, maxWidth: imgWidth}]}
        />
      </TouchableOpacity>
    );
  };

  const renderExplore = () => {
    const {images} = state;
    const mainImage = images[0];

    return (
      <Block style={{marginBottom: height / 3}}>
        <TouchableOpacity
          style={[styles.image, styles.mainImage]}
          onPress={() => navigation.navigate('Product')}>
          <Image source={mainImage} style={[styles.image, styles.mainImage]} />
        </TouchableOpacity>
        <Block row space="between" wrap>
          {images.slice(1).map((img, index) => renderImage(img, index))}
        </Block>
      </Block>
    );
  };

  const renderFooter = () => {
    return (
      <LinearGradient
        locations={[0.5, 1]}
        style={styles.footer}
        colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.6)']}>
        <Button gradient style={{width: width / 2.678}}>
          <Text bold white center>
            Filter
          </Text>
        </Button>
      </LinearGradient>
    );
  };

  return (
    <Block color="white">
      <Block flex={false} row center space="between" style={styles.header}>
        <Text h1 bold>
          Explore
        </Text>
        {renderSearch()}
      </Block>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.explore}>
        {renderExplore()}
      </ScrollView>

      {renderFooter()}
    </Block>
  );
}
