import './Avatar.css';

const Avatar = ({imageUrl, size = 64, alt=""}) => (
    <span className="avatar" style={{
        width: size,
        height: size
    }}>
        <img className="avatar__img" src={imageUrl} alt={alt} />
    </span>
)

export default Avatar;