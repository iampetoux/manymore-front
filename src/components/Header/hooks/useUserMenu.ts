import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState } from 'react';

type MenuItems = {
  name: string;
  href?: string;
  onClick?: () => void;
};

const getMenuItems = (handleLogout: () => void) => {
  return [
      {
        name: 'Mon compte',
        href: '/settings',
      },
      {
        name: 'Déconnexion',
        onClick: handleLogout,
      },
    ];
};

const useUserMenu = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  // const { user, isFetching } = useUser();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  let menuItems: MenuItems[] = [];

  /*const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };*/

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
  };

  /*const { mutate } = useMutation({
    mutationKey: 'logout',
    mutationFn: logout,
    onSuccess: async () => {
      queryClient.removeQueries('getUser');
      await router.push('/connexion');
    },
  });*/

  /*if (!user && !isFetching) {
    menuItems = getMenuItems(false, handleLogout);
  } else if (user) {
    menuItems = getMenuItems(true, handleLogout);
  }*/

  menuItems = getMenuItems(handleLogout);

  return { menuItems, anchorEl };
};

export default useUserMenu;
