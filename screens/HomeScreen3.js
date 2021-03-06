import React from 'react'
import { Alert, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/colors'
import Carousel from '../components/Carousel'
import Card from '../components/Card'
import { FontAwesome5, Fontisto, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';


const dummyData = [
  {
    title: 'Barber Idaz Anggara', url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 1
  },
  {
    title: 'Barber Laurentius', url: 'https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 2
  },
  {
    title: 'Barber Aris Satya', url: 'https://images.unsplash.com/photo-1542940763-af472da7199a?ixlib=rb-1.2.1&auto=format&fit=crop&w=859&q=80',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 3
  },
  {
    title: 'Barber Ichlasul', url: 'https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 4
  }
]



const HomeScreen3 = () => {
  return (
    <View style={StyleSheet.screen}>
      <View style={styles.carouselContainer}>
        <Carousel data={dummyData} />

      </View>
      <View style={styles.groupTitle}>

        <Text style={styles.textTitle}>Choose Your Service</Text>

      </View>
      <View style={styles.btnGroup}>

        <Card style={styles.card}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <View style={styles.iconContainer}>
              <FontAwesome5 name="motorcycle" size={60} color="white" />
              {/* <Text style={styles.iconText}>On Delivery</Text> */}
            </View>
            <Text style={styles.buttonText}>CUKUR ON DELIVERY</Text>
            <MaterialIcons name="navigate-next" size={30} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <View style={styles.iconContainer}>

              {/* <Fontisto name="shopping-store" size={60} color="white" /> */}
              <Entypo name="shop" size={60} color="white" />
              {/* <Text style={styles.iconText}>On Location</Text> */}
            </View>

            <Text style={styles.buttonText}>CUKUR ON LOCATION</Text>
            <MaterialIcons name="navigate-next" size={30} color="white" />
          </TouchableOpacity>

        </Card>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  groupTitle: {
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: "row"
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 18
  },
  carouselContainer: {
    paddingTop: 40,
    paddingBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomEndRadius: 20,
    backgroundColor: Colors.accent
  },
  iconContainer: {
    alignItems: 'center',
    marginRight: 10,
    width: 80
  },
  card: {
    width: '80%',
    backgroundColor: Colors.accent,
  },
  btnGroup: {
    marginTop: 20,
    borderColor: Colors.accent,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    width: 160,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  iconText: {
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})

export default HomeScreen3