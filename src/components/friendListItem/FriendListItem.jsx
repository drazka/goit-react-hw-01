import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = () => {
	return (
<div className={css.friendCard}>
  <img 
    className={css.friendAvatar}
    src="" alt="Avatar" width="48" />
  <p className={css.friendName}>Friend name</p>
  <p className={css.friendStatus}>Friend status</p>
</div>
  );
};

export default FriendListItem;