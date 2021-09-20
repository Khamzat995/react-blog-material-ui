import React from 'react';
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Paper,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  TextField,
  DialogTitle,
  CardActions,
  DialogActions,
  DialogContentText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LayerIcon from '@mui/icons-material/Layers';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BottomNavigation from '@mui/material/BottomNavigation';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DialogContent from '@mui/material/DialogContent';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    spacing: 1
  },
  title: {
    flexGrow: 1
  },
  mainFeaturesPost: {
    position: 'relative',
    marginTop: '25px',
    marginBottom: '32px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.3)"
  },
  mainFeaturesPostContent: {
    position: 'relative',
    padding: '42px',
    marginTop: '25px'
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: '25px'
  }
}))

const cards = [1,2,3,4,5,6,7,8,9];

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents')

  const handleChandge = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton edge="start"
                      color="inherit"
                      aria-laabel="menu"
                      className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h5' className={classes.title}>Fullstack Developer Blog</Typography>
          <Box mr={3}>
            <Button color="inherit" variant="outlined" onClick={handleClickOpen}>Log in</Button>
              <Dialog open={open} onClose={handleClose} aria-labelledby='from-dialog-title'>
                <DialogTitle id='from-dialog-title'>Log in</DialogTitle>
                <DialogContent>
                  <DialogContentText>Log in see videos</DialogContentText>
                  <TextField
                    autoFocus
                    margin='dense'
                    id='name'
                    label='Email Adress'
                    type='email'
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin='dense'
                    id='pass'
                    label='Password'
                    type='password'
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <button onClick={handleClose} color='primary'>Cancel</button>
                  <button onClick={handleClose} color='primary'>Log in</button>
                </DialogActions>
              </Dialog>
          </Box>
          <Button color="secondary" variant="contained">Sign Up</Button>
        </Toolbar>
      </Container>
    </AppBar>

      <main>
        <Paper className={classes.mainFeaturesPost}
        style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}>
          <Container fixed>
            <div className={classes.overlay}/>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography style={{ color: 'white' }} component='h2'
                              variant='h3'
                              color='inherit'
                              gutterBottom >

                    Web Developer Blog
                  </Typography>
                  <Typography style={{ color: 'white' }} variant='h6'
                              color='inherit'
                              paragraph >

                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                    Assumenda molestiae placeat
                    praesentium recusandae repellat.
                    A adipisci blanditiis ipsam
                    molestias quo repudiandae soluta.
                    Consectetur, officia rem?
                  </Typography>
                  <Button variant='contained' color='secondary'>
                    learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth='md'>
            <Typography variant='h3' textAlign='center' color='textPrimary' paddingTop='40px' gutterBottom>Fullstack Developer Blog</Typography>
            <Typography variant='h6' textAlign='center' color='textSecondary' paragraph>Lorem ipsum dolor sit amet,
              adipisicing elit. Amet aperiam dolore, dolorem doloremque eius est et explicabo illum, ipsum itaque nisi nulla numquam,
              pariatur perspiciatis quasi qui quidem rerum sequi tenetur.</Typography>
            <div className={classes.mainButtons}>
              <Grid container spacing={3} justifyContent='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>Жми сюда</Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>Или сюда</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key = {cards} xs={12} cm={6} md={4} >
                <Card className={classes.card}>
                  <CardMedia
                  className={classes.cardMedia}
                  image='https://source.unsplash.com/random'
                  title='image title'
                  alt='Photo'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                      Blog post
                    </Typography>
                    <Typography>
                      Blog post. Lorem ipsum dolor sit amet, adipisicing elit.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>
                        View
                    </Button>
                    <Button size='small' color='primary'>
                      Edit
                    </Button>
                    <LayerIcon />
                    <PlayCircleFilledIcon />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Typography variant='h6' textAlign='center' gutterBottom />
        <BottomNavigation
          value={value}
          onChange={handleChandge}
          className={classes.root}
        >
          <BottomNavigationAction
            label='Recents'
            value='recents'
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label='Favorites'
            value='favorites'
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label='Naerby'
            value='naerby'
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            label='Folder'
            value='folder'
            icon={<FolderIcon />}
          />
        </BottomNavigation>
        <Typography textAlign='center' color='textSecondary' component='p' variant='subtitle1'>
          Web Developer Blog js Material UI site
        </Typography>
      </footer>

    </>
  );
}

export default App;
