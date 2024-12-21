import clsx from "clsx";
import styles from '../FriendList/FriendListItem.module.css';

export default function FriendListItem({friend: { avatar, name, isOnline}}) {
    return (
        <div className={clsx(styles.friendListItemContainer)}>
          <img src={avatar} alt={name} width="48"/>
          <p className={clsx(styles.friendListItemsText)}>{name}</p>
          <p className={clsx(
            isOnline && styles.isOnlineGreen,
            !isOnline && styles.isOfflineRed
          )}>{isOnline ? "Online" : "Offline" }</p>

        </div>
    );
}