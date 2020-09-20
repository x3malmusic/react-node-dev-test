import { connect } from "react-redux";
import { loginUser, setUser } from "../redux/actions/auth";
import GoogleBtn from "../Components/GoogleBtn";

const mapStateToProps = ({ user: { loggedIn } }) => ({ loggedIn });

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
  setUser: (user) => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GoogleBtn);
