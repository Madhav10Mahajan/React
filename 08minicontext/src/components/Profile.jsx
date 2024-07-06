import React from "react";
import Usercontext from "../Context/Usercontext";
import { useContext, useState } from "react";

function Profile() {
  let { user } = useContext(Usercontext);
  if (!user) return <div>please login</div>;
  else return <div>Welcome {user.username}</div>;
}

export default Profile;
