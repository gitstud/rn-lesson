import React, { Component } from 'react';
import {
    SwitchNavigator
} from 'react-navigation';
import {
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {
    Button,
    Text
} from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
/*import {
    updateValue,
    UPDATE_EMAIL,
    UPDATE_PASSWORD,
    handleLogin,
} from '../actions/auth';*/

class VideoScreen extends Component {
    render() {
        const {/*
            email,
            password,
            error,
            user,
            updateValue: update,
            handleLogin: login,*/
            navigation,
        } = this.props;
        //console.log(user);
        return  (
            <View style={styles.container}>
                <Text style={styles.heading}>
                    Video
                </Text>
                <Button onPress={() => alert('video loading...')}>
                    <Text style={styles.butonText}>Load Video</Text>
                </Button>
            </View>
        )
    }
}

const mapStateToProps = ({ auth }) => ({
    //email: auth.email,
    //password: auth.password,
    //error: auth.error,
    //user: auth.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
    //updateValue,
    //handleLogin
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoScreen);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: 20,
        justifyContent: 'center',
        width: '100%',
    },
    /*
    heading: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'left'
    },
    input: {
        backgroundColor: '#FFF',
        borderColor: '#EEE',
        borderWidth: 2,
        height: 42,
        marginBottom: 10,
        padding: 5,
        width: '100%'
    },
    buttonText: {
        fontFamily: 'Roboto'
    },
    error: {
        color: '#F00'
    },
    link: {

    },
    linkText: {
        color: '#00F',
        textAlign: 'center'
    }
    button: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f00',
        marginTop: 10,
        width: '100%'
    },
    buttonText: {
        padding: 15,
        color: '#FFF',
        textAlign: 'center',
        width: '100%'
    }*/
});
