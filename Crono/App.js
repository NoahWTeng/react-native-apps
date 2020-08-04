import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import dayjs from 'dayjs';

const Stack = createStackNavigator();

function WatchFace({totalTime, sectionTime}) {
  return (
    <View style={styles.watchContainer}>
      <View style={styles.sectionTimeContainer}>
        <Text style={styles.sectionTime}>{sectionTime}</Text>
      </View>
      <View style={styles.totalTimeContainer}>
        <Text style={styles.totalTime}>{totalTime}</Text>
      </View>
    </View>
  );
}

function WatchControl({addRecord, clearRecord, startWatch, stopWatch}) {
  const [state, setState] = React.useState({
    watchOn: false,
    startBtnText: 'Start',
    startBtnColor: '#60B644',
    stopBtnText: 'Clear',
    underlayColor: '#fff',
  });

  const startedWatch = () => {
    if (!state.watchOn) {
      startWatch();
      setState({
        startBtnText: 'Stop',
        startBtnColor: '#ff0044',
        stopBtnText: 'Add',
        underlayColor: '#eee',
        watchOn: true,
      });
    } else {
      stopWatch();
      setState({
        startBtnText: 'Start',
        startBtnColor: '#60B644',
        stopBtnText: 'Clear',
        underlayColor: '#eee',
        watchOn: false,
      });
    }
  };

  const addedRecord = () => {
    if (state.watchOn) {
      addRecord();
    } else {
      clearRecord();
      setState((s) => ({
        ...s,
        stopBtnText: 'Clear',
      }));
    }
  };

  return (
    <View style={[styles.row, styles.watchControlContainer]}>
      <View>
        <TouchableHighlight
          style={styles.button}
          underlayColor={state.underlayColor}
          onPress={addedRecord}>
          <Text style={styles.addBtn}>{state.stopBtnText}</Text>
        </TouchableHighlight>
      </View>
      <View>
        <TouchableHighlight
          style={styles.button}
          underlayColor="#eee"
          onPress={startedWatch}>
          <Text style={[styles.startBtn, {color: state.startBtnColor}]}>
            {state.startBtnText}
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

function WatchRecord({record}) {
  return (
    <View style={styles.watchRecordContainer}>
      <Text style={styles.recordText}>TIMES</Text>
      <FlatList
        data={record}
        renderItem={({item}) => {
          return (
            <View style={[styles.flatView, styles.row]}>
              <View style={styles.titleFlat}>
                <Text style={styles.textFlat}>{item.title}</Text>
              </View>
              <View style={styles.timeFlat}>
                <Text style={styles.textFlat}>{item.time}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
}

function Base() {
  const [state, setState] = React.useState({
    delay: null,
    intialTime: 0,
    currentTime: 0,
    recordTime: 0,
    timeAccumulation: 0,
    totalCounting: 0,
    recordCounter: 0,
    totalTime: '00:00.00',
    sectionTime: '00:00.000',
    record: [],
  });

  React.useEffect(() => {
    if (state.delay !== null) {
      let interval = setInterval(() => {
        setState((s) => ({...s, currentTime: new Date().getTime()}));
        let countingTime =
          state.timeAccumulation + state.currentTime - state.initialTime;

        setState((s) => ({...s, totalCounting: countingTime}));

        let minute = dayjs(countingTime).minute();
        let second = dayjs(countingTime).second();
        let milSecond = Math.floor(dayjs(countingTime).millisecond() / 10);
        let seccountingTime = countingTime - state.recordTime;
        let secminute = dayjs(seccountingTime).minute();
        let secsecond = dayjs(seccountingTime).second();
        let secmilSecond = dayjs(seccountingTime).millisecond();

        setState((s) => ({
          ...s,
          totalTime:
            (minute < 10 ? '0' + minute : minute) +
            ':' +
            (second < 10 ? '0' + second : second) +
            '.' +
            (milSecond < 10 ? '0' + milSecond : milSecond),
          sectionTime:
            (secminute < 10 ? '0' + secminute : secminute) +
            ':' +
            (secsecond < 10 ? '0' + secsecond : secsecond) +
            '.' +
            (secmilSecond < 10 ? '0' + secmilSecond : secmilSecond),
        }));
      }, state.delay);

      return () => clearInterval(interval);
    }
  }, [
    state.countingTime,
    state.currentTime,
    state.delay,
    state.initialTime,
    state.recordTime,
    state.timeAccumulation,
  ]);

  const addRecord = () => {
    let {recordCounter, record} = state;

    recordCounter++;

    record.unshift({
      title: 'Time #' + recordCounter,
      time: state.sectionTime,
    });

    setState((s) => ({
      ...s,
      recordTime:
        state.timeAccumulation + state.currentTime - state.initialTime,
      recordCounter: recordCounter,
      record: record,
    }));
  };

  const startWatch = () => {
    setState((s) => ({
      ...s,
      delay: 10,
      initialTime: new Date().getTime(),
    }));
  };

  const stopWatch = () => {
    setState((s) => ({...s, delay: null, timeAccumulation: s.totalCounting}));
  };

  const clearRecord = () => {
    setState({
      delay: null,
      intialTime: 0,
      currentTime: 0,
      recordTime: 0,
      timeAccumulation: 0,
      totalTime: '00:00.00',
      sectionTime: '00:00.000',
      recordCounter: 0,
      record: [],
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <WatchFace totalTime={state.totalTime} sectionTime={state.sectionTime} />
      <WatchControl
        addRecord={addRecord}
        clearRecord={clearRecord}
        startWatch={startWatch}
        stopWatch={stopWatch}
      />
      <WatchRecord record={state.record} />
    </SafeAreaView>
  );
}

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen name="Cronometer" component={Base} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  watchContainer: {
    flex: 4,
    backgroundColor: 'white',
  },
  sectionTimeContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  sectionTime: {
    fontWeight: '100',
    paddingRight: 100,
    fontSize: 20,
  },
  totalTimeContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalTime: {
    fontSize: 70,
    fontWeight: '100',
  },
  watchControlContainer: {
    flex: 4,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  watchRecordContainer: {
    flex: 12,
    backgroundColor: 'white',
  },
  button: {
    width: 85,
    height: 85,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  addBtn: {
    fontSize: 18,
    color: '#a6a6a6',
  },
  startBtn: {
    fontSize: 18,
    color: '#a6a6a6',
  },
  recordText: {
    margin: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  textFlat: {
    textAlign: 'center',
    fontSize: 20,
  },

  flatView: {
    borderBottomWidth: 1,
  },
  titleFlat: {
    flex: 1,
    padding: 20,
  },
  timeFlat: {
    flex: 1,
    padding: 20,
  },
});

export default App;
