import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native'
import { Icon } from 'react-native-elements'

class HotelRow extends Component {

  render() {
    return (<View style={styles.rowContainer}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1}}>
          <Image style={{height: '100%'}} source={require('../../assets/images/hotel.jpeg')}/>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.title}>{this.props.hotel.name}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.city}>{this.props.hotel.city}</Text>
              <Text style={styles.stars}>Stars: {this.props.hotel.stars}</Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Icon name="arrow-forward" size={20} color="#888" onPress={() => this.props.handlePress(this.props.hotel)}/>
            </View>
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

export default HotelRow

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
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 8,
    textAlign: 'justify'
  },
  city: {
    fontSize: 10
  },
  stars: {
    fontSize: 10
  }
})