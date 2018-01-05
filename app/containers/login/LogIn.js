import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActionCreators from '../../actions'
import * as utils from '../../lib/utils'

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'green',
    fontWeight: 'bold'
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
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    padding: 5
  },
  danger: {
    color: '#ff5555'
  }
});

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      username: '',
      password: ''
    }
  }

  logIn() {
    this.props.login(this.state).then(res => {
      if(res) {
        utils.setToken(res)
      }
    }).catch(e => {
      console.log('ERROR LOGIN1:', e);
      this.setState({error: true});
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>
            Log In
          </Text>
        </View>
        <View style={{padding: 10}}>
          <TextInput
            placeholder="Username"
            style={styles.input}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            autoCapitalize='none'
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            secureTextEntry={true}
            autoCapitalize='none'
          />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
          <View style={{width: 150}}>
            <TouchableHighlight onPress={()=>{this.logIn()}}>
              <Text style={styles.button}>
                Log In
              </Text>
            </TouchableHighlight>
          </View>
        </View>
        {this.state.error ?
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={styles.danger}>Error - Check your credentials</Text>
          </View>
          : null}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.hotelCounter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
