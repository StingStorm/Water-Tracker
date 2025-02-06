import { useState } from "react";
import Icon from "../ui/Icon";
import css from "./UserLogoModal.module.css";
import UserLogoutModal from "../UserLogoutModal/UserLogoutModal";
import SettingModal from "../Modals/SettingModal/SettingModal";

const UserLogoModal = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isSettingModalOpen, setIsSettingModalOpen] = useState(false);

  const openSettingModal = () => setIsSettingModalOpen(true);
  const closeSettingModal = () => setIsSettingModalOpen(false);

  const openLogoutModal = () => setIsLogoutModalOpen(true);
  const closeLogoutModal = () => setIsLogoutModalOpen(false);

  return (
    <>
      <ul className={css.dropDownMenu}>
        <li>
          <button
            type="button"
            className={css.dropDownButton}
            onClick={openSettingModal}>
            <Icon
              name="icon-settings"
              fill="transparent"
              stroke="#407bff"
              width={16}
              height={16}></Icon>
            Setting
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={openLogoutModal}
            className={css.dropDownButton}>
            <Icon
              name="icon-logout"
              fill="transparent"
              stroke="#407bff"
              width={16}
              height={16}></Icon>
            Log out
          </button>
        </li>
      </ul>
      {isLogoutModalOpen && (
        <UserLogoutModal
          isOpen={isLogoutModalOpen}
          onClose={closeLogoutModal}
        />
      )}
      {isSettingModalOpen && (
        <SettingModal isOpen={isSettingModalOpen} onClose={closeSettingModal} />
      )}
    </>
  );
};

export default UserLogoModal;
