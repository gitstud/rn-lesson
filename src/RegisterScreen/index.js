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
    Text,
} from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    updateValue,
    UPDATE_EMAIL,
    UPDATE_PASSWORD,
    UPDATE_PASSWORD2,
    handleRegister,
} from '../actions/auth';

class RegisterScreen extends Component {
    render() {
        const {
            email,
            password,
            password2,
            error,
            user,
            updateValue: update,
            handleRegister: register,
            navigation,
        } = this.props;
        console.log(user);
        return  (
            <View style={styles.container}>
                <Text style={styles.heading}>
                    Register
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
                <TextInput
                    placeholder="Confirm Password"
                    value={password2}
                    onChangeText={text => update(UPDATE_PASSWORD2, text)}
                    style={styles.input}
                    secureTextEntry={true}
                />
                <Button onPress={() => register()}>
                    <Text style={styles.butonText}>Register</Text>
                </Button>
                <Text style={styles.error}>{error}</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PasswordResetScreen')}
                    style={styles.link}
                >
                    <Text style={styles.linkText}>Forgot password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('LoginScreen')}
                    style={styles.link}
                >
                    <Text style={styles.linkText}>Already a member?</Text>
                </TouchableOpacity>
                {/*
                <TouchableOpacity
                    onPress={() => register()}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>*/}
            </View>
        )
    }
}

const mapStateToProps = ({ auth }) => ({
    email: auth.email,
    password: auth.password,
    password2: auth.password2,
    error: auth.error,
    user: auth.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
    updateValue,
    handleRegister
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterScreen);

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
