const initialState = {
  authenticated: false,
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_AUTHENTICATED':
      return { ...action.payload, authenticated: true }
    case 'USER_UNAUTHENTICATED':
      return { authenticated: false }
    default:
      return state
  }
}

export default user
