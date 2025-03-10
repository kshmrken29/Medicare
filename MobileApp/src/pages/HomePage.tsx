import React from "react";
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonIcon,
  IonButton,
  IonMenu,
  IonList,
  IonItem,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import "./Home.css";
import {
  homeOutline,
  cubeOutline,
  arrowForward,
} from "ionicons/icons";
import Topbar from "../components/Topbar";

const HomePage: React.FC = () => { 
  return (
    <>
      <IonMenu side="end" contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="homecard">
          <IonList>
            <IonItem routerLink="/home" routerDirection="forward">
              <IonIcon icon={homeOutline} slot="start" />
              <IonLabel>Home</IonLabel>
            </IonItem>
            <IonItem routerLink="/product" routerDirection="forward">
              <IonIcon icon={cubeOutline} slot="start" />
              <IonLabel>Product</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <Topbar title="Medicare Mobile" />
        <IonContent className="ion-padding">
          <IonCard>
            <IonImg src="/pills.png" alt="Top Product" />
            <IonCardHeader>
              <IonCardTitle
                style={{
                  color: "black",
                  fontSize: "1.5em",
                  fontWeight: "bold",
                }}
              >
                MEDICARE
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>
                Your go-to for top-quality food supplements to support your
                health and wellness.
              </p>
              <IonButton
                expand="block"
                routerLink="/product"
                className="custom-shop-button"
              >
                SHOP NOW <IonIcon icon={arrowForward} slot="end" />
              </IonButton>
              <IonButton
                 expand="block"
                 fill="outline"
                 routerLink="/login"
                 className="custom-sign-button"
              >
                SIGN IN
              </IonButton>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </>
  );
};

export default HomePage; 