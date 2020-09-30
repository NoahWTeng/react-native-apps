import React, {useState} from 'react';
import {FlatList, Animated, Dimensions, Image} from 'react-native';
import {Block, Typography as Text, Button} from '../../components';
import {styles} from './styles';
import {sizes} from '../../constants';

const {width, height} = Dimensions.get('window');

export function Welcome(props) {
  const {illustrations} = props;

  const [state, changeState] = useState();

  const scrollX = new Animated.Value(0);
  const renderIllustration = () => {
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustrations}
        extraDate={state}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({item}) => (
          <Image
            source={item.source}
            resizeMode="contain"
            style={{width, height: height / 2.3, overflow: 'visible'}}
          />
        )}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {x: scrollX}},
            },
          ],
          {listener: () => {}, useNativeDriver: false},
        )}
      />
    );
  };
  const renderSteps = () => {
    const stepPosition = Animated.divide(scrollX, width);

    return (
      <Block row center middle style={styles.stepsContainer}>
        {illustrations.map((_, idx) => {
          const opacity = stepPosition.interpolate({
            inputRange: [idx - 1, idx, idx + 1],
            outputRange: [0.4, 1, 0.4],
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
    <Block color="white">
      <Block center middle flex={0.5}>
        <Text h1 bold>
          Your Home.{' '}
          <Text h1 primary>
            Greener.
          </Text>
        </Text>
        <Text h3 gray2 style={{marginTop: sizes.padding / 2}}>
          Enjoy the experience.
        </Text>
      </Block>
      <Block center middle>
        {renderIllustration()}
        {renderSteps()}
      </Block>
      <Block middle flex={0.5} margin={[0, sizes.padding * 2]}>
        <Button gradient onPress={() => {}}>
          <Text center semibold white>
            Login
          </Text>
        </Button>
        <Button shadow onPress={() => {}}>
          <Text center semibold>
            Signup
          </Text>
        </Button>
        <Button onPress={() => {}}>
          <Text center caption gray>
            Terms of service
          </Text>
        </Button>
      </Block>
    </Block>
  );
}

Welcome.defaultProps = {
  illustrations: [
    {id: 1, source: require('../../assets/images/illustration_1.png')},
    {id: 2, source: require('../../assets/images/illustration_2.png')},
    {id: 3, source: require('../../assets/images/illustration_3.png')},
  ],
};
