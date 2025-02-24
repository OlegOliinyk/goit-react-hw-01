import Activity from '../Activity/Activity';
import UserDetails from '../UserDetails/UserDetails';
import css from '../Profile/Profile.module.css';

function Profile({ name, tag, location, image, stats }) {
  console.log(css);
  return (
    <div className={css.profileCard}>
      <UserDetails
        name={name}
        tag={tag}
        location={location}
        image={image}
      ></UserDetails>
      {/* <div className={css.details}>
        <img src={image} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div> */}
      <ul>
        <li>
          <Activity label="Followers" quantity={stats.followers}></Activity>
          {/* <div className={css.activity}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{stats.followers}</span>
          </div> */}
        </li>
        <li>
          <Activity label="Views" quantity={stats.views}></Activity>
          {/* <div className={css.activity}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{stats.views}</span>
          </div> */}
        </li>
        <li>
          <Activity label="Likes" quantity={stats.likes}></Activity>
          {/* <div className={css.activity}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{stats.likes}</span>
          </div> */}
        </li>
      </ul>
    </div>
  );
}

export default Profile;
