import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActionCreators from '../../actions'
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  ScrollView
} from 'react-native'

import HotelRow from './HotelRow'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
    padding: 5
  },
  logoutButton: {
    fontSize: 10,
    color: 'blue',
    borderColor: '#333',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 2,
    borderRadius: 5,
    textAlign: 'center',
    width: 50
  },
  button: {
    fontSize: 15,
    color: 'blue',
    borderColor: '#333',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 2,
    borderRadius: 5,
    textAlign: 'center',
    width: 100
  }
});


class HotelScreen extends Component {
  constructor(props) {
    super(props)

    this.handlePress = this.handlePress.bind(this)
  }

  logOut() {
    this.props.logOut();
  }

  loadHotels() {
    this.props.loadHotels();
  }

  handlePress(hotel) {
    this.props.navigation.navigate('HotelDetails', hotel)
  }

  render() {
    return (
    <View style={styles.container}>
      <View style={{height: 30, alignItems: 'flex-end'}}>
        <TouchableHighlight
          onPress={()=>{this.logOut()}}
        >
          <Text style={styles.logoutButton}>
            Log Out
          </Text>
        </TouchableHighlight>
      </View>
      <View style={{height: 30, alignItems: 'center'}}>
        <TouchableHighlight
          onPress={()=>{this.loadHotels()}}
        >
          <Text style={styles.button}>
            Load Hotels
          </Text>
        </TouchableHighlight>
      </View>
      <ScrollView style={{flex: 0.8}}>
        {this.props.hotels.map(hotel => {
          return <HotelRow key={hotel.id} hotel={hotel} handlePress={this.handlePress}/>
        })
        }
      </ScrollView>
    </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    hotels: state.hotels
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelScreen)

