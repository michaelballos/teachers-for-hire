import { Text } from '@mantine/core';
import { useStyles } from './Mission.styles';

export default function Mission() {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Text>
        Our Mission
      </Text>
    </div>
  );
}
