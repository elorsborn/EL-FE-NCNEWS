import React from "react";

class User extends React.Component {
  fetchUser = async query => {
    const {
      data: { user }
    } = await axios.get(
      `https://elliot-ncnews.herokuapp.com/api/users/${username}}`
    );
    return user;
  };
}

export default User;
