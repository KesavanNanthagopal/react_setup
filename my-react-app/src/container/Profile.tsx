import profileBanner from '../assets/images/profile.png';
const ProfilePage = () => {
    return (
        <div className="profile-page container">
            <div className="profile-header text-center py-3">
                <h1>
                    <span className="profile-header-text">
                        <span className="app-text">App</span>/<span className="profile-text">Profile</span>
                    </span>
                </h1>
            </div>
            <div className="profile-info">
                <div className="profile-banner text-center">
                    <img src={profileBanner} alt="Banner" className="banner-image img-fluid" />
                </div>

                <div className="profile-user-info mt-4">
                    <div className="row">
                        <div className="col-12 col-md-4 mb-3 mb-md-0">
                            <div className="info-item">
                                <label className="info-label d-block">Username:</label>
                                <span className="info-value">JohnDoe</span>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 mb-3 mb-md-0">
                            <div className="info-item">
                                <label className="info-label d-block">Email:</label>
                                <span className="info-value">john.doe@example.com</span>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="info-item">
                                <label className="info-label d-block">Contact:</label>
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
