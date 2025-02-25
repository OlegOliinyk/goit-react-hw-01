import css from "../Profile/Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  console.log(css);
  return (
    <div className={css.profileCard}>
      <div className={css.profileDetails}>
        <img className={css.profileImage} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>
      <ul className={css.profileStats}>
        <li className={css.profileActivity}>
          <span className={css.profileLabel}>Followers</span>
          <span className={css.profileQuantity}>{stats.followers}</span>
        </li>
        <li className={css.profileActivity}>
          <span className={css.profileLabel}>Views</span>
          <span className={css.profileQuantity}>{stats.views}</span>
        </li>
        <li className={css.profileActivity}>
          <span className={css.profileLabel}>Likes</span>
          <span className={css.profileQuantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
