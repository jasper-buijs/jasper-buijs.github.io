"use client";

import { useEffect, useState } from 'react';
import MobilePage from './mobile';
import DesktopPage from './desktop';

export default function Page() {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        const userAgent = navigator.userAgent || "";
        setIsMobile(/android|iphone|ipad|ipod/i.test(userAgent));
    }, []);

    if (isMobile === null) {
        return <h1>Loading...</h1>; // Fallback UI while detecting device
    }

    return isMobile ? <MobilePage /> : <DesktopPage />;
}