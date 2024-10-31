import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({name, image, status, isOnline}) => {
	return (
<div className={css.friendCard}>
  <img 
    className={css.friendAvatar}
    src={image} alt="Avatar" width="48" />
  <p className={css.friendName}>{name}</p>
  <p className={css.friendStatus} style={{ color: isOnline ? 'green' : 'red' }} >{status}</p>
</div>
  );
};

export default FriendListItem;