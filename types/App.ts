export interface App {
    isLoggedIn: boolean;
    isMobileOpen: boolean;
    handleDrawerToggle: () => void;
    routes: Route[];
}

export interface Route {
    label: string;
    href: string;
}