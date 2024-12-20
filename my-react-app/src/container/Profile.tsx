import profileBanner from '../assets/images/profile.png'
const ProfilePage = () => {
    return (
        <div className="profile-page">
            <div className="profile-header">
                <h1>
                    <span className="profile-header-text"><span className="app-text">App</span>/<span className="profile-text">Profile</span></span>
                </h1>
            </div>
            <div className="profile-info">
                <div className="profile-banner">
                    <img src={profileBanner} alt="Banner" className="banner-image" />
                </div>
                <div className="profile-user-info">
                    <div className="row">
                        <div className="col-4">
                            <div className="info-item">
                                <label className="info-label">Username:</label>
                                <span className="info-value">JohnDoe</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="info-item">
                                <label className="info-label">Email:</label>
                                <span className="info-value">john.doe@example.com</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="info-item">
                                <label className="info-label">Contact:</label>
                                <span className="info-value">+123 456 7890</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
