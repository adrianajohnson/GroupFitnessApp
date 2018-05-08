import React from 'react';
import { ScrollView, StyleSheet, Text, ListView, View, FlatList, TouchableHighlight, TextInput, SectionList, TouchableOpacity, Button, Alert, Platform} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Modal from "react-native-modal";

// descriptions for each class
const CardioBlast = 'Prepare to sweat with forms of cardio ranging from cycling, rowing, using BOSUs, jump ropes, and various other pieces of equipment. The sky is the limit with this class! If you like variety, this class is for you!'
const Spinning = 'The Spinning® program is the original and most popular group cycling class. A motivating group environment, intense training and music that begs your legs to pedal. You’ll find yourself having a blast while you ride your way to a leaner, stronger body. Towel and water bottle required for all classes. New patrons are encouraged to arrive at least 10 minutes prior to the start of class to go over correct bike set-up with the instructor.'
const Kickboxing = 'Kick and punch towards your goals. Juice up speed, strength, and agility with this intense and fun class. A high energy blend of kicks and punches built into combinations and set to upbeat music. This “kick-butt” workout is a great blend of martial arts, boxing, and cardio.'
const ThrowdownThursdaySpinning = 'Two of your favorite artists will battle it out every Thursday. Artists will face each other song by song against their peers, rivals, or frenemies in this high-energy, interval-style Spinning® class. Past battles have included Katy Perry and Taylor Swift, and Madonna and George Michael. Get ready to sweat, sing, and have a great time!'
const Zumba = 'Zumba fuses hypnotic Latin rhythms and easy to follow moves to create a dynamic workout system that will blow you away. The routines feature interval training sessions where fast and slow rhythms and resistance training are combined to tone and sculpt your body.'
const IndoRow = 'Join us for this unique indoor rowing workout where you will learn proper body mechanics of rowing by using your lower body, core and upper body to break a sweat while having fun. You will work in teams, with a partner, and as one crew to provide a great overall body workout. Both seasoned rowers and those who have never put an oar in the water are welcome to Indo-Row®. This class is perfect for all fitness levels. Come see why they call this the Perfect Calorie Burn!'
const IndoRowAndAbs = 'Try this unique and fun cardio workout! The pace and energy of this class is perfect for ALL fitness levels. Seasoned rowers and those new to rowing will sync together as one, motivated by teamwork, the euphoria of working hard with other people and super, awesome tunes. This workout will go by quickly...only 30 minutes of rowing then 15 minutes of core strengthening exercises. You will leave this class feeling empowered and ready for more. Dont be shy, space is limited!'
const Shockwave = 'Dubbed “the most efficient total-body workout in the world,” ShockWave is extreme cross-training at its best. This circuit challenge uses WaterRower machines to provide short-burst, high-intensity, calorie burning intervals along with functional strength and sculpting stations designed to target the legs, core, and arms.'
const SilverSnakersClassic = 'The classes program is designed to improve agility, balance, coordinator and incorporates daily living activities to improve overall health and well-being.'
const SilverSneakersCircuit = 'Combine fun with fitness to increase your cardiovascular and muscular endurance power with a standing circuit workout. Upper-body strength work with hand-held weights, elastic tubing with handles, and a SilverSneakers® ball, alternating low-impact aerobics choreography. A chair is used for standing support, stretching, and relaxation exercises.'
const SilverSneakersYoga = 'Throughout the class participants will focus on poses and posture to improve breathing, flexibility, balance, muscular strength and endurance, and joint range of motion.'
const VinyasaYoga1 = 'This class focuses on the alignment/form of individual postures. Basic postures are held for longer periods of time to explore the refinements of aligning the body, and the class usually includes a restorative posture. Anyone new to yoga or wishing to explore the basics in more detail in a slow flowing yoga class will find Vinyasa Yoga 1 a good starting point.'
const VinyasaYoga2 = 'This class introduces more sun salutations and more challenging postures than Vinyasa Yoga 1. It can also include an alignment segment focusing on one posture or a featured emphasis among several postures. Prior yoga experience useful but not needed. Suitable for people who are moderately fit.'
const VinyasaYoga3 = 'This class is a vigorous practice that builds on the other Vinyasa classes and involves more complicated sequences and more challenging arm balances and inversions. Prior yoga experience is highly recommended.'
const YogaPilates = 'This class combines the best of Pilates and Vinyasa Yoga to provide both the strength, flexibility, and balance that yoga develops along with the isolated core work that Pilates offers. Prior experience in yoga or pilates is recommended.'
const Bootcamp = 'Workouts are designed to improve your overall fitness with exercises meant challenge your strength, cardiovascular ability, flexibility, agility, and endurance. Bootcamp will utilize different exercise equipment, including your own body. This total body workout will leave you feeling like you have accomplished something great!'
const Kettlebell = 'In this 30 minute class you will learn basic movements and compound exercises to build functional strength and muscular endurance, in addition to enhancing your mobility and metabolic conditioning. This class is challenging but accessible to all levels of fitness. No previous kettlebell experience is required.'
const TRXTotalBody = 'Born in the Navy SEALs and one of the hottest pieces of equipment in the fitness industry today, TRX Suspension Training® is a revolutionary method of leveraged bodyweight exercise to develop strength, balance, flexibility, and core stability simultaneously. Be in control of the intensity by adjusting your body position to increase or decrease resistance and work your body in a while new way. No previous experience necessary.'
const HardCoreAbs = '20 minutes only. Feel like you can’t do another sit-up? Bend, twist, and plank you way to a stronger core and six-pack abs!'
const TabataBootCamp = 'Based on the popular Tabata training practice, this high-intensity interval training class (HIIT) involves a repeating pattern of 20 seconds of maximum cardio work followed by 10 seconds of rest. A wide-array of exercises are included that can be modified to accommodate all fitness levels. Get ready to sweat and push it to the next max!'
const TotalBodyTone = 'This full body, non-aerobic class is designed to improve muscular strength and endurance using body bars, BOSU balance trainers, dumbbells, stability balls, resistance tubes and more! Modifications will be given to accommodate all fitness levels.'

// array containing information for class schedule
const data = [
  {
    info: 'SUNDAY\n10:15-11:15 a.m.\nVinyasa Yoga 1\nRoom: B\nInstructor: Jill',
    description: VinyasaYoga1 ,
    className: 'Vinyasa Yoga 1',
  },
  {
    info: 'SUNDAY\n11:30 a.m.-12:15 p.m.\nTotal Body Tone\nRoom: A\nInstructor: Bri',
    description: TotalBodyTone,
    className: 'Total Body Tone',
  },
  {
    info: 'SUNDAY\n12:30-1:15 p.m.\nCardio Blast\nRoom: A\nInstructor: Bri',
    description: CardioBlast,
    className: 'Cardio Blast',
  },
  {
    info: 'SUNDAY\n4:30-5:30 p.m.\nVinyasa Yoga 3\nRoom: A\nInstructor: Scott',
    description: VinyasaYoga3,
    className: 'Vinyasa Yoga 3',
  },
  {
    info: 'MONDAY\n6:15-7:15 a.m.\nSpinning\nRoom: A\nInstructor: Shannon',
    description: Spinning,
    className: 'Spinning',
  },
  {
    info: 'MONDAY\n8:00-8:45 a.m.\nTotal Body Tone\nRoom: A\nInstructor: Maggie',
    description: TotalBodyTone,
    className: 'Total Body Tone',
  },
  {
    info: 'MONDAY\n8:00-9:00 a.m.\nVinyasa Yoga 2\nRoom: B\nInstructor: Holly',
    description: VinyasaYoga2,
    className: 'Vinyasa Yoga 2',
  },
  {
    info: 'MONDAY\n9:15-10:00 a.m.\nKettlebell\nRoom: X\nInstructor: Andrea',
    description: Kettlebell,
    className: 'Kettlebell',
  },
  {
    info: 'MONDAY\n9:15-10:15 a.m.\nSilverSneakers Yoga\nRoom: B\nInstructor: Holly',
    description: SilverSneakersYoga,
    className: 'SilverSneakers Yoga',
  },
  {
    info: 'MONDAY\n10:30-11:30 a.m.\nSilver Sneakers Classic\nRoom: B\nInstructor: Jean',
    description: SilverSnakersClassic,
    className: 'SilverSneakers Classic',
  },
  {
    info: 'MONDAY\n10:45-11:30 a.m.\nIndo-Row & Abs\nRoom: A\nInstructor: Kelly',
    description: IndoRowAndAbs,
    className: 'Indo-Row & Abs',
  },
  {
    info: 'MONDAY\n11:45 a.m.-12:30 p.m.\nTotal Body Tone\nRoom: A\nInstructor: Kelly',
    description: TotalBodyTone,
    className: 'Total Body Tone',
  },
  {
    info: 'MONDAY\n3:30-4:15 p.m.\nSpinning\nRoom: A\nInstructor: Tara',
    description: Spinning,
    className: 'Spinning',
  },
  {
    info: 'MONDAY\n4:30-5:15 p.m.\nBootcamp\nRoom: X\nInstructor: Audrey',
    description: Bootcamp,
    className: 'Bootcamp',
  },
  {
    info: 'MONDAY\n4:30-5:15 p.m.\nZumba\nRoom: B\nInstructor: Morgan',
    description: Zumba,
    className: 'Zumba',
  },
  {
    info: 'MONDAY\n5:00-5:45 p.m.\nSpinning\nRoom: A\nInstructor: Sam',
    description: Spinning,
    className: 'Spinning',
  },
  {
    info: 'MONDAY\n5:30-6:15 p.m.\nKettlebell\nRoom: X\nInstructor: Meg',
    description: Kettlebell,
    className: 'Kettlebell',
  },
  {
    info: 'MONDAY\n6:30-6:50 p.m.\nHard Core Abs\nRoom: X\nInstructor: Meg',
    description: HardCoreAbs,
    className: 'Hard Core Abs'  
  },
  {
    info: 'MONDAY\n6:45-7:45 p.m.\nVinyasa Yoga 1\nRoom: B\nInstructor: Kylie',
    description: VinyasaYoga1,
    className: 'Vinyasa Yoga 1',
  },
  {
    info: 'MONDAY\n7:00-7:45 p.m.\nTotal Body Tone\nRoom: X\nInstructor: Maddy',
    description: TotalBodyTone,
    className: 'Total Body Tone'
  },
  {
    info: 'TUESDAY\n6:15-6:50 a.m.\nIndo-Row\nRoom: A\nInstructor: Olivia',
    description: IndoRow,
    className: 'Indo-Row',
  },
  {
    info: 'TUESDAY\n7:00-7:45 a.m.\nTotal Body Tone\nRoom: A\nInstructor: Olivia',
    description: TotalBodyTone,
    className: 'Total Body Tone'
  },
  {
    info: 'TUESDAY\n8:00-8:45 a.m.\nSpinning\nRoom: A\nInstructor: Eric',
    description: Spinning,
    className: 'Spinning',
  },
  {
    info: 'TUESDAY\n8:00-9:00 a.m.\nYoga Pilates\nRoom: B\nInstructor: Holly',
    description: YogaPilates,
    className: 'Yoga Pilates',
  },
  {
    info: 'TUESDAY\n10:15-11:15 a.m.\nSilverSneakers Circuit\nRoom: B\nInstructor: Olivia',
    description: SilverSneakersCircuit,
    className: 'SilverSneakers Circuit',
  },
  {
    info: 'TUESDAY\n3:30-4:15 p.m.\nKickboxing\nRoom: B\nInstructor: Meg',
    description: Kickboxing,
    className: 'Kickboxing',
  },
  {
    info: 'TUESDAY\n4:30-5:15 p.m.\nTotal Body Tone\nRoom: A\nInstructor: Hannah',
    description: TotalBodyTone,
    className: 'Total Body Tone',
  },
  {
    info: 'TUESDAY\n4:30-5:15 p.m.\nZumba\nRoom: B\nInstructor: Morgan',
    description: Zumba,
    className: 'Zumba',
  },
  {
    info: 'TUESDAY\n5:00-5:45 p.m.\nTRX Total Body\nRoom: X\nInstructor: Lena',
    description: TRXTotalBody,
    className: 'TRX Total Body',
  },
  {
    info: 'TUESDAY\n5:30-6:30 p.m.\nVinyasa Yoga 1\nRoom: B\nInstructor: Katie W',
    description: VinyasaYoga1,
    className: 'Vinyasa Yoga 1',
  },
  {
    info: 'TUESDAY\n6:00-6:45 p.m.\nTabata Bootcamp\nRoom: X\nInstructor: Lena',
    description: TabataBootCamp,
    className: 'Tabata Bootcamp',
  },
  {
    info: 'TUESDAY\n6:30-7:15 p.m.\nSpinning\nRoom: A\nInstructor: Ellie',
    description: Spinning,
    className: 'Spinning',
  },
  {
    info: 'TUESDAY\n6:45-7:30 p.m.\nKickboxing\nRoom: B\nInstructor: Chloe',
    description: Kickboxing,
    className: 'Kickboxing',
  },
  {
    info: 'TUESDAY\n7:00-7:45 p.m.\nKettlebell\nRoom: X\nInstructor: Sara F.',
    description: Kettlebell,
    className: 'Kettlebell',
  },
  {
    info: 'TUESDAY\n7:30-8:15 p.m.\nTotal Body Tone\nRoom: A\nInstructor: Taylor',
    desctiption: TotalBodyTone,
    className: 'Total Body Tone',
  },
  {
    info: 'WEDNESDAY\n6:15-7:15 a.m.\nSpinning\nRoom: A\nInstructor: Holly',
    description: Spinning,
    className: 'Spinning',
  },
  {
    info: 'WEDNESDAY\n8:00-8:45 a.m.\nTabata Bootcamp\nRoom: A\nInstructor: Sarah W.',
    description: TabataBootCamp,
    className: 'Tabata Bootcamp',
  },
  {
    info: 'WEDNESDAY\n8:00-9:00 a.m.\nVinyasa Yoga 2\nRoom: B\nInstructor: Holly',
    description: VinyasaYoga2,
    className: 'Vinyasa Yoga 2',
  },
  {
    info: 'WEDNESDAY\n9:15-10:15 a.m.\nSilverSneakers Yoga\nRoom: B\nInstructor: Holly',
    description: SilverSneakersYoga,
    className: 'SilverSneakers Yoga',
  },
  {
    info: 'WEDNESDAY\n10:30-11:30 a.m.\nSilverSneakers Classic\nRoom: B\nInstructor: Jean',
    description: SilverSnakersClassic,
    className: 'SilverSneakers Classic',
  },
  {
    info: 'WEDNESDAY\n10:45-11:30 a.m.\nIndo-Row & Abs\nRoom: A\nInstructor: Kelly',
    description: IndoRowAndAbs,
    className: 'Indo-Row & Abs',
  },
  {
    info: 'WEDNESDAY\n11:45 a.m.-12:30 p.m.\nTotal Body Tone\nRoom: A\nInstructor: Kelly',
    description: TotalBodyTone,
    className: 'Total Body Tone',
  },
  {
    info: 'WEDNESDAY\n3:30-4:15 p.m.\nHip Hop Dance\nRoom: A\nInstructor: Alexis',
    description: 'No Description Found',
    className: 'Hip Hop Dance',
  },
  {
    info: 'WEDNESDAY\n4:30-5:15 p.m.\nCardio Blast\nRoom: A\nInstructor: Audrey',
    description: CardioBlast,
    className: 'Cardio Blast',
  },
  {
    info: 'WEDNESDAY\n5:00-5:45 p.m.\nTabata Bootcamp\nRoom: X\nInstructor: Kira',
    description: TabataBootCamp,
    className: 'Tabata Bootcamp',
  },
  {
    info: 'WEDNESDAY\n5:30-6:15 p.m.\nKickboxing\nRoom: A\nInstructor: Chloe',
    description: Kickboxing,
    className: 'Kickboxing',
  },
  {
    info: 'WEDNESDAY\n5:30-6:15 p.m.\nZumba\nRoom: B\nInstructor: Kellis',
    description: Zumba,
    className: 'Zumba',
  },
  {
    info: 'WEDNESDAY\n6:00-6:45 p.m.\nKettleBell\nRoom: B\nInstructor: Julia',
    description: Kettlebell,
    className: 'Kettlebell',
  },
  {
    info: 'WEDNESDAY\n6:30-7:15 p.m.\nSpinning\nRoom: A\nInstructor: Celcily',
    description: Spinning,
    className: 'Spinning',
  },
  {
    info: 'WEDNESDAY\n7:00-7:20 p.m.\nHard Core Abs\nRoom: X\nInstructor: Julia',
    description: HardCoreAbs,
    className: 'Hard Core Abs',
  },
  {
    info: 'WEDNESDAY\n7:30-8:15 p.m.\nZumba\nRoom: B\nInstructor: Mackenzie',
    description: Zumba,
    className: 'Zumba',
  },
  {
    info: 'WEDNESDAY\n7:30-8:15 p.m.\nTRX Total Body\nRoom: A\nInstructor: Melinda',
    description: TRXTotalBody,
    className: 'TRX Total Body',
  },
  {
    info: 'THURSDAY\n6:15-6:50 a.m.\nIndo-Row\nRoom: A\nInstructor: Julia',
    description: IndoRow,
    className: 'Indo-Row',
  },
  {
    info: 'THURSDAY\n7:15-7:45 a.m.\nTotal Body Tone\nRoom: A\nInstructor: Julia',
    description: TotalBodyTone,
    className: 'Total Body Tone',
  },
  {
    info: 'THURSDAY\n8:00-8:45 a.m.\nThrowdown Thursday Spinning\nRoom: A\nInstructor: Eric',
    description: ThrowdownThursdaySpinning,
    className: 'Throwdown Thursday Spinning',
  },
  {
    info: 'THURSDAY\n8:00-9:00 a.m.\nYoga Pilates\nRoom: B\nInstructor: Holly',
    description: YogaPilates,
    className: 'Yoga Pilates',
  },
  {
    info: 'THURSDAY\n10:15-11:15 a.m.\nSilverSneakers Circuit\nRoom: B\nInstructor: Lena',
    description: SilverSneakersCircuit,
    className: 'SilverSneakers Circuit',
  },
  {
    info: 'THURSDAY\n3:00-3:45 p.m.\nTabata Bootcamp\nRoom: A\nInstructor: Stephanie',
    description: TabataBootCamp,
    className: 'Tabata Bootcamp',
  },
  {
    info: 'THURSDAY\n4:00-4:45 p.m.\nTotal Body Tone\nRoom: A\nInstructor: Hannah',
    description: TotalBodyTone,
    className: 'Total Body Tone',
  },
  {
    info: 'THURSDAY\n4:00-4:45 p.m.\nKettlebell\nRoom: X\nInstructor: Abbey',
    description: Kettlebell,
    className: 'Kettlebell',
  },
  {
    info: 'THURSDAY\n5:00-5:45 p.m.\nSpinning\nRoom: A\nInstructor: Sam',
    description: Spinning,
    className: 'Spinning',
  },
  {
    info: 'THURSDAY\n5:00-5:45 p.m.\nTRX Total Body\nRoom: X\nInstructor: Lena',
    description: TRXTotalBody,
    className: 'TRX Total Body',
  },
  {
    info: 'THURSDAY\n6:00-6:45 p.m.\nTabata Bootcamp\nRoom: X\nInstructor: Lena',
    description: TabataBootCamp,
    className: 'Tabata Bootcamp',
  },
  {
    info: 'THURSDAY\n6:45-7:45 p.m.\nVinyasa Yoga 1\nRoom: B\nInstructor: Georgia',
    description: VinyasaYoga1,
    className: 'Vinyasa Yoga 1',
  },
  {
    info: 'THURSDAY\n7:00-7:45 p.m.\nTotal Body Tone\nRoom: X\nInstructor: Katie B.',
    description: TotalBodyTone,
    className: 'Total Body Tone',
  },
  {
    info: 'FRIDAY\n6:15-7:15 a.m.\nSpinning\nRoom: A\nInstructor: Holly',
    description: Spinning,
    className: 'Spinning',
  },
  {
    info: 'FRIDAY\n8:00-9:00 a.m.\nVinyasa Yoga 2\nRoom: B\nInstructor: Holly',
    description: VinyasaYoga2,
    className: 'Vinyasa Yoga 2',
  },
  {
    info: 'FRIDAY\n9:30-10:15 a.m.\nSpinning\nRoom: A\nInstructor: Sam',
    description: Spinning,
    className: 'Spinning',
  },
  {
    info: 'FRIDAY\n10:30-11:30 a.m.\nSilverSneakers Yoga\nRoom: B\nInstructor: Holly/Jill',
    description: SilverSneakersYoga,
    className: 'SilverSneakers Yoga',
  },
  {
    info: 'FRIDAY\n10:45-11:15 a.m.\nCardio Blast\nRoom: A\nInstructor: Kelly',
    description: CardioBlast,
    className: 'Cardio Blast',
  },
  {
    info: 'FRIDAY\n11:45 a.m.-12:30 p.m.\nTotal Body Tone\nRoom: A\nInstructor: Kelly',
    description: TotalBodyTone,
    className: 'Total Body Tone',
  },
  {
    info: 'FRIDAY\n4:30-5:15 p.m.\nKettlebell\nRoom: X\nInstructor: Bri',
    description: Kettlebell,
    className: 'Kettlebell'
  },
  {
    info: 'FRIDAY\n5:30-5:50 p.m.\nHard Core Abs\nRoom: X\nInstructor: Bri',
    description: HardCoreAbs,
    className: 'Hard Core Abs',
  },
  {
    info: 'FRIDAY\n5:30-6:15 p.m.\nZumba\nRoom: A\nInstructor: Kellis',
    description: Zumba,
    className: 'Zumba',
  },
  {
    info: 'FRIDAY\n5:30-6:30 p.m.\nVinyasa Yoga 2\nRoom: B\nInstructor: Elizabeth',
    description: VinyasaYoga2,
    className: 'Vinyasa Yoga 2',
  },
  {
    info: 'SATURDAY\n8:15-9:30 a.m.\nYoga Pilates\nRoom: B\nInstructor: Holly',
    description: YogaPilates,
    className: 'Yoga Pilates',
  },
  {
    info: 'SATURDAY\n9:00-9:45 a.m.\nTotal Body Tone\nRoom: A\nInstructor: Jacky',
    description: TotalBodyTone,
    className: 'Total Body Tone',
  },
  {
    info: 'SATURDAY\n10:00-11:00 a.m.\nSpinning\nRoom: A\nInstructor: Rotating Instructor',
    description: Spinning,
    className: 'Spinning',
  },
  {
    info: 'SATURDAY\n11:15 a.m.-12:00 p.m.\nZumba\nRoom: A\nInstructor: Liz',
    desrciption: Zumba,
    className: 'Zumba',
  },
  {
    info: 'SATURDAY\n11:30 a.m.-12:30 p.m.\nSilverSneakers Circuit\nRoom: B\nInstructor: Rotating Instructor',
    description: SilverSneakersCircuit,
    className: 'SilverSneakers Circuit',
  },
  {
    info: 'SATURDAY\n12:45-1:30 p.m.\nTabata Bootcamp\nRoom: B\nInstructor: Rotating Instructor',
    description: TabataBootCamp,
    className: 'Tabata Bootcamp',
  }, 
]

let iconName;

export default class ScheduleScreen extends React.Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state={
      dataSource: ds.cloneWithRows(data),
      text: '',
    }
  }
  static navigationOptions = {
    title: 'Schedule',
  };

  // get the search icon
  renderIcon = () => {
    return iconName = Platform.OS === 'ios' ? 'ios-search' : 'md-search';
  }

  // Use this function to search through the array of data. 
  // The filter will disregaurd white space and capitalization.
  SearchFilterFunction(text) {
    const newData = data.filter(function(item){
      var itemData = item.info.toUpperCase()
      itemData = itemData.trim()
      var textData = text.toUpperCase()
      textData = textData.trim()
      return itemData.indexOf(textData) > -1
    })
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newData),
      text: text
    })
  }

  // creating link for class description pop-up modual
  renderRow(rowData){
    return (
        <TouchableHighlight>
                    <View style={styles.class} >
                        <Text style={styles.classInfo}>{rowData.info}</Text>
                        <TouchableOpacity onPress={() => {
                          Alert.alert(rowData.className,rowData.description);}}
                          ><Text style={{color: 'blue', paddingTop: 5}}>Class Description</Text></TouchableOpacity>
                    </View>
        </TouchableHighlight>
    )
}

  // creating search bar and schedule layout
  render() {
    return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
      <Ionicons name= "ios-search" size={28}/>
      <TextInput style={styles.textInput}
        onChangeText={(text) => this.SearchFilterFunction(text)}
        value={this.state.text}
        placeholder="     Search class, instructor, time, etc."
        />
        </View>
        <ListView
          enableEmptySections={true}
          renderRow={this.renderRow.bind(this)}
          dataSource={this.state.dataSource}
        />
      </View>
    );
  }
}

// styling for components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 10
  },
  classInfo: {
    fontSize: 16,
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
  class: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  }
});
