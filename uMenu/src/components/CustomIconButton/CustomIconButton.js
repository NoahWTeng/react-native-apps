import React from 'react';
import {IconFill, IconOutline} from '@ant-design/icons-react-native';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export function CustomIconButton({fill = false, name, size, color}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Location')}
      activeOpacity={0.75}
      style={{alignItems: 'center'}}>
      {fill ? (
        <IconFill name={name} size={size} color={color} />
      ) : (
        <IconOutline name={name} size={size} color={color} />
      )}
    </TouchableOpacity>
  );
}
