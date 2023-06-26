import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import { CardActionButton, CardHeaderStyled } from '@/components/Widget/Widget.styled';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { ReactNode } from 'react';

type WidgetProps = {
  title: string;
  children: ReactNode;
}

const Widget = ({ title, children }: WidgetProps) => {
  return (
    <Card>
      <CardHeaderStyled
        title={title}
        action={
          <CardActionButton>
            <SettingsOutlinedIcon />
          </CardActionButton>
        }
      />
      <CardContent>
        {children}
      </CardContent>
    </Card>
);
};

export default Widget;