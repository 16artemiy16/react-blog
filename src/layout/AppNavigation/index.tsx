import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const DivMenuItems = styled.div`
  display: flex;
  flex: 1;
  
  & .spacer {
    flex: 1;
  }
`;

export const AppNavigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          React Blog
        </Typography>
        <DivMenuItems>
          <Button color="inherit" component={Link} to="/blog">Blog</Button>
          <div className="spacer" />
          <Button color="inherit" component={Link} to="/sign-in">Sign In</Button>
          <Button color="inherit" component={Link} to="/sign-up">Sign Up</Button>
        </DivMenuItems>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavigation;
