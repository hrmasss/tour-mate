import { type MantineThemeOverride, DEFAULT_THEME } from "@mantine/core";
import { sora } from "@/app/layout";

export const themeOverride: MantineThemeOverride = {
    primaryShade: { light: 5, dark: 6 },
    primaryColor: "orange",
    autoContrast: true,
    defaultGradient: {
        from: "orange",
        to: "yellow",
        deg: 45,
    },
    fontFamily: `${sora.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
};
