import { connect } from "react-redux";
import { setUserId, showModal } from "../redux/actions/auth";
import DropList from "../Components/DropList";

const mapDispatchToProps = (dispatch) => ({
  setUserId: (id) => dispatch(setUserId(id)),
  showModal: (show) => dispatch(showModal(show)),
});

export default connect(null, mapDispatchToProps)(DropList);
