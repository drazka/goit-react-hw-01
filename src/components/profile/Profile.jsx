import clsx from "clsx";
import css from "./Profile.module.css";

const Profile = ({name, tag, location, image, stats}) => {
  return (
<div className={css.profileCard}>
  <div className={css.profileInfo}>
    <img
      src={image}
      alt="User avatar"
    />
    <p className={css.profileName}>{name}</p>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={clsx(css.statsElement, css.leftElem)}>
      <span className={css.title}>Followers</span>
      <span className={css.amount}>{stats.followers}</span>
    </li>
    <li className={clsx(css.statsElement, css.centerElem)}>
      <span className={css.title}>Views</span>
      <span className={css.amount}>{stats.views}</span>
    </li>
    <li className={clsx(css.statsElement, css.rightElem)}>
      <span className={css.title}>Likes</span>
      <span className={css.amount}>{stats.likes}</span>
    </li>
  </ul>
</div>
  );
};

export default Profile;



