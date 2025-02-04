'use client';

import { useEffect, useState } from 'react';
import MobilePage from './mobile';
import DesktopPage from './desktop';

export default function MobileOrDesktop({ raceId }: { raceId: string }) {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        const userAgent = navigator.userAgent || "";
        setIsMobile(/android|iphone|ipad|ipod/i.test(userAgent));
    }, []);

    if (isMobile === null) {
        return <h1>Loading...</h1>; // Fallback UI while detecting device
    }

    // Dynamically render MobilePage or DesktopPage based on device type
    return isMobile ? <MobilePage raceId={raceId} /> : <DesktopPage raceId={raceId} />;
}