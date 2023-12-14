import "./Avatar.css";

const Avatar = ({ imageUrl, size = 56, alt = "avatar" }) => (
  <span
    role="presentation"
    className="avatar"
    style={{
      width: size,
      height: size,
    }}
  >
    <img className="avatar__img" src={imageUrl} alt={alt} />
  </span>
);

export default Avatar;
