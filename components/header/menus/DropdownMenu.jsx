import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, Menu, Slide } from '@mui/material';
import styled from '@emotion/styled';

const CustomMenu = styled(Menu)`
  & .MuiPaper-root {
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    background-color: #333;
  }
`;

export const DropdownMenu = ({ anchorEl, onClose, children, text, open }) => {
  return (
    <CustomMenu
      id={`${text}-menu`}
      aria-labelledby={`${text}-button`}
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      TransitionComponent={Collapse}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      {children}
    </CustomMenu>
  );
};

DropdownMenu.propTypes = {
  anchorEl: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  open: PropTypes.bool.isRequired,
};
