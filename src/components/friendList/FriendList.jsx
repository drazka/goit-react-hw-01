import FriendListItem from '../friendListItem/FriendListItem'
import friends from '../../friends.json';
import clsx from "clsx";
import css from "./FriendList.module.css";

const FriendList = () => {
	return (
	<ul className={css.friendList}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem 
            name={friend.name} 
            image={friend.avatar} 
            status={friend.isOnline ? "Online" : "Offline"} 
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;