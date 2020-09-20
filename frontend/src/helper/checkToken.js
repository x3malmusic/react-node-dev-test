export const checkToken = () => {
  return JSON.parse(localStorage.getItem("react-node-test-user"));
};

export const deleteToken = () => {
  localStorage.removeItem("react-node-test-user");
};
