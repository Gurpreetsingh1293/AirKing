'use client';

import { useEffect } from 'react';

export default function TawkToChat() {
    useEffect(() => {
        // Only run in browser
        if (typeof window === 'undefined') return;

        // Tawk.to Live Chat Script
        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_LoadStart = new Date();

        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://embed.tawk.to/697f8dc4fd3ee61c36a86f1c/1jgd43j6k';
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');

        document.head.appendChild(script);

        return () => {
            // Cleanup on unmount
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return null;
}
