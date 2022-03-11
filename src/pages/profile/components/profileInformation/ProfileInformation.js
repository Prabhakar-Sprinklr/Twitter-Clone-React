import React from 'react'
import './profileInformation.css';
import ProfileDataViewer from './components/profileDataViewer';
import ProfileImageViewer from './components/profileImageViewer';
import SectionHeader from '../sectionHeader/SectionHeader';

function ProfileInformation() {
  return (
    <section className="user-profile-information">
        <SectionHeader text="PROFILE INFORMATION" />
        <section className="profile-information-container">
            <ProfileImageViewer />
            <ProfileDataViewer />
        </section>
    </section>
  )
}

export default ProfileInformation