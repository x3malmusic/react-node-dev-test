import { connect } from "react-redux";
import orderBy from "lodash/orderBy";
import {
  loginUser,
  getData,
  setUsersList,
  setSavedList,
} from "../redux/actions/auth";
import App from "../Components/App";

const mapStateToProps = ({
  user: { show, usersList, savedList, userId, filter },
}) => ({
  usersList: orderBy(usersList, filter),
  savedList: orderBy(savedList, filter),
  userId,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (token) => dispatch(loginUser(token)),
  getData: () => dispatch(getData()),
  setUsersList: (list) => dispatch(setUsersList(list)),
  setSavedList: (list) => dispatch(setSavedList(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
