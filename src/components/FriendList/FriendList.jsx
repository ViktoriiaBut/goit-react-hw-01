
import styles from "./FriendList.module.css";
import clsx from "clsx";
import FriendListItem from '../FriendList/FriendListItem';

export default function FriendList ({friends}) {
    return (
        <ul className={clsx(styles.listCardUsers)}>
          {friends.map((friend) => {
            return <li key={friend.id} className={clsx(styles.listCardItems)}>
            <FriendListItem friend={friend} />
            </li>
        })
    }
        </ul>);
    
}
