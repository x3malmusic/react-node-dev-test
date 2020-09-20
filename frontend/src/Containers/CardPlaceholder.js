import { connect } from "react-redux";
import { loginUser } from "../redux/actions/auth";
import CardPlaceholder from "../Components/CardPlaceholder";

const mapStateToProps = ({ user: { loggedIn } }) => ({ loggedIn });

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardPlaceholder);
