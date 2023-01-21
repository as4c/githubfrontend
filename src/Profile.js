import React from 'react'

const ProfileCard = ({userData}) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3">
        <img
          className="w-32 h-32 rounded-full md:mr-4"
          src={userData.avatar_url}
          alt={userData.name}
        />
      </div>
      <div className="md:w-2/3">
        <h2 className="text-xl font-medium block">
          <strong>{userData.name}</strong>
        </h2>
        <p className="text-gray-700">{userData.bio}</p>
        <div>
          <p>
            <strong>Location : </strong>
            {userData.location}
          </p>
          <p>
            <strong>Following : </strong>
            {userData.following}
          </p>
          <p>
            <strong>Followers : </strong>
            {userData.followers}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;
