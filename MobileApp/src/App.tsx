import React from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Updated import
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be used */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <BrowserRouter> {/* Use BrowserRouter */}
      <IonRouterOutlet>
        <Routes> {/* Use Routes */}
          <Route path="/home" element={<Home />} /> {/* Use element prop */}
          <Route path="/product" element={<ProductPage />} /> {/* Use element prop */}
          <Route path="/" element={<Navigate to="/home" replace />} /> {/* Use Navigate */}
        </Routes>
      </IonRouterOutlet>
    </BrowserRouter>
  </IonApp>
);

export default App;