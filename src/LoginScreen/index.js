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
import {
    updateValue,
    UPDATE_EMAIL,
    UPDATE_PASSWORD,
    handleLogin,
} from '../actions/auth';

class LoginScreen extends Component {
    render() {
        const {
            email,
            password,
            error,
            user,
            updateValue: update,
            handleLogin: login,
            navigation,
        } = this.props;
        console.log(user);
        return  (
            <View style={styles.container}>
                <Text style={styles.heading}>
                    Login
                </Text>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => update(UPDATE_EMAIL, text.toLowerCase())}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => update(UPDATE_PASSWORD, text)}
                    style={styles.input}
                    secureTextEntry={true}
                />
                <Button onPress={() => login()}>
                    <Text style={styles.butonText}>Login</Text>
                </Button>
                <Text style={styles.error}>{error}</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PasswordResetScreen')}
                    style={styles.link}
                >
                    <Text style={styles.linkText}>Forgot password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('RegisterScreen')}
                    style={styles.link}
                >
                    <Text style={styles.linkText}>Not a member?</Text>
                </TouchableOpacity>
                {/*
                <TouchableOpacity
                    onPress={() => login()}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>*/}
            </View>
        )
    }
}

const mapStateToProps = ({ auth }) => ({
    email: auth.email,
    password: auth.password,
    error: auth.error,
    user: auth.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
    updateValue,
    handleLogin
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen);

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
    /*
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
