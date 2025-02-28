import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonMenuButton, IonButtons } from '@ionic/react';

interface TopbarProps {
  title: string;
}

const Topbar: React.FC<TopbarProps> = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons className="custom-menu-button" slot="end">
          <IonMenuButton />
        </IonButtons>
        <IonTitle className="left-align-title">{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Topbar;