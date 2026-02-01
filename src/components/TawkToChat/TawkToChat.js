'use client';

import { useEffect } from 'react';

export default function TawkToChat() {
    useEffect(() => {
        // Tawk.to Live Chat Script
        var Tawk_API = window.Tawk_API || {};
        var Tawk_LoadStart = new Date();

        (function () {
            var s1 = document.createElement("script");
            var s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            // Replace with your Tawk.to property ID
            s1.src = 'https://embed.tawk.to/YOUR_PROPERTY_ID/default';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        })();
    }, []);

    return null; // This component doesn't render anything
}
