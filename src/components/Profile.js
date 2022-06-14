import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  useEffect(() => {
    axios.get().then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <div></div>
    </>
  );
};

export default Profile;
