import css from "./SettingModal.module.css";
import Icon from "../../ui/Icon";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../redux/auth/selectors";
import { updateUserAvatar } from "../../../redux/auth/operations";

const UpdateAvatar = () => {
  const userProfile = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Only JPG, PNG, and WEBP formats are allowed.");
      return;
    }

    const formData = new FormData();
    formData.append("avatar", file);

    dispatch(updateUserAvatar(formData))
      .unwrap()
      .then(() => toast.success("Avatar updated successfully!"))
      .catch(() => toast.error("Failed to update avatar."));
  };

  return (
    <div className={css.yourPhotoWrapper}>
      <h3 className={css.fontOne}>Your photo</h3>
      <div className={css.uploadWrapper}>
        {userProfile.avatarUrl ? (
          <img
            className={css.userPhoto}
            src={userProfile.avatarUrl}
            width={80}
            height={80}
          />
        ) : (
          <div className={css.userPhoto}>
            {userProfile.name
              ? userProfile.name.split("")[0].toUpperCase()
              : userProfile.email.split("")[0].toUpperCase()}
          </div>
        )}
        <div>
          <label className={css.uploadBtn} htmlFor="file-upload">
            <Icon name="icon-upload" width="16px" height="16px" />
            Upload a photo
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateAvatar;
