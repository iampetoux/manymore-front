import styled from '@emotion/styled';
import { AppBar, Button, Typography } from '@mui/material';
import Link from 'next/link';

export const AppBarStyled = styled(AppBar)`
  position: static;
  box-shadow: none;
  background-color: #fff;
  color: #000000;
  border-bottom: 2px solid #eeeeee;
`;

export const HeaderLogo = styled(Typography)`
  color: #000000;
  margin: 0 24px 0 0;
  text-decoration: none;
  font-weight: 700;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: dodgerblue;
  }
`;

export const PageLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: dodgerblue;
  }
`;