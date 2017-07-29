const initialState = {
  ref: {},
  collection: []
}

const algs = (state = initialState, action) => {
  switch (action.type) {
    case 'ALG_RECEIVED':
      return {
        ...state,
        collection: [ ...state.collection, action.payload ]
      }
    case 'ALG_CREATE_FIREBASE_REF':
      return {
        ...state,
        ref: action.payload,
        collection: []
      }
    case 'ALG_UNWATCH_SET':
      state.ref.off()
      return state
    default:
      return state
  }
}

export default algs
