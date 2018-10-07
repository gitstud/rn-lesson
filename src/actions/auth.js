import { auth, database } from '../firebase';
//import { generator } from 'generate-password';
export const UPDATE_EMAIL = 'auth/UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'auth/UPDATE_PASSWORD';
export const UPDATE_PASSWORD2 = 'auth/UPDATE_PASSWORD2';
export const REGISTER_ERROR = 'auth/REGISTER_ERROR';
export const LOGIN_ERROR = 'auth/LOGIN_ERROR';
export const LOGGED_IN = 'auth/LOGGED_IN';
export const LOGGED_OUT = 'auth/LOGGED_OUT';

export const updateValue = (type, payload) => (dispatch) => {
    dispatch({
        type,
        payload
    });
};

export const handleRegister = () => (dispatch, getState) => {
    const { email, password, password2 } = getState().auth;

    if (password === password2) {
        auth.createUserWithEmailAndPassword(email, password).then(({user: { uid }}) => {
            dispatch(writeUser(email, uid));
        }).catch(({message: payload}) => {
            console.log(payload);
            dispatch({
                type: REGISTER_ERROR,
                payload
            })
        });
    }
}

export const handleLogin = () => (dispatch, getState) => {
    const { email, password } = getState().auth;

    auth.signInWithEmailAndPassword(email, password).then(({user: { uid }}) => {
        console.log(uid);
    }).catch(({message: payload}) => {
        console.log(payload);
        dispatch({
            type: LOGIN_ERROR,
            payload
        })
    });
}

export const handleLogout = () => (dispatch) => {
    auth.signOut()
      .then(function() {
        console.log('Logout success.');
      })
      .catch(function(error) {
          console.log(payload);
          dispatch({
              type: LOGIN_ERROR,
              payload
          })
      });
}

export const handlePasswordReset = () => (dispatch, getState) => {
    const { email } = getState().auth;

    let user = firebase.auth().currentUser;
    let newPassword = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);/*generator.generate({
        length: 10,
        numbers: true,
        symbols: true
    })();*/

    user.updatePassword(newPassword).then(function() {

    }).catch(function(error) {
        console.log(payload);
        dispatch({
            type: PASSWORD_RESET_ERROR,
            payload
        })
    });
}

const writeUser = (email, uid) => (dispatch) => {
    database.ref(`users/${uid}`).update({ email });
}

export const initAuthObserver = store => (
    auth.onAuthStateChanged((user) => {
        if (user) {
            return store.dispatch({
                type: LOGGED_IN,
                payload: user
            });
        }
        return store.dispatch( {type: LOGGED_OUT} );
    })
);
