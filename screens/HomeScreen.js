import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Group Fitness',
  };

  render() {
    // placing images on the homescreen
    return (
      <View>
        <ScrollView>
        <Image
          source={{uri:'http://miamioh.edu/campus-services/_files/images/recreation/fitness/group-fitness-workshops/ballet-barre-spr18.jpg'}}
          style={styles.welcomeImage}
        />
        <Image
          source={{uri: 'http://miamioh.edu/campus-services/_files/images/recreation/fitness/group-fitness-workshops/lifting-ladies-300x300.jpg'}}
          style={styles.welcomeImage}
        />
        <Image
          source={{uri:'http://miamioh.edu/campus-services/_files/images/recreation/fitness/group-fitness-workshops/fundamentals-of-yoga-300x300.jpg'}}
          style={styles.welcomeImage}
        />
        <Image
          source={{uri:'http://miamioh.edu/campus-services/_files/images/recreation/fitness/group-fitness-workshops/chestnut-on-ramp-workshop-300x300.jpg'}}
          style={styles.welcomeImage}
        />
        <View style={styles.instagramContainer}>
            <TouchableOpacity onPress={this._InstagramPress}>
              <Image 
                source = {{uri: 'https://instagram-brand.com/wp-content/uploads/2016/11/app-icon2.png'}}
                style={styles.instagramIcon}
              />
              <Text style={styles.instagramLinkText}>Follow us on Instagram</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
    );
  }

  // function to navigate to instagram account on press
  _InstagramPress = () => {
    WebBrowser.openBrowserAsync('https://www.instagram.com/miamiuniversityfitness/');
  };
}

// styling for components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
    paddingTop: 40
  },
  welcomeImage: {
    flex: 1,
    alignSelf: 'center',
    width: 400,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  instagramIcon: {
    alignSelf: 'center',
    width: 40,
    height: 40,
  }, 
  instagramContainer: {
    marginTop: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  instagramLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
