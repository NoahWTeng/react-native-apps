import React, {useState} from 'react';
import {Image, StyleSheet, Modal, ScrollView} from 'react-native';
import {Block, Typography as Text, Button} from '../components';

import {COLORS, icons, SIZES, servers} from '../constants';

export const Vpn = () => {
  const [state, changeState] = useState({
    show: false,
    country: null,
    automatic: {
      name: 'Automatic',
      icon: icons.automatic,
    },
    connect: false,
  });

  const renderServer = () => {
    return (
      <Block row center middle>
        <Image source={state.automatic.icon} />
        <Text style={{marginHorizontal: 20}}>{state.automatic.name}</Text>
        <Image source={icons.dropdown} />
      </Block>
    );
  };

  const renderServers = () => {
    const {show, server, automatic} = state;
    const connection = server || automatic;

    return (
      <Modal visible={show} animationType="slide" transparent={true}>
        <Block bottom flex shadow>
          <Block color="white" middle padding={[SIZES.padding, 0]}>
            <Text subtitle center gray>
              Pick your Server
            </Text>
            <ScrollView>
              {servers.map((item) => {
                const isConnected = connection.name === item.name;
                const isChecked = icons[isConnected ? 'checked' : 'unchecked'];
                return (
                  <Button
                    transparent
                    key={`server-${item.name}`}
                    onPress={() =>
                      changeState((s) => ({
                        ...s,
                        show: false,
                        automatic: {name: item.name, icon: item.icon},
                      }))
                    }>
                    <Block
                      row
                      center
                      space="between"
                      margin={[SIZES.padding, SIZES.padding]}>
                      <Block row center flex>
                        <Image source={item.icon} />
                        <Text style={{paddingLeft: 10}}>{item.name}</Text>
                      </Block>
                      <Image source={isChecked} />
                    </Block>
                  </Button>
                );
              })}
            </ScrollView>
          </Block>
        </Block>
      </Modal>
    );
  };

  return (
    <Block flex color={COLORS.white}>
      <Block center middle flex>
        <Block style={{marginBottom: SIZES.base * 2}}>
          <Button shadow style={styles.bottomConnected}>
            <Block row center flex>
              <Text caption>
                {state.connect ? 'Connected' : 'Disconnected'}
              </Text>
              <Block
                style={{
                  ...styles.dot,
                  backgroundColor: state.connect
                    ? COLORS.secondary
                    : COLORS.tertiary,
                }}
              />
            </Block>
          </Button>
        </Block>
        <Block>
          <Image source={state.connect ? icons.online : icons.offline} />
        </Block>
        <Block style={{marginTop: SIZES.base * 2}}>
          <Button
            style={state.connect ? styles.disconnected : styles.connectNow}
            onPress={() => changeState((s) => ({...s, connect: !s.connect}))}>
            <Text caption bold white={!state.connect}>
              {state.connect ? 'DISCONNECTED ' : 'CONNECT NOW'}
            </Text>
          </Button>
        </Block>
      </Block>
      <Block center middle color="white" shadow style={styles.servers}>
        <Button onPress={() => changeState((s) => ({...s, show: true}))}>
          {renderServer()}
        </Button>
      </Block>
      {renderServers()}
    </Block>
  );
};

const styles = StyleSheet.create({
  bottomConnected: {
    paddingHorizontal: SIZES.base * 1.5,
    borderRadius: SIZES.radius * 5,
  },
  dot: {
    height: 8,
    width: 8,
    marginLeft: 6,
    borderRadius: 50,
  },
  disconnected: {
    borderRadius: SIZES.radius * 5,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: SIZES.base * 2.5,
  },
  servers: {
    width: SIZES.width,
    height: SIZES.base * 3,
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.05,
    shadowRadius: SIZES.base / 2,
  },
  connectNow: {
    borderRadius: SIZES.radius * 5,
    paddingHorizontal: SIZES.base * 2.5,
    backgroundColor: COLORS.primary,
  },
});
