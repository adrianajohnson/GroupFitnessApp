import React from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, TextInput, SectionList} from 'react-native';

export default class PricingScreen extends React.Component {
  static navigationOptions = {
    title: 'Pricing',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <Text style={styles.membershipStatus}>MEMBER</Text>
        <Text style={styles.passType}>single class: $15</Text>
        <Text style={styles.passType}>recurring monthly: $40</Text>
        <Text style={styles.passType}>spring 2018 semester: $130</Text>
        <Text style={styles.passType}>unlimited academic year 2017/2018: $230</Text>
        <Text style={styles.passType}>12 month: $380</Text>
        <Text style={styles.passType}>punch passes: $60</Text>
        <Text style={styles.membershipStatus}>NONMEMBER</Text>
        <Text style={styles.passType}>single class: $15</Text>
        <Text style={styles.passType}>recurring monthly: $55</Text>
        <Text style={styles.passType}>spring 2018 semester: $205</Text>
        <Text style={styles.passType}>unlimited academic year 2017/2018: $315</Text>
        <Text style={styles.passType}>12 month: $505</Text>
        <Text style={styles.passType}>punch passes: $75</Text>
        <Text style={styles.membershipStatus}>SILVERSNEAKERS</Text>
        <Text style={styles.passType}>single class: $15</Text>
        <Text style={styles.passType}>recurring monthly: $25</Text>
        <Text style={styles.passType}>spring 2018 semester: $60</Text>
        <Text style={styles.passType}>12 month: $150</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  membershipStatus: {
    fontWeight: 'bold',
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 1,
    margin: 40,
    textAlign: 'center',
    borderRadius: 10,
  },
  passType: {
    fontSize: 14,
    padding: 5,
    textAlign: 'center',
  },
});
