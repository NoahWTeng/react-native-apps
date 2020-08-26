import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export function AddReview({navigation}) {
  const [search, setSearch] = React.useState(null);
  const [rating, setRating] = React.useState(0);
  const [review, setReview] = React.useState(null);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.close}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon name="close" color="blue" size={30} />
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.reviewTitle}>Add Review</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Name (optional)"
          placeholderTextColor="#8c8c8c"
          onChangeText={(text) => {
            setSearch(text);
          }}
          value={search}
        />
        <Text style={styles.rate}>Your Rating:</Text>
        <View style={styles.starContainer}>
          {[1, 2, 3, 4, 5].map((i) => {
            return (
              <TouchableOpacity
                key={i}
                style={styles.star}
                onPress={() => setRating(i)}>
                <Icon
                  name="star"
                  color={rating >= i ? '#FFD64C' : '#CCCCCC'}
                  size={40}
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <TextInput
          style={{
            height: 100,
            backgroundColor: '#f0f0f0',
            width: '90%',
            padding: 10,
          }}
          placeholder="Review"
          placeholderTextColor="#8c8c8c"
          onChangeText={(text) => {
            setReview(text);
          }}
          value={review}
          multiline={true}
          numberOfLines={5}
        />
        <TouchableOpacity
          onPress={() => alert('Review submit')}
          style={{
            backgroundColor: '#23448c',
            padding: 10,
            margin: 10,
          }}>
          <Text style={{color: 'white'}}>Submit Review</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  close: {
    padding: 5,
  },
  addReview: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  reviewTitle: {
    fontSize: 25,
    margin: 10,
  },
  textInput: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    width: '90%',
    margin: 10,
  },
  rate: {fontSize: 20, margin: 10},
  starContainer: {
    flexDirection: 'row',
  },
  star: {
    margin: 10,
  },
});
