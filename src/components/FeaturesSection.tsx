import { cn } from "@/lib/utils";
import { ThemeIcon, Text } from "@mantine/core";
import { features } from "@/lib/content-data";

export default function FeatureSection({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                className,
                "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12"
            )}>
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="flex items-center gap-3">
                    <ThemeIcon
                        variant="gradient"
                        radius="md"
                        className="size-12 shrink-0">
                        <feature.icon className="size-8" />
                    </ThemeIcon>
                    <Text
                        className="leading-tight"
                        variant="gradient"
                        size="lg"
                        fw="600">
                        {feature.title}
                    </Text>
                </div>
            ))}
        </div>
    );
}
