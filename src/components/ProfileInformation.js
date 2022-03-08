import React from 'react'
import '../styles/ProfileInformation.css';
import ProfileDataViewer from './ProfileDataViewer';
import ProfileImageViewer from './ProfileImageViewer';
import SectionHeader from './SectionHeader';

function ProfileInformation() {
  return (
    <section className="user-profile-information">
        <SectionHeader text="PROFILE INFORMATION"></SectionHeader>
        <section className="profile-information-container">
            <ProfileImageViewer></ProfileImageViewer>
            <ProfileDataViewer></ProfileDataViewer>
        </section>
    </section>
  )
}

export default ProfileInformation