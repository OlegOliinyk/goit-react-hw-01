import Activity from '../Activity/Activity';
import css from '../Profile/Profile.module.css';
import UserDetails from '../UserDetails/UserDetails';

function Profile({ name, tag, location, image, stats }) {
  <div className={css.profileCard}>
    <UserDetails
      name={name}
      tag={tag}
      location={location}
      image={image}
    ></UserDetails>
    <ul>
      <li>
        <Activity label="Followers" quantity={stats.followers}></Activity>
      </li>
      <li>
        <Activity label="Views" quantity={stats.views}></Activity>
      </li>
      <li>
        <Activity label="Likes" quantity={stats.likes}></Activity>
      </li>
    </ul>
  </div>;
}

export default Profile;
