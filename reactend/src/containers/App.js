import React from 'react';
import TopNav from '../components/TopNav';
import Header from '../components/Header';
import GradientBackground from '../components/GradientBackground';
import Footer from '../components/Footer';

/*import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import SigninContainer from './SigninContainer';
*/
const App = () => (
  <div>
    <GradientBackground />
    <TopNav />
    <Header />
    <Footer />
  </div>
);

export default App;
