import React, { useState } from 'react';
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonImg,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from '@ionic/react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <IonPage>
    <IonContent className="login-page ion-padding">
      <IonCard>
        <IonImg src="/loginPhoto.png" alt="Login Image" className="login-image" />
      </IonCard>
  
      {/* Email Field */}
      <IonItem lines="none">
        <IonLabel >Email Address</IonLabel> {/* Label above the input */}
      </IonItem>
      <IonItem>
        <IonInput
          type="email"
          value={email}
          onIonChange={(e) => setEmail(e.detail.value!)}
          className="custom-field"
          placeholder="Enter your email"
        />
      </IonItem>
  
      {/* Password Field */}
      <IonItem lines="none">
        <IonLabel>Password</IonLabel> {/* Label above the input */}
      </IonItem>
      <IonItem>
        <IonInput
          type="password"
          value={password}
          onIonChange={(e) => setPassword(e.detail.value!)}
          className="custom-field"
          placeholder="Enter your password"
        />
      </IonItem>
  
      <IonButton expand="block" onClick={handleLogin}>
        Log in
      </IonButton>
  
      <div className="login-footer">
        Have an account? <Link to="/login">Log in</Link>
      </div>
    </IonContent>
  </IonPage>
  );
};

export default LoginPage;