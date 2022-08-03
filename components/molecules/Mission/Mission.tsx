import {
  Text,
  Paper
} from '@mantine/core';
import { useStyles } from './Mission.styles';

export default function Mission() {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Paper
        className={classes.card}
        shadow="xl"
        radius="lg"
        p="lg"
      >
        <Text className={classes.title}>
          Our Mission
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          euismod, nisl eget consectetur sagittis, nisl nunc egestas
          purus, euismod aliquet nisi nisl euismod. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis,
          nisl nunc egestas purus, euismod aliquet nisi nisl euismod.
        </Text>
      </Paper>
      <div className={classes.parallax} />
    </div>
  );
}
