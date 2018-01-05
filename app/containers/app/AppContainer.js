import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActionCreators from '../../actions'
import * as utils from '../../lib/utils'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LogIn from '../login/LogIn'
import { Tabs } from '../../router'

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
    // this.setToken = this.setToken.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to HOTEL APP
        </Text>
        <View style={{flex: 1}}>
          {this.props.user.token ?
            <Tabs />
            :
            <LogIn />
          }
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.hotelCounter,
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    fontSize: 15,
    color: 'blue',
    borderColor: '#333',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 2,
    borderRadius: 5,
    textAlign: 'center'
  }
});