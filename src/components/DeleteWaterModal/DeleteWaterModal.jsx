import { useDispatch } from 'react-redux';
import { deleteWaterEntrie } from '../../redux/water/operations.js';
import ModalContainer from '../ui/ModalContainer/ModalContainer.jsx';
import Icon from '../ui/Icon.jsx';
import Button from '../ui/Button/Button.jsx';
import css from './DeleteWaterModal.module.css';
import toast from 'react-hot-toast';

const DeleteWaterModal = ({ isOpen, onClose, id }) => {
  const dispatch = useDispatch();

  const handleDeleteWater = async () => {
    try {
      await dispatch(deleteWaterEntrie(id)).unwrap();
      toast.success('Water serving note successfully deleted');
      onClose();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      <div className={css.modalContent}>
        <div className={css.modalHeader}>
          <h2 className={css.title}>Delete entry</h2>
          <button className={css.closeBtn} onClick={onClose} aria-label="Close">
            <Icon name="icon-x-mark" width={24} height={24} />
          </button>
        </div>
        <p className={css.subtitle}>
          Are you sure you want to delete the entry?
        </p>
        <div className={css.buttonGroup}>
          <Button
            onClick={handleDeleteWater}
            variant="destructive"
            className={css.deleteBtn}
          >
            Delete
          </Button>
          <Button onClick={onClose} variant="cancel" className={css.cancelBtn}>
            Cancel
          </Button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default DeleteWaterModal;
