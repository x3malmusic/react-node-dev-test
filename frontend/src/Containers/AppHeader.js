import { connect } from "react-redux";
import AppHeader from "../Components/AppHeader";
import { sortBy } from "../redux/actions/auth";

const mapStateToProps = ({
  user: { loggedIn, firstName, lastName, avatar },
}) => ({
  loggedIn,
  firstName,
  lastName,
  avatar,
});

const mapDispatchToProps = (dispatch) => ({
  sortBy: (filter) => dispatch(sortBy(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
