import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator,
} from 'react-navigation';
import { connect } from 'react-redux';

import RegisterScreen from './RegisterScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import MessagesScreen from './MessagesScreen';
import SettingsScreen from './SettingsScreen';
import VideoScreen from './VideoScreen';
import FriendsScreen from './FriendsScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {faHome, faComments, faCog, faUserFriends} from '@fortawesome/fontawesome-pro-regular/';
/*
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
*/

const AuthRouter = createStackNavigator(
    {
        RegisterScreen,
        LoginScreen
    },
    {
        initialRouteName: 'LoginScreen',
        headerMode: 'none'
    }
);

const TabRouter = createBottomTabNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome name="home" size={24} color={tintColor} />
                ),
            }
        },
        MessagesScreen: {
            screen: MessagesScreen,
            navigationOptions: {
                tabBarLabel: 'Messages',
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome name="comments" size={24} color={tintColor} />
                ),
            }
        },
        SettingsScreen: {
            screen: SettingsScreen,
            navigationOptions: {
                tabBarLabel: 'Settings',
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome name="cog" size={24} color={tintColor} />
                ),
            }
        },
        VideoScreen: {
            screen: VideoScreen,
            navigationOptions: {
                tabBarLabel: 'Video',
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome name="video-camera" size={24} color={tintColor} />
                ),
                //tabBarOnPress: () => { alert(1); }
            }
        },
        FriendsScreen: {
            screen: FriendsScreen,
            navigationOptions: {
                tabBarLabel: 'Friends',
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome name="users" size={24} color={tintColor} />
                ),
            }
        }
    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            labelStyle: {
                fontSize: 12,
                width: 100,
            },
            //activeTintColor: '#333',
            //inactiveTintColor: '#00f',
            tabStyle: {
                //paddingBottom: 10,
                paddingTop: 10,
                // width: 75,
                //height: 100,
            },
            indicatorStyle: {
                //paddingBottom: 10,
                //backgroundColor: '#f00',
                //height: 20,
                // marginBottom: 20,
            },
            showIcon: true,
        },
      }
);

class Router extends Component {
    render() {
        const { user, userChecked } = this.props;
        if (!userChecked) {
            return <View><Text>Loading...</Text></View>;
        }
        return !user ? <AuthRouter /> : <TabRouter />;
    }
}

const mapStateToProps = ({auth: {user, userChecked}}) =>({
  user,
  userChecked
});

//export default AuthRouter;
//export default TabRouter;

export default connect(
    mapStateToProps,
)(Router);
