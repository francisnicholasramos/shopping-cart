import { Route, Routes } from "react-router-dom";

type RouteSwitchProps = {
    Header: React.ReactNode;
    pages: Page[]
}

type Page = {
    path: string;
    element: React.ReactNode;
}

const RouteSwitch: React.FC<RouteSwitchProps> = ({ Header, pages }) => {
    return (
        <>
            {Header}
            <Routes>
                {pages.map((page) => (
                    <Route path={page.path} element={page.element} />
                ))}
            </Routes>
        </>
    );
}

export default RouteSwitch;
