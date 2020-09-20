import { connect } from "react-redux";
import AppModal from "../Components/AppModal";
import { showModal } from "../redux/actions/auth";

const mapStateToProps = ({
  user: { showModalScreen, userId, usersList, posts, savedList },
}) => ({
  showModalScreen,
  userInfo:
    usersList.filter((user) => user.id === userId)[0] ||
    savedList.filter((user) => user.id === userId)[0],
  userPosts: posts?.filter((post) => post.userId === userId),
});

const mapDispatchToProps = (dispatch) => ({
  showModal: (show) => dispatch(showModal(show)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppModal);
