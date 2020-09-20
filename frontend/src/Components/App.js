import React, { useEffect } from "react";

import CardPlaceholder from "../Containers/CardPlaceholder";
import AppModal from "../Containers/AppModal";
import AppHeader from "../Containers/AppHeader";
import { checkToken } from "../helper/checkToken";

function App(props) {
  const {
    usersList,
    savedList,
    setUsersList,
    setSavedList,
    getData,
    userId,
    loginUser,
  } = props;

  useEffect(() => {
    const token = checkToken();

    if (token) {
      loginUser(token);
    }

    getData();
  }, [getData, loginUser]);

  return (
    <div className="App">
      <AppHeader />
      {userId && <AppModal />}
      {usersList.length && (
        <CardPlaceholder
          list={{ usersList, savedList }}
          setList={{ usersList: setUsersList, savedList: setSavedList }}
        />
      )}
    </div>
  );
}

export default App;
