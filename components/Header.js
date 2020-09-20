import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/colors';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.color1,
    width: '100%',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 36
  },
  headerTitle: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold'

  }
})

export default Header