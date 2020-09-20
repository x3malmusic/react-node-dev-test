const initialState = {
  userId: null,
  firstName: "",
  lastName: "",
  avatar: "",
  tokenId: "",
  posts: [],
  usersList: [],
  savedList: [],
  showModalScreen: false,
  filter: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS_LIST":
      return {
        ...state,
        usersList: action.payload,
      };
    case "SET_SAVED_LIST":
      return {
        ...state,
        savedList: action.payload,
      };
    case "SET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "SET_USER_ID":
      return {
        ...state,
        userId: action.payload,
      };
    case "SHOW_MODAL":
      return {
        ...state,
        showModalScreen: action.payload,
      };
    case "SORT_BY":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        avatar: action.payload.avatar,
        tokenId: action.payload.token,
        loggedIn: action.payload.loggedIn,
        savedList: action.payload.savedList,
      };
    default:
      return state;
  }
};
