import React from 'react';
import PropTypes from 'prop-types';

import {View, Text} from 'react-native';

export function Album({album}) {
  console.log('album', album);
  return (
    <View>
      <Text>Album</Text>
    </View>
  );
}

Album.propTypes = {
  album: PropTypes.object.isRequired,
};
