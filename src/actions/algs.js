export const createFirebaseRef = (ref) => {
  return {
    type: 'ALG_CREATE_FIREBASE_REF',
    payload: ref,
  }
}

export const algReceived = (alg) => {
  return {
    type: 'ALG_RECEIVED',
    payload: alg
  }
}

export const watchSet = (set) => {
  return (dispatch) => {
    let ref = window.firebase.database().ref('/cases').orderByChild('set').equalTo(set)
    dispatch(createFirebaseRef(ref))

    ref.on('child_added', snap => {
      dispatch(algReceived(snap.val()))
    })
  }
}

export const unwatchSet = () => {
  return {
    type: 'ALG_UNWATCH_SET',
  }
}

