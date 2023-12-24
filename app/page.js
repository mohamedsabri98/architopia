'use client';
import SSRProvider from 'react-bootstrap/SSRProvider';

import MyNavbar from './(allhome)/Navbar/Navbar';
import Slider from './Swiper/swiper';

export default function Home() {
    return (
        <main>
            <SSRProvider>
                <MyNavbar />
                <h1 className="text-danger">Hello Bootstrap</h1>
                <Slider />
            </SSRProvider>
        </main>
    );
}
