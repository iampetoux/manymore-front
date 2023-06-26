import { Fab } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { ButtonWrapper } from '@/components/AddWidgetButton/AddWidgetButton.styled';

const AddWidgetButton = () => {
  return (
    <ButtonWrapper>
      <Fab variant='extended'>
        <AddOutlinedIcon sx={{ mr: 1 }} />
        Ajouter un Widget
      </Fab>
    </ButtonWrapper>
  );
};

export default AddWidgetButton;