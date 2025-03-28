import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams(); // Fetch the userId from URL params
  return <h1>User Profile: {userId}</h1>;
}

export default UserProfile;

