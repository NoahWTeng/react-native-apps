import React, {useState} from 'react';
import {Image, ScrollView, TextInput} from 'react-native';
import Slider from 'react-native-slider';
import {
  Block,
  Typography as Text,
  Button,
  Switches as Switch,
  Divider,
} from '../../components';
import {styles} from './styles';
import {profile, colors, sizes} from '../../constants';

export function Setting() {
  const [state, changeState] = useState({
    budget: 850,
    monthly: 1700,
    notifications: true,
    newsletter: false,
    editing: null,
    profile,
  });

  const handleEdit = (name, text) => {
    const {profile} = state;
    profile[name] = text;

    changeState((s) => ({...s, profile}));
  };

  const toggleEdit = (name) => {
    const {editing} = state;
    changeState((s) => ({...s, editing: !editing ? name : null}));
  };

  const renderEdit = (name) => {
    const {profile, editing} = state;

    if (editing === name) {
      return (
        <TextInput
          defaultValue={profile[name]}
          onChangeText={(text) => handleEdit([name], text)}
        />
      );
    }

    return <Text bold>{profile[name]}</Text>;
  };

  return (
    <Block color="white">
      <Block flex={false} row center space="between" style={styles.header}>
        <Text h1 bold>
          Settings
        </Text>
        <Button>
          <Image source={profile.avatar} style={styles.avatar} />
        </Button>
      </Block>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Block style={styles.inputs}>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
            <Block>
              <Text gray2 style={{marginBottom: 10}}>
                Username
              </Text>
              {renderEdit('username')}
            </Block>
            <Text medium secondary onPress={() => toggleEdit('username')}>
              {state.editing === 'username' ? 'Save' : 'Edit'}
            </Text>
          </Block>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
            <Block>
              <Text gray2 style={{marginBottom: 10}}>
                Location
              </Text>
              {renderEdit('location')}
            </Block>
            <Text medium secondary onPress={() => toggleEdit('location')}>
              {state.editing === 'location' ? 'Save' : 'Edit'}
            </Text>
          </Block>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
            <Block>
              <Text gray2 style={{marginBottom: 10}}>
                E-mail
              </Text>
              <Text bold>{profile.email}</Text>
            </Block>
          </Block>
        </Block>

        <Divider margin={[sizes.base, sizes.base * 2]} />

        <Block style={styles.sliders}>
          <Block margin={[10, 0]}>
            <Text gray2 style={{marginBottom: 10}}>
              Budget
            </Text>
            <Slider
              minimumValue={0}
              maximumValue={1000}
              style={{height: 19}}
              thumbStyle={styles.thumb}
              trackStyle={{height: 6, borderRadius: 6}}
              minimumTrackTintColor={colors.secondary}
              maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
              value={state.budget}
              onValueChange={(value) =>
                changeState((s) => ({...s, budget: value}))
              }
            />
            <Text caption gray right>
              $1,000
            </Text>
          </Block>
          <Block margin={[10, 0]}>
            <Text gray2 style={{marginBottom: 10}}>
              Monthly Cap
            </Text>
            <Slider
              minimumValue={0}
              maximumValue={5000}
              style={{height: 19}}
              thumbStyle={styles.thumb}
              trackStyle={{height: 6, borderRadius: 6}}
              minimumTrackTintColor={colors.secondary}
              maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
              value={state.monthly}
              onValueChange={(value) =>
                changeState((s) => ({
                  ...s,
                  monthly: value,
                }))
              }
            />
            <Text caption gray right>
              $5,000
            </Text>
          </Block>
        </Block>

        <Divider />

        <Block style={styles.toggles}>
          <Block
            row
            center
            space="between"
            style={{marginBottom: sizes.base * 2}}>
            <Text gray2>Notifications</Text>
            <Switch
              value={state.notifications}
              onValueChange={(value) =>
                changeState((s) => ({...s, notifications: value}))
              }
            />
          </Block>

          <Block
            row
            center
            space="between"
            style={{marginBottom: sizes.base * 2}}>
            <Text gray2>Newsletter</Text>
            <Switch
              value={state.newsletter}
              onValueChange={(value) =>
                changeState((s) => ({...s, newsletter: value}))
              }
            />
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
}
