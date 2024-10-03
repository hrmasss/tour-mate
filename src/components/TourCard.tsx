"use client";

import styles from "@/styles/modules/tour-card.module.css";
import { IconHeart, IconCurrencyTaka, IconClock } from "@tabler/icons-react";
import Image from "next/image";
import { Card, Text, Group, Button, ActionIcon, Rating } from "@mantine/core";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface Tour {
    title: string;
    image: string;
    slug: string;
    rating: number;
    reviews: number;
    startingPrice: number;
    duration: string;
}

interface TourCardProps {
    tour: Tour;
    className?: string;
}

export default function TourCard({ tour, className }: TourCardProps) {
    return (
        <Card
            withBorder
            radius="md"
            p="md"
            className={cn(styles.card, className, "group")}>
            {/* Image Section */}
            <Card.Section className="h-[150px] relative overflow-hidden">
                <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="size-full object-cover group-hover:scale-105 transition duration-300"
                />
            </Card.Section>

            {/* Title Section */}
            <Card.Section
                className={styles.section}
                mt="md">
                <Text
                    fz="md"
                    fw={500}
                    lineClamp={1}>
                    {tour.title}
                </Text>
            </Card.Section>

            {/* Rating, Reviews, Price, and Duration */}
            <Card.Section className={cn(styles.section, "pt-3")}>
                <Group justify="space-between">
                    <Rating
                        value={tour.rating}
                        readOnly
                    />
                    <Text
                        fz="sm"
                        c="dimmed"
                        fw={500}>
                        {tour.reviews} Reviews
                    </Text>
                </Group>

                {/* Price and Duration */}
                <Group
                    justify="space-between"
                    mt="sm">
                    {/* Starting Price */}
                    <div className="flex gap-1 items-center">
                        <IconCurrencyTaka className="size-5" />
                        <Text
                            fz="md"
                            fw={500}>
                            From {tour.startingPrice}
                        </Text>
                    </div>

                    {/* Duration */}
                    <div className="flex gap-1 items-center">
                        <IconClock className="size-5" />
                        <Text
                            fz="md"
                            fw={500}>
                            {tour.duration}
                        </Text>
                    </div>
                </Group>
            </Card.Section>

            {/* Actions */}
            <Group mt="xs">
                <Button
                    href={`/tours/${tour.slug}`}
                    component={Link}
                    radius="md"
                    style={{ flex: 1 }}>
                    Show details
                </Button>
                <ActionIcon
                    variant="default"
                    radius="md"
                    size={36}>
                    <IconHeart
                        className={styles.like}
                        stroke={1.5}
                    />
                </ActionIcon>
            </Group>
        </Card>
    );
}
