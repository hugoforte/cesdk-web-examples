import { useEditor } from '../../EditorContext';
import AdjustmentsBar from '../AdjustmentsBar/AdjustmentsBar';
import AdjustmentsBarButton from '../AdjustmentsBarButton/AdjustmentsBarButton';

import { ReactComponent as CheckmarkIcon } from '../../icons/Checkmark.svg';
import { ReactComponent as ResetIcon } from '../../icons/Reset.svg';

const CropModeSecondary = () => {
  const { creativeEngine } = useEditor();

  const resetCurrentCrop = () => {
    const allSelectedImageElements = creativeEngine.block.findAllSelected();
    allSelectedImageElements.forEach((imageElementId) => {
      creativeEngine.block.resetCrop(imageElementId);
    });
  };

  return (
    <AdjustmentsBar>
      <AdjustmentsBarButton
        onClick={() => creativeEngine.editor.setEditMode('Transform')}
      >
        <span>
          <CheckmarkIcon style={{ color: 'green' }} />
        </span>
        <span>Done</span>
      </AdjustmentsBarButton>
      <AdjustmentsBarButton onClick={() => resetCurrentCrop()}>
        <span>
          <ResetIcon />
        </span>
        <span>Reset</span>
      </AdjustmentsBarButton>
    </AdjustmentsBar>
  );
};
export default CropModeSecondary;
