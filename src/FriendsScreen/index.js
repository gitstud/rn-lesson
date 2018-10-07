import React, { Component } from 'react';
import {
    SwitchNavigator
} from 'react-navigation';
import {
    TextInput,
    View,
    FlatList,
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
    getContacts,
} from '../actions/friends';

class FriendsScreen extends Component {
    render() {
        const {
            updateValue: update,
            getContacts: gc,
            contacts,
            navigation,
        } = this.props;
        const cs = [{id: 6, name: 'bob'}];
        return  (
            <View style={styles.container}>
                <Text style={styles.heading}>
                    Friends
                </Text>
                <Button onPress={() => gc()}>
                    <Text style={styles.butonText}>Get Contacts</Text>
                </Button>
                <FlatList
                style={{backgroundColor: 'purple'}}
                    data={contacts}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <View>
                          <Text style={{ height: 40, backgroundColor: 'orange'}}>{item.name}</Text>

                        </View>
                    )}
                />
            </View>
        )
    }
}

const mapStateToProps = ({ friends }) => ({
    contacts: friends.contacts
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getContacts
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FriendsScreen);

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
