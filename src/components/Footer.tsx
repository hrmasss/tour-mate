"use client";

import { Text, ActionIcon, Group, rem, Box } from "@mantine/core";
import Logo from "@/components/Logo";
import styles from "@/styles/modules/footer.module.css";
import { homeLink, toursLink, navLinks, tourTypes } from "@/lib/nav-data";
import {
    IconBrandTwitter,
    IconBrandYoutube,
    IconBrandInstagram,
} from "@tabler/icons-react";

export default function Footer({ className }: { className?: string }) {
    const navLinksGroup = (
        <div className={styles.wrapper}>
            <Text className={styles.title}>Navigation</Text>
            <Text<"a">
                className={styles.link}
                component="a"
                href={homeLink.url}>
                {homeLink.title}
            </Text>
            <Text<"a">
                className={styles.link}
                component="a"
                href={toursLink.url}>
                {toursLink.title}
            </Text>
            {navLinks.map((link, index) => (
                <Text<"a">
                    key={index}
                    className={styles.link}
                    component="a"
                    href={link.url}>
                    {link.title}
                </Text>
            ))}
        </div>
    );

    const tourTypesGroup = (
        <div className={styles.wrapper}>
            <Text className={styles.title}>Tours</Text>
            {tourTypes.map((tour, index) => (
                <div
                    key={index}
                    className="flex items-center gap-2">
                    <div>
                        <Text className={styles.link}>{tour.title}</Text>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <footer className={styles.footer}>
            <div className={className}>
                <div className="flex flex-col sm:flex-row w-full justify-between gap-4 max-w-fit mx-auto sm:max-w-full">
                    <div className={styles.logo}>
                        <Box className="inline-flex gap-2 items-center">
                            <Logo />
                            <span className="text-lg font-bold">TourMate</span>
                        </Box>
                        <Text
                            size="xs"
                            c="dimmed"
                            className={styles.description}>
                            Go to worlds end and beyond.
                        </Text>
                    </div>
                    <div className={styles.groups}>
                        {navLinksGroup}
                        {tourTypesGroup}
                    </div>
                </div>
                <div className={styles.afterFooter}>
                    <Text
                        c="dimmed"
                        size="sm">
                        © 2024 TourMate.
                    </Text>
                    <Group
                        gap={0}
                        className={styles.social}
                        justify="flex-end"
                        wrap="nowrap">
                        <ActionIcon
                            size="lg"
                            color="gray"
                            variant="subtle">
                            <IconBrandTwitter
                                style={{ width: rem(18), height: rem(18) }}
                                stroke={1.5}
                            />
                        </ActionIcon>
                        <ActionIcon
                            size="lg"
                            color="gray"
                            variant="subtle">
                            <IconBrandYoutube
                                style={{ width: rem(18), height: rem(18) }}
                                stroke={1.5}
                            />
                        </ActionIcon>
                        <ActionIcon
                            size="lg"
                            color="gray"
                            variant="subtle">
                            <IconBrandInstagram
                                style={{ width: rem(18), height: rem(18) }}
                                stroke={1.5}
                            />
                        </ActionIcon>
                    </Group>
                </div>
            </div>
        </footer>
    );
}
