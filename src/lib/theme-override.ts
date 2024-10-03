import { type MantineThemeOverride, DEFAULT_THEME } from "@mantine/core";
import { sora } from "@/app/layout";

export const themeOverride: MantineThemeOverride = {
    primaryShade: { light: 6, dark: 7 },
    primaryColor: "lime",
    autoContrast: true,
    defaultGradient: {
        from: "lime",
        to: "yellow",
        deg: 45,
    },
    fontFamily: `${sora.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
};
