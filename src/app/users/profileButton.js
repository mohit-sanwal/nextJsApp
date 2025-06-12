"use client"
import {useState} from 'react';
export default function ProfileButton({user}) {
    const [userProfileSection, setUserProfileSection] = useState('')
   const displayProfile = () => {
     const profileSection = <div id={user.id}> name - {user.name}, email- {user.email} </div>;
     setUserProfileSection(profileSection);
   }
  return (
    <div>
      <button onClick={displayProfile}> Show Profile </button>
        {userProfileSection}
    </div>
  );
}