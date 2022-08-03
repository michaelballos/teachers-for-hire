import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
  },
  parallax: {
    background: 'url(https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_scale,w_800/v1/media/gmg/VUVBR2Z3OBG3LF6JAG7RMAGZIE.jpg?_a=AJAEtWI0)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    width: '100vw',
    height: '20em',
  },
  card: {
    position: 'absolute',
    width: '40em',
    height: '30em',
    marginTop: '10em',
  },
  title: {
    fontSize: '3em',
    textAlign: 'center',
  },
}));
