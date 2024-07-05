import React, { useEffect, useState } from "react";

function Github() {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="bg-gray-600 text-white shadow-xl text-center">
      Github Followers: {data.followers}
      <img src="data.avatar_url" alt="profile pic" />
    </div>
  );
}

export default Github;
