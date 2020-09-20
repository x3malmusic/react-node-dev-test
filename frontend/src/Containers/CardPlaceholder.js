import { connect } from "react-redux";
import { saveList } from "../redux/actions/auth";
import CardPlaceholder from "../Components/CardPlaceholder";

const mapStateToProps = ({ user: { loggedIn, email } }) => ({
  loggedIn,
  email,
});

const mapDispatchToProps = (dispatch) => ({
  saveList: (list) => dispatch(saveList(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardPlaceholder);
