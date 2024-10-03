"use client";

import styles from "@/styles/modules/header.module.css";
import { useDisclosure } from "@mantine/hooks";
import Logo from "@/components/Logo";
import Link from "next/link";
import {
    homeLink,
    toursLink,
    navLinks,
    tourTypes,
    phoneNumber,
} from "@/lib/nav-data";
import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    useMantineTheme,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export function Header({ className }: { className?: string }) {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
        useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();

    const tourLinks = tourTypes.map((item) => (
        <UnstyledButton
            className={styles.subLink}
            key={item.title}>
            <Group
                wrap="nowrap"
                align="flex-start">
                <ThemeIcon
                    size={34}
                    variant="default"
                    radius="md">
                    <item.icon
                        style={{ width: rem(22), height: rem(22) }}
                        color={theme.primaryColor}
                    />
                </ThemeIcon>
                <div>
                    <Text
                        size="sm"
                        fw={500}>
                        {item.title}
                    </Text>
                    <Text
                        size="xs"
                        c="dimmed">
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    ));

    return (
        <Box
            mb={120}
            className={styles.header}>
            <header className={cn("py-3", className)}>
                <Group
                    justify="space-between"
                    h="100%">
                    <Box
                        c={theme.primaryColor}
                        className="inline-flex gap-2 items-center">
                        <Logo />
                        <span className="text-lg font-bold">TourMate</span>
                    </Box>

                    {/* Desktop Navigation */}
                    <Group
                        h="100%"
                        gap={0}
                        visibleFrom="sm">
                        {/* Home Link */}
                        <Link
                            href={homeLink.url}
                            className={styles.link}>
                            {homeLink.title}
                        </Link>

                        {/* Tours Dropdown */}
                        <HoverCard
                            width={600}
                            position="bottom"
                            radius="md"
                            shadow="md"
                            withinPortal>
                            <HoverCard.Target>
                                <Link
                                    href={toursLink.url}
                                    className={styles.link}>
                                    <Center inline>
                                        <Box
                                            component="span"
                                            mr={5}>
                                            {toursLink.title}
                                        </Box>
                                        <IconChevronDown
                                            style={{
                                                width: rem(16),
                                                height: rem(16),
                                            }}
                                            color={theme.primaryColor}
                                        />
                                    </Center>
                                </Link>
                            </HoverCard.Target>

                            <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                                <Group
                                    justify="space-between"
                                    px="md">
                                    <Text fw={500}>Tours</Text>
                                    <Anchor
                                        component={Link}
                                        href={toursLink.url}
                                        fz="xs">
                                        View all
                                    </Anchor>
                                </Group>

                                <Divider my="sm" />

                                <SimpleGrid
                                    cols={2}
                                    spacing={0}>
                                    {tourLinks}
                                </SimpleGrid>
                            </HoverCard.Dropdown>
                        </HoverCard>

                        {/* Render other links */}
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                href={link.url}
                                className={styles.link}>
                                {link.title}
                            </Link>
                        ))}
                    </Group>

                    <Group visibleFrom="sm">
                        <Button
                            component="a"
                            href={`tel:${phoneNumber}`}>
                            Call Us
                        </Button>
                    </Group>

                    {/* Mobile Navigation */}
                    <Burger
                        opened={drawerOpened}
                        onClick={toggleDrawer}
                        size="sm"
                        hiddenFrom="sm"
                    />
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Menu"
                hiddenFrom="sm"
                zIndex={1000000}>
                <ScrollArea
                    h="calc(100vh - 90px)"
                    mx="-md">
                    <Divider my="sm" />

                    <div className="space-y-6">
                        {/* Home Link */}
                        <Link
                            href={homeLink.url}
                            className={styles.link}>
                            {homeLink.title}
                        </Link>

                        {/* Tours Dropdown in Mobile */}
                        <UnstyledButton
                            className={styles.link}
                            onClick={toggleLinks}>
                            <Box
                                component="span"
                                mr={5}>
                                {toursLink.title}
                            </Box>
                            <IconChevronDown
                                style={{
                                    width: rem(16),
                                    height: rem(16),
                                    marginLeft: rem(6),
                                }}
                                color={theme.primaryColor}
                            />
                        </UnstyledButton>
                        <Collapse in={linksOpened}>{tourLinks}</Collapse>

                        {/* Render other links */}
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                href={link.url}
                                className={styles.link}>
                                {link.title}
                            </Link>
                        ))}
                    </div>

                    <Divider my="sm" />

                    <Group
                        justify="center"
                        grow
                        pb="xl"
                        px="md">
                        <Button
                            component="a"
                            href={`tel:${phoneNumber}`}>
                            Call Us
                        </Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}
