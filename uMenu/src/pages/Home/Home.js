import React from 'react';
import {View, Text, ScrollView, RefreshControl} from 'react-native';
import {variables, colors} from '../../styles';

import {styles} from './styles';

const wait = (timeout) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });

export function Home() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(variables.scrollRefreshTimeOut).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          title={refreshing ? 'loading' : 'done'}
          titleColor={colors.primary}
        />
      }>
      <Text>Pull down to see RefreshControl indicator</Text>
    </ScrollView>
  );
}
