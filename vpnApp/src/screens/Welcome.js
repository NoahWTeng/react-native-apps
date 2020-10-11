import React from 'react';
import {StyleSheet, Image, Animated, FlatList, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Block, Typography as Text, Button} from '../components';
import {background, COLORS, SIZES} from '../constants';

const {height, width} = Dimensions.get('window');
const backgrounds = [
  {
    id: 1,
    title: 'Secured, forever.',
    description:
      'Irure consectetur minim est eiusmod mollit minim laboris id sunt veniam. Fugiat et dolor et excepteur id est. Nostrud ut irure enim consequat minim non dolor quis laborum mollit sunt.',
    img: background.welcome,
  },
  {
    id: 2,
    title: 'Encrypted, forever.',
    description:
      'Consequat aliquip labore ut duis nostrud dolor culpa officia culpa exercitation voluptate excepteur deserunt.',
    img: background.encrypted,
  },
  {
    id: 3,
    title: 'Privacy, forever.',
    description:
      'Pariatur ad tempor quis nisi sint laboris anim sunt ex sit velit cupidatat proident.',
    img: background.privacy,
  },
];

export const Welcome = () => {
  const navigation = useNavigation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const scrollX = new Animated.Value(0);
  const stepPosition = Animated.divide(scrollX, width);

  const renderImage = () => {
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={backgrounds}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({item}, index) => {
          return (
            <Block center style={{width}}>
              <Image
                source={item.img}
                resizeMode="center"
                style={{width: SIZES.width, height: height / 1.6}}
              />
              <Block center>
                <Text animated h3 bold>
                  {item.title}
                </Text>
                <Text
                  height={16}
                  animated
                  center
                  caption
                  gray
                  style={{
                    marginVertical: SIZES.base,
                    marginHorizontal: SIZES.base * 4,
                  }}>
                  {item.description}
                </Text>
              </Block>
            </Block>
          );
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {x: scrollX}},
            },
          ],
          {
            listener: () => {},
            useNativeDriver: false,
          },
        )}
      />
    );
  };

  const renderDots = () => {
    return (
      <Block row center middle style={styles.stepsContainer}>
        {backgrounds.map((_, idx) => {
          const opacity = stepPosition.interpolate({
            inputRange: [idx - 1, idx, idx + 1],
            outputRange: [0.6, 1, 0.4],
            extrapolate: 'clamp',
          });
          return (
            <Block
              animated
              flex={false}
              key={`step-${idx}`}
              color="gray"
              style={[styles.steps, {opacity}]}
            />
          );
        })}
      </Block>
    );
  };

  return (
    <Block color={COLORS.white} flex>
      <Block block center middle>
        {renderImage()}
      </Block>
      <Block center bottom>
        {renderDots()}
        <Button
          bottom
          style={styles.button}
          onPress={() => navigation.navigate('Vpn')}>
          <Text
            center
            white
            caption
            bold
            style={{
              marginHorizontal: SIZES.base * 3,
            }}>
            GET STARTED
          </Text>
        </Button>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  stepsContainer: {
    marginVertical: SIZES.base,
  },
  steps: {
    width: SIZES.base / 1.8,
    height: SIZES.base / 1.8,
    borderRadius: 50,
    marginHorizontal: 5.5,
  },
  button: {
    backgroundColor: COLORS.primary,
    marginVertical: SIZES.base,
    borderRadius: SIZES.radius * 8,
  },
});
