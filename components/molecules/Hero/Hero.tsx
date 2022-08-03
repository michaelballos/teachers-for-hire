import {
  Title,
  Text,
  Container,
  Button,
  Overlay,
} from '@mantine/core';
import { useStyles } from './Hero.styles';

export default function Hero() {
  const {
    classes,
    cx,
  } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay
        color="#000"
        opacity={0.65}
        zIndex={1}
      />

      <div className={classes.inner}>
        <Title className={classes.title}>
          An educational organization dedicated to the persuit of educational excellence and opportunities for{' '}
          <Text
            component="span"
            inherit
            className={classes.highlight}
          >
            Teachers
          </Text>
        </Title>

        <Container size={640}>
          <Text
            size="lg"
            className={classes.description}
          >
            We are a group of teachers and students dedicated to the
            pursuit of educational excellence.
            Learn more about our mission and our values.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            variant="white"
            size="lg"
          >
            For Teachers
          </Button>
          <Button
            className={cx(classes.control, classes.secondaryControl)}
            size="lg"
          >
            For Employers
          </Button>
        </div>
      </div>
    </div>
  );
}
