import { Button, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { theme } from '../../../styles/theme';
import { ButtonMenu } from './ButtonMenu';
import { DropdownMenu } from './DropdownMenu';

const boxes = [
  {
    text: 'sap',
    link: '/sap'
  },
];

export default function ExpertiseMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { t } = useTranslation('navigation');
  return (
    <>
      <ButtonMenu text={t('expertise')} onClick={handleClick} open={open} onClose={handleClose} />
      <DropdownMenu
        text={t('expertise')}
        anchorEl={anchorEl}
        onClose={handleClose}
        open={open}>
        {boxes.map((box, key) => (
          <Link key={key} href={box.link}>
            <MenuItem
              sx={{
                color: theme.text.link.color
              }}>
              {t(box.text)}
            </MenuItem>
          </Link>
        ))}
      </DropdownMenu>
    </>
  );
}
