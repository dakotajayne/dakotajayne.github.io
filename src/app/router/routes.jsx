import { createBrowserRouter } from "react-router-dom";
import PageLayout from '../layouts/PageLayout';

// pages 
import Homepage from '../pages/Homepage';
import GalleryPage from '../pages/GalleryPage';
import SmiskiPage from '../pages/SmiskiPage';
import SonnyPage from '../pages/SonnyPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PageLayout/>,
        children: [
            {
                index: true, // default route 
                element: <Homepage/>
            },
            {
                path: "sonny",
                element: <SonnyPage/>
            },
            {
                path: "smiski",
                element: <SmiskiPage/>
            },
            {
                path: "gallery",
                element: <GalleryPage/>
            },
        ]
    }
])