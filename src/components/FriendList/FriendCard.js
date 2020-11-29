import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendCard = ({
    avatar, name, isOnline
}) => {
    return (
        <>
            <span className={isOnline ? s.on : s.off}>{isOnline}</span>
            <img className={s.avatar} src={avatar} alt="" width="48" />
            <p className={s.name}>{name}</p>
        </>
    )
};

FriendCard.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default FriendCard;