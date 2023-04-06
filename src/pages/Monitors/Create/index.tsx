import { Modal } from 'components';

interface IProps {
  open: boolean
  onClose: () => void
}

function Create({ open, onClose }: IProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Create monitor"
    >
      index
    </Modal>
  );
}

export default Create;
