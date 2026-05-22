import AppLogoIcon from './app-logo-icon';
import logoUrl from '../../images/Logo.png';

export default function AppLogo() {
    return (
        <>
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center overflow-hidden rounded-md">
                <img src={logoUrl} alt="Logo" className="h-full w-full object-contain p-1" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-none font-semibold">Vincent Duong</span>
            </div>
        </>
    );
}
