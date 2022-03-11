import React from 'react'
import './ProfileInformation.css';
import ProfileDataViewer from './components/profileDataViewer';
import ProfileImageViewer from './components/profileImageViewer';
import SectionHeader from '../sectionHeader/SectionHeader';

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