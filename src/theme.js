import { createTheme } from '@mui/material/styles';

export const createdTheme = createTheme({
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          padding: '18px',
          width: '230px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          borderRadius: '10px',
          borderColor: '#CFD6DE',
          input: {
            //
            // background: '#F9F9FA',
            // borderRadius: '10px',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },
  },
});

export const container = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 924,
  border: 'none',
  boxShadow: 24,
  p: 4,
  backgroundColor: '#fff',
  borderRadius: '0 0 20px 20px',
  overflowY: 'auto',
  height: '100%',
  maxHeight: '974px',
};

export const contained = {
  background: '#6367F6',
  color: '#fff',
};

export const outlined = {
  border: '1px solid #EDEFF1',
  marginRight: '20px',
};

export const closeBtn = {
  position: 'absolute',
  right: '20px',
  width: '24px',
  height: '24px',
};

export const ITEM_HEIGHT = 48;
export const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
