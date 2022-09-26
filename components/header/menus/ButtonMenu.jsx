import React from 'react';
import { NavigationLinkButton } from '../navigation/NavigationLinkButton';

export const ButtonMenu = ({ open, onClick, text, onClose }) => {
  return (
    <NavigationLinkButton
      id={`${text}-button`}
      aria-controls={open ? `${text}-menu` : undefined}
      aria-haspopup='true'
      aria-expanded={open ? 'true' : undefined}
      onClick={onClick}
    >
      {text}
    </NavigationLinkButton>
  )
}
