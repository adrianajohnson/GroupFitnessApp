import React from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, ListView, TouchableHighlight, TouchableOpacity, TextInput, ImageBackground} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const data = [ 
    {
      class: 'CARDIO BLAST',
      description: 'Prepare to sweat with forms of cardio ranging from cycling, rowing, using BOSUs, jump ropes, and various other pieces of equipment. The sky is the limit with this class! If you like variety, this class is for you!'
    },
    {
      class: 'KICKBOXING',
      description: 'Kick and punch towards your goals. Juice up speed, strength, and agility with this intense and fun class. A high energy blend of kicks and punches built into combinations and set to upbeat music. This “kick-butt” workout is a great blend of martial arts, boxing, and cardio.'
    },
    {
      class: 'THROWDOWN THURSDAY SPINNING',
      description: 'Two of your favorite artists will battle it out every Thursday. Artists will face each other song by song against their peers, rivals, or frenemies in this high-energy, interval-style Spinning® class. Past battles have included Katy Perry and Taylor Swift, and Madonna and George Michael. Get ready to sweat, sing, and have a great time!'
    },
    {
      class: 'ZUMBA',
      description: 'Zumba fuses hypnotic Latin rhythms and easy to follow moves to create a dynamic workout system that will blow you away. The routines feature interval training sessions where fast and slow rhythms and resistance training are combined to tone and sculpt your body.'
    },
    {
      class: 'INDO-ROW',
      description: 'Join us for this unique indoor rowing workout where you will learn proper body mechanics of rowing by using your lower body, core and upper body to break a sweat while having fun. You will work in teams, with a partner, and as one crew to provide a great overall body workout. Both seasoned rowers and those who have never put an oar in the water are welcome to Indo-Row®. This class is perfect for all fitness levels. Come see why they call this the Perfect Calorie Burn!'
    },
    {
      class: 'INDO-ROW AND ABS',
      description: 'Try this unique and fun cardio workout! The pace and energy of this class is perfect for ALL fitness levels. Seasoned rowers and those new to rowing will sync together as one, motivated by teamwork, the euphoria of working hard with other people and super, awesome tunes. This workout will go by quickly...only 30 minutes of rowing then 15 minutes of core strengthening exercises. You will leave this class feeling empowered and ready for more. Dont be shy, space is limited!'
    },
    {
      class: 'SHOCKWAVE',
      description: 'Dubbed “the most efficient total-body workout in the world,” ShockWave is extreme cross-training at its best. This circuit challenge uses WaterRower machines to provide short-burst, high-intensity, calorie burning intervals along with functional strength and sculpting stations designed to target the legs, core, and arms.'
    },
    {
      class: 'SILVERNEAKERS CLASSIC',
      description: 'The classes program is designed to improve agility, balance, coordinator and incorporates daily living activities to improve overall health and well-being.'
    },
    {
      class: 'SILVERSNEAKERS CIRCUIT',
      description: 'Combine fun with fitness to increase your cardiovascular and muscular endurance power with a standing circuit workout. Upper-body strength work with hand-held weights, elastic tubing with handles, and a SilverSneakers® ball, alternating low-impact aerobics choreography. A chair is used for standing support, stretching, and relaxation exercises.'
    },
    {
      class: 'SILVERSNEAKERS YOGA',
      description: 'Throughout the class participants will focus on poses and posture to improve breathing, flexibility, balance, muscular strength and endurance, and joint range of motion.'
    },
    {
      class: 'VINYASA YOGA 1',
      description: 'This class focuses on the alignment/form of individual postures. Basic postures are held for longer periods of time to explore the refinements of aligning the body, and the class usually includes a restorative posture. Anyone new to yoga or wishing to explore the basics in more detail in a slow flowing yoga class will find Vinyasa Yoga 1 a good starting point.'
    },
    {
      class: 'VINYASA YOGA 2',
      description: 'This class introduces more sun salutations and more challenging postures than Vinyasa Yoga 1. It can also include an alignment segment focusing on one posture or a featured emphasis among several postures. Prior yoga experience useful but not needed. Suitable for people who are moderately fit.'
    },
    {
      class: 'VINYASA YOGA 3',
      description: 'This class is a vigorous practice that builds on the other Vinyasa classes and involves more complicated sequences and more challenging arm balances and inversions. Prior yoga experience is highly recommended.'
    },
    {
      class: 'YOGA PILATES',
      description: 'This class combines the best of Pilates and Vinyasa Yoga to provide both the strength, flexibility, and balance that yoga develops along with the isolated core work that Pilates offers. Prior experience in yoga or pilates is recommended.'
    },
    {
      class: 'BOOTCAMP',
      description: 'Workouts are designed to improve your overall fitness with exercises meant challenge your strength, cardiovascular ability, flexibility, agility, and endurance. Bootcamp will utilize different exercise equipment, including your own body. This total body workout will leave you feeling like you have accomplished something great!'
    },
    {
      class: 'KETTLEBELL',
      description: 'In this 30 minute class you will learn basic movements and compound exercises to build functional strength and muscular endurance, in addition to enhancing your mobility and metabolic conditioning. This class is challenging but accessible to all levels of fitness. No previous kettlebell experience is required.'
    },
    {
      class: 'TRX TOTAL BODY',
      description: 'Born in the Navy SEALs and one of the hottest pieces of equipment in the fitness industry today, TRX Suspension Training® is a revolutionary method of leveraged bodyweight exercise to develop strength, balance, flexibility, and core stability simultaneously. Be in control of the intensity by adjusting your body position to increase or decrease resistance and work your body in a while new way. No previous experience necessary.'
    },
    {
      class: 'HARD CORE ABS',
      description: '20 minutes only. Feel like you can’t do another sit-up? Bend, twist, and plank you way to a stronger core and six-pack abs!'
    },
    {
      class: 'TABATA BOOTCAMP',
      description: 'Based on the popular Tabata training practice, this high-intensity interval training class (HIIT) involves a repeating pattern of 20 seconds of maximum cardio work followed by 10 seconds of rest. A wide-array of exercises are included that can be modified to accommodate all fitness levels. Get ready to sweat and push it to the next max!'
    },
    {
      class: 'TOTAL BODY TONE',
      description: 'This full body, non-aerobic class is designed to improve muscular strength and endurance using body bars, BOSU balance trainers, dumbbells, stability balls, resistance tubes and more! Modifications will be given to accommodate all fitness levels.'
    },


]

export default class DescriptionScreen extends React.Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state={
      dataSource: ds.cloneWithRows(data),
      text: '',
    }}
  static navigationOptions = {
    title: 'Class Descriptions',
  };

  SearchFilterFunction(text) {
    const newData = data.filter(function(item){
      const classData = item.class.toUpperCase()
      const descriptionData = item.description.toUpperCase()
      const textData = text.toUpperCase()
        return classData.indexOf(textData) > -1 || descriptionData.indexOf(textData) > -1
    })
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newData),
      text: text
    })
  }

  renderRow(rowData){
    return (
        <TouchableHighlight>
                    <View style={styles.classGroup}>
                      <Text style={styles.class}>{rowData.class}</Text>
                        <Text style={styles.description}>{rowData.description}</Text>
                    </View>
        </TouchableHighlight>
    )
}

render() {
  return (
  <View style={styles.container}>
      <View style={styles.searchContainer}>
      <Ionicons name= "ios-search" size={28}/>
      <TextInput style={styles.textInput}
        onChangeText={(text) => this.SearchFilterFunction(text)}
        value={this.state.text}
        placeholder="     Search classes"
        />
        </View>
      <ListView 
        enableEmptySections={true}
        renderRow={this.renderRow.bind(this)}
        dataSource={this.state.dataSource}
      />
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
    paddingTop: 10
  },
  classGroup: {
    borderWidth: 1,
    borderRadius: 1,
    margin: 10,
    padding: 15, 
    borderRadius: 10,
    borderColor: 'black',
  },
  class: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 5,
  },
  description: {
    fontSize: 14,
    paddingBottom: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
});
