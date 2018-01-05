import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import HotelScreen from './containers/hotel/HotelScreen'
import FavoritesScreen from './containers/hotel/FavoritesScreen'
import HotelDetails from './containers/hotel/HotelDetails'

export const HotelFeedStack =  StackNavigator({
  Feed: {
    screen: HotelScreen,
    navigationOptions: {
      title: 'Hotels'
    }
  },
  HotelDetails: {
    screen: HotelDetails,
    navigationOptions: ({navigation}) => {
      return({
        title: `${navigation.state.params.name.toUpperCase()}`
      })
    }
  }
})
export const FavoritesFeedStack =  StackNavigator({
  FavoritesFeed: {
    screen: FavoritesScreen,
    navigationOptions: {
      title: 'Favorites Hotels'
    }
  },
  FavoritesHotelDetails: {
    screen: HotelDetails,
    navigationOptions: ({navigation}) => {
      return({
        title: `${navigation.state.params.name.toUpperCase()}`
      })
    }
  }
})

export const Tabs = TabNavigator({
  Feed: {
    screen: HotelFeedStack,
    navigationOptions: {
      tabBarLabel:'Feed',
      tabBarIcon: ({tintColor}) => <Icon name="list" size={35} color={tintColor}/>
    }
  },
  FavoritesFeed: {
    screen: FavoritesFeedStack,
    navigationOptions: {
      tabBarLabel:'Favorites',
      tabBarIcon: ({tintColor}) => <Icon name="star" size={35} color={tintColor}/>
    }
  }
})