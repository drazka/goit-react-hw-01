import FriendListItem from '../friendListItem/FriendListItem'

const FriendList = () => {
	return (
		<ul>
			{/* Liczba li zależy od liczby obiektów w tablicy */}
			<li>
				<FriendListItem />
			</li>
		</ul>
  );
};

export default FriendList;