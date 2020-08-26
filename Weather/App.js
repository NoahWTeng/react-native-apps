import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import {weatherData} from './weatherData';

function App() {
  const [weather, setWeather] = React.useState(weatherData);

  const slides = weather.map((weather, index) => {
    const hourView = weather.hours.map((hourElem, hourIndex) => {
      return (
        <View key={hourElem.key}>
          <Text>{hourElem.time}</Text>
          <Icon name={hourElem.icon} size={25}></Icon>
          <Text>{hourElem.degree}</Text>
        </View>
      );
    });

    const dayView = weather.days.map((dayElem, dayIndex) => {
      return (
        <View key={dayElem.key}>
          <View>
            <Text>{dayElem.day}</Text>
          </View>
          <View>{/* <Icon name={dayElem.icon} size={25}></Icon> */}</View>
          <View>
            <Text>{dayElem.high}</Text>
            <Text>{dayElem.low}</Text>
          </View>
        </View>
      );
    });

    return (
      <View key={weather.key} style={styles.container}>
        <ImageBackground style={styles.image} source={weather.bg}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.headInfo}>
              <Text style={styles.city}>{weather.city}</Text>
              <Text style={styles.abs}>{weather.abs}</Text>
              <Text style={styles.degree}>{weather.degree}</Text>
              <Text style={styles.circle}>°</Text>
            </View>
            <View style={styles.withinDay}>
              <View style={styles.withinDayGeneral}>
                <View style={styles.withinDayHead}>
                  <Text style={styles.withinDayWeek}>{weather.today.week}</Text>
                  <Text style={styles.withinDayDay}>{weather.today.day}</Text>
                </View>
                <View style={styles.withinDayTail}>
                  <Text style={styles.withinDayHigh}>{weather.today.high}</Text>
                  <Text
                    style={
                      weather.night
                        ? styles.withinDayLowNight
                        : styles.withinDayLow
                    }>
                    {weather.today.low}
                  </Text>
                </View>
              </View>
            </View>
            <ScrollView horizontal={true}>
              <View style={styles.withinDayHours}>{hourView}</View>
            </ScrollView>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  });

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Swiper
        showsButtons={false}
        paginationStyle={{
          bottom: 25,
          borderTopColor: 'rgba(255,255,255,0.8)',
        }}
        dot={
          <View
            style={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              width: 6,
              height: 6,
              borderRadius: 3,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: 'rgba(255,255,255,0.5)',
              width: 6,
              height: 6,
              borderRadius: 3,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }>
        {slides}
      </Swiper>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    paddingTop: 45,
  },
  headInfo: {
    flex: 1,
    backgroundColor: 'red',
  },
  withinDay: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export default App;
