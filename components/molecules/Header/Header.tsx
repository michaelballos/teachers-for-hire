import {
  Header as MantineHeader,
  Menu,
  Group,
  Center,
  Burger,
  Container,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ChevronDown from '../../atoms/ChevronDown';
import { useStyles } from './Header.styles';
import ColorSchemeToggle from '../../atoms/ColorSchemeToggle/ColorSchemeToggle';

interface HeaderSearchProps {
  links: {
    link: string;
    label: string;
    links: {
      link: string;
      label: string
    }[]
  }[];
}

export default function Header({ links }: HeaderSearchProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          exitTransitionDuration={0}
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <ChevronDown />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <MantineHeader
      className={classes.header}
      height={56}
    >
      <Container>
        <div className={classes.inner}>
          <Text>Logo</Text>
          <Group
            spacing={5}
            className={classes.links}
          >
            <ColorSchemeToggle />
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
        </div>
      </Container>
    </MantineHeader>
  );
}
