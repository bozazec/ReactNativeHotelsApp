import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native'
import { Icon } from 'react-native-elements'

class HotelDetails extends Component {
  constructor(props) {
    super(props)
    this.hotel = this.props.navigation.state.params
  }
  render() {
    return (<View style={styles.rowContainer}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 2, marginBottom: 20}}>
          <Image style={{height: 200}} source={require('../../assets/images/hotel.jpeg')}/>
        </View>
        <View style={{flex:1, flexDirection: 'column'}}>
          <View>
            <Text style={styles.title}>{this.hotel.name}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop:10}}>
            <Text style={styles.city}>{this.hotel.city}</Text>
            <Text style={styles.stars}>Stars: {this.hotel.stars}</Text>
          </View>
          <View>
            <Text>Description:</Text>
            <Text style={styles.description}>{this.hotel.description}</Text>
          </View>
        </View>
      </View>
    </View>)
  }
}

/*
<View>
  <ScrollView style={{height: 80}}>
    <Text>Description:</Text>
    <Text style={styles.description}>{hotel.description}</Text>
  </ScrollView>
</View>
 */

export default HotelDetails

const styles = StyleSheet.create({
  rowContainer: {
    // borderWidth: 1,
    // borderColor: '#3399ff',
    // borderRadius: 5,
    marginBottom: 15,
    height: 150
  },
  image: {
    height: 50,
    width: 50
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: '#fff'
  },
  description: {
    fontSize: 10,
    textAlign: 'justify',
    padding: 5
  },
  city: {
    fontSize: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: '#fff'
  },
  stars: {
    fontSize: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: '#fff'
  }
})