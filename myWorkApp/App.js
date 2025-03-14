import {StyleSheet, Text,View,Image,TextInput,FlatList} from 'react-native';
import {styles} from './custom_component/styles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const profileIcon =require('./assets/person.png');
const filterIcon =require('./assets/filterIcon.png');
const taskImage1 = require('./assets/image1.png');
const taskImage2 = require('./assets/image2.png');

//This is the stylesheet of the screen. It has been created as a component
export default function App(){

  const taskCard =[
    {
      id:1,
      subTitle:'12 tasks',
      title: 'Exericise',
      image:taskImage2
    },
    {
      id:2,
      subTitle:'12 tasks',
      title: 'Study',
      image:taskImage1
    },
    {
      id:3,
      title: 'Code',
      subTitle:'12 tasks',
      image:taskImage2
    },
    {
      id:4,
      title: 'Cook',
      subTitle:'12 tasks',
      image:taskImage1
    },
    {
      id:5,
      title: 'Workout',
      subTitle:'12 tasks',
      image:taskImage2
    },
    {
      id:6,
      title: 'Read',
      subTitle:'12 tasks',
      image:taskImage1
    },
    {
      id:7,
      title: 'Host Meeting',
       subTitle:'12 tasks',
      image:taskImage2
    },
    {
      id:8,
      title: 'Take a walk',
       subTitle:'12 tasks',
      image:taskImage1
    }
  ]

  const onGoingTaskList=[
    {
      id:1,
      title:'Mobile App Development'
    },
    {
      id:2,
      title:'Web Development'
    },
    {
      id:3,
      title:'Trading'
    },
    
    {
      id:4,
      title:'Cooking'
    },
    
    {
      id:5,
      title:'Training'
    },
    
    {
      id:6,
      title:'Preach'
    },
    
    {
      id:7,
      title:'Watch football'
    },
    
    {
      id:8,
      title:'Take a nap'
    }

  ];
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

       //Input and filter section
       <View style={styles.inputFilterContainer}>
          //Input
          <View >
            <TextInput
              placeholder='Search'
              placeholderTextColor={'black'}
              style={styles.inputContainer}
            />
            <MaterialIcons name="search" size={24} color="black"  style={styles.search}/>
          </View>
          //Filter
          <View style={styles.filterBackground}>
            <Image source={filterIcon} styles={styles.filter}/>
          </View>
       </View>

       //Categories section

      <Text style={styles.categorySection} >
        Categories
      </Text>

      //Task cards
       <View style={styles.taskCardContainer}>
        <FlatList
        data={taskCard}
        renderItem={({item})=>(
          <View style={styles.eachTaskCard}>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Text style={styles.taskNumber}>{item.subTitle}</Text>
            <Image source={item.image} style={styles.taskImage}/>
          </View>
        )}
        horizontal
        keyExtractor={(item)=>item.id}
        style={styles.taskCardHolder}
        showsHorizontalScrollIndicator={false}
       />
       </View>

       //On goingTask session

       <Text style={styles.ongoingTaskSection}>Ongoing Task</Text>

       <View style={styles.holder}>
        <FlatList
         data={onGoingTaskList}
         renderItem={
          ({item})=>(
            <View style={styles.ongoingTaskContainer}>
              <Text style={styles.ongoingTaskName}>
                {item.title}
              </Text>
            </View>
          )
         }
         showsVerticalScrollIndicator={false}
         keyExtractor={(item)=>item.id}
         style={styles.ongoingTask}
        />
       </View>

    </View>
  );
}
