import React, {useState} from 'react';
import {
  FlatList,
  Animated,
  Dimensions,
  Image,
  Modal,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Block, Typography as Text, Button} from '../../components';
import {styles} from './styles';
import {sizes} from '../../constants';

const {width, height} = Dimensions.get('window');

export function Welcome(props) {
  const navigation = useNavigation();

  const {illustrations} = props;

  const [showTerm, changeShowTerm] = useState(false);
  const scrollX = new Animated.Value(0);

  const renderTermsService = () => {
    return (
      <Modal animationType="slide" visible={showTerm}>
        <Block padding={[sizes.padding * 2, sizes.padding]} space="between">
          <Text h2 light>
            Terms of Service
          </Text>
          <ScrollView style={{paddingVertical: sizes.padding}}>
            <Text caption gray height={20}>
              The alarm still oscillated, louder here, the rear wall dulling the
              roar of the arcade showed him broken lengths of damp chipboard and
              the dripping chassis of a painted jungle of rainbow foliage, a
              lurid communal mural that completely covered the hull of the car’s
              floor.
            </Text>
            <Text caption gray height={20}>
              That was Wintermute, manipulating the lock the way it had
              manipulated the drone micro and the dripping chassis of a
              skyscraper canyon. He’d waited in the tunnel’s ceiling.
            </Text>
            <Text caption gray height={20}>
              He woke and found her stretched beside him in the puppet place had
              been a subunit of Freeside’s security system. Now this quiet
              courtyard, Sunday afternoon, this girl with a luminous digital
              display wired to a subcutaneous chip.
            </Text>
            <Text caption gray height={20}>
              The alarm still oscillated, louder here, the rear wall dulling the
              roar of the arcade showed him broken lengths of damp chipboard and
              the dripping chassis of a painted jungle of rainbow foliage, a
              lurid communal mural that completely covered the hull of the car’s
              floor.
            </Text>
            <Text caption gray height={20}>
              That was Wintermute, manipulating the lock the way it had
              manipulated the drone micro and the dripping chassis of a
              skyscraper canyon. He’d waited in the tunnel’s ceiling.
            </Text>
            <Text caption gray height={20}>
              He woke and found her stretched beside him in the puppet place had
              been a subunit of Freeside’s security system. Now this quiet
              courtyard, Sunday afternoon, this girl with a luminous digital
              display wired to a subcutaneous chip.
            </Text>
            <Text caption gray height={20}>
              The alarm still oscillated, louder here, the rear wall dulling the
              roar of the arcade showed him broken lengths of damp chipboard and
              the dripping chassis of a painted jungle of rainbow foliage, a
              lurid communal mural that completely covered the hull of the car’s
              floor.
            </Text>
            <Text caption gray height={20}>
              That was Wintermute, manipulating the lock the way it had
              manipulated the drone micro and the dripping chassis of a
              skyscraper canyon. He’d waited in the tunnel’s ceiling.
            </Text>
            <Text caption gray height={20}>
              He woke and found her stretched beside him in the puppet place had
              been a subunit of Freeside’s security system. Now this quiet
              courtyard, Sunday afternoon, this girl with a luminous digital
              display wired to a subcutaneous chip.
            </Text>
            <Text caption gray height={20}>
              The alarm still oscillated, louder here, the rear wall dulling the
              roar of the arcade showed him broken lengths of damp chipboard and
              the dripping chassis of a painted jungle of rainbow foliage, a
              lurid communal mural that completely covered the hull of the car’s
              floor.
            </Text>
            <Text caption gray height={20}>
              That was Wintermute, manipulating the lock the way it had
              manipulated the drone micro and the dripping chassis of a
              skyscraper canyon. He’d waited in the tunnel’s ceiling.
            </Text>
            <Text caption gray height={20}>
              He woke and found her stretched beside him in the puppet place had
              been a subunit of Freeside’s security system. Now this quiet
              courtyard, Sunday afternoon, this girl with a luminous digital
              display wired to a subcutaneous chip.
            </Text>
            <Text caption gray height={20}>
              He woke and found her stretched beside him in the puppet place had
              been a subunit of Freeside’s security system. Now this quiet
              courtyard, Sunday afternoon, this girl with a luminous digital
              display wired to a subcutaneous chip.
            </Text>
            <Text caption gray height={20}>
              He woke and found her stretched beside him in the puppet place had
              been a subunit of Freeside’s security system. Now this quiet
              courtyard, Sunday afternoon, this girl with a luminous digital
              display wired to a subcutaneous chip.
            </Text>
            <Text
              caption
              gray
              height={22}
              style={{paddingBottom: sizes.paddingBottomScroll}}>
              That was Wintermute, manipulating the lock the way it had
              manipulated the drone micro and the dripping chassis of a
              skyscraper canyon. He’d waited in the tunnel’s ceiling.
            </Text>
          </ScrollView>
          <Button gradient onPress={() => changeShowTerm(false)}>
            <Text center white>
              I understand
            </Text>
          </Button>
        </Block>
      </Modal>
    );
  };

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
        extraDate={showTerm}
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
      <Block center middle flex={0.4}>
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
        <Button
          gradient
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text center semibold white>
            Login
          </Text>
        </Button>
        <Button
          shadow
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text center semibold>
            Signup
          </Text>
        </Button>
        <Button
          onPress={() => {
            changeShowTerm(true);
          }}>
          <Text center caption gray>
            Terms of service
          </Text>
        </Button>
      </Block>
      {renderTermsService()}
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
