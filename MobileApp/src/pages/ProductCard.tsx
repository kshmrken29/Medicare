// ProductCard.tsx
import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonImg, IonTitle } from '@ionic/react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    price: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <IonCard key={product.id}>
      <IonImg src={product.imageUrl} />
      <IonCardHeader>
        <IonTitle>{product.name}</IonTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default ProductCard;