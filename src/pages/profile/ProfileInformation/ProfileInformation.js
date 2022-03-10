import React from 'react'
import './ProfileInformation.css';
import ProfileDataViewer from './ProfileDataViewer/ProfileDataViewer';
import ProfileImageViewer from './ProfileImageViewer/ProfileImageViewer';
import SectionHeader from '../SectionHeader/SectionHeader';

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