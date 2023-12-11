import './Avatar.css';

const Avatar = ({imageUrl, imageSize = 64, alt=""}) => (
    <span className="avatar" style={{
        width: imageSize,
        height: imageSize
    }}>
        <img className="avatar__img" src={imageUrl} alt={alt} />
    </span>
)

export default Avatar;