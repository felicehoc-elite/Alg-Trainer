export const signOut = () => {
  return (dispatch) => {
    window.firebase.auth().signOut()
      .then(snap => {
        dispatch({ type: 'SIGN_OUT_FULFILLED', payload: {} })
      })
  }
}

export const signIn = () => {
  return (dispatch) => {
    let provider = new window.firebase.auth.FacebookAuthProvider();
    window.firebase.auth().signInWithPopup(provider)
      .then(result => {
        dispatch({ type: 'SIGN_IN_FULFILLED', payload: result.user })
      })
  }
}
