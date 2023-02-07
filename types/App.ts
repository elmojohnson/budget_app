export interface Navigation {
    isMobileOpen: boolean;
    handleDrawerToggle: () => void;
    routes: Route[];
}

export interface Route {
    label: string;
    href: string;
}