import css from './UserDetails.module.css';

const UserDetails = ({ name, tag, location, image }) => {
  return (
    <div className={css.details}>
      <img src={image} alt="User avatar" />
      <p>{name}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>
  );
};

export default UserDetails;
