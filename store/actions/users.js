import firebase from 'firebase';
export const GET_USER = 'GET_USER';

export const fetchUser = () => {
    return (dispatch => {
        firebase.firestore().collection('users')
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    console.log(snapshot.data())
                    dispatch({type : GET_USER, currentUser: snapshot.data()})
                } else {
                    console.log('does not exists')
                }
            })
    })
};
