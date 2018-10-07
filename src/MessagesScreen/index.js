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
import email from 'react-native-email';

class MessagesScreen extends Component {
    handleEmail = () => {
        const cc = [];
        const bcc = [];
        const to = 'areg.abc@gmail.com';
        const subject = 'test';
        const body = 'Hello';

        email(to, {
            cc,
            bcc,
            subject,
            body,
        }).catch(console.error);
    }

    render() {
        const {
            navigation,
        } = this.props;

        return  (
            <View style={styles.container}>
                <Text style={styles.heading}>
                    Messages
                </Text>
                <Button onPress={() => this.handleEmail()}>
                    <Text style={styles.butonText}>Email Hello</Text>
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
)(MessagesScreen);

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
