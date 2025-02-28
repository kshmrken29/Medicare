import React from 'react';
import { IonPage, IonContent } from '@ionic/react';

const ProductPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h1>Product Page Content</h1> {/* Added heading */}
        <p>This is the content of the Product Page.</p>
      </IonContent>
    </IonPage>
  );
};

export default ProductPage;