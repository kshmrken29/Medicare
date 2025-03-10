// ProductPage.tsx
import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardContent, IonTitle, IonButton, IonImg } from '@ionic/react'; // Import IonImg
import Topbar from '../components/Topbar';
import { products } from './products';
import ProductCard from './ProductCard';
import "./ProductPage.css";

const ProductPage: React.FC = () => {
  const [showTopDeals, setShowTopDeals] = useState(true);

  const handleCloseTopDeals = () => {
    setShowTopDeals(false);
  };

  return (
    <IonPage>
      <Topbar title="Products" />
      <IonContent className="ion-padding">
        {showTopDeals && (
          <IonCard>
            <IonCardHeader>
              <IonTitle>Top Deals!</IonTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonImg src="/pillstop.png" />
              <p>Check out our amazing top deals!</p>
              <IonButton onClick={handleCloseTopDeals}>Show Products</IonButton>
            </IonCardContent>
          </IonCard>
        )}
        {!showTopDeals && (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ProductPage;