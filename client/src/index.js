import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app.jsx';
import './assets/stylesheets/styles.css';
import './assets/stylesheets/relatedStyles.css';
import './assets/stylesheets/stylesPD.css';
import './assets/stylesheets/QnAStyles.css';
import './assets/stylesheets/ratingsReviewsStyles.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
