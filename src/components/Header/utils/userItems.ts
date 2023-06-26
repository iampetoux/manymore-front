type MenuItems = {
  name: string;
  href?: string;
  onClick?: () => void;
};

export const userItems: MenuItems[] = [
  {
    name: 'Mon compte',
    href: '/settings',
  },
  {
    name: 'Déconnexion',
    onClick: handleLogout,
  },
];