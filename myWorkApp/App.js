import {StyleSheet, Text,View,Image,TextInput,FlatList} from 'react-native';
import {styles} from './custom_component/styles';

const profileIcon =require('./assets/person.png');
const filterIcon =require('./assets/filterIcon.png');

//This is the stylesheet of the screen. It has been created as a component
export default function App(){
  return (
    <View style={styles.container}>

      //Header of Screen
       <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.bigHeaderText}>
              Hello , Devs
            </Text>
            <Text style={styles.smallHeaderText}>
              14 tasks today
            </Text>
          </View>
          <View style ={styles.profileContainer}>
            <View style={styles.profileIconBackground}>
              <Image source={profileIcon} style={styles.profileIcon}/>
            </View>
          </View>
       </View>
    </View>
  );
}
