'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './page.module.css';

const productsData = [
    // Compressors
    {
        id: 1,
        name: 'Four Stage Air Compressor',
        category: 'compressor',
        description: 'Heavy duty industrial four stage air compressor for high pressure applications.',
        image: '/images/four-stage-compressor.png',
        specs: {
            'Type': 'Four Stage',
            'Pressure': 'High Pressure',
            'Usage': 'Industrial'
        }
    },
    {
        id: 2,
        name: 'Kirloskar Type Air Compressor',
        category: 'compressor',
        description: 'Robust reciprocating air compressor designed for durability and continuous duty.',
        image: '/images/kirloskar-compressor.png',
        specs: {
            'Type': 'Reciprocating',
            'Cooling': 'Air Cooled',
            'Material': 'Cast Iron'
        }
    },
    {
        id: 3,
        name: 'Vertical Air Compressor',
        category: 'compressor',
        description: 'Space-saving vertical design air compressor, ideal for workshops with limited floor space.',
        image: '/images/compressor.png', // Reusing existing generic image
        specs: {
            'Orientation': 'Vertical',
            'Power': '25-250 HP',
            'Efficiency': 'High'
        }
    },

    // Oxygen Plant Components
    {
        id: 4,
        name: 'Expansion Engine',
        category: 'oxygen',
        description: 'High-precision stainless steel expansion engine for oxygen plants. Critical for cryogenic cooling.',
        image: '/images/expansion-engine.png',
        specs: {
            'Material': 'Stainless Steel',
            'Application': 'Oxygen Plant',
            'Type': 'High Pressure'
        }
    },
    {
        id: 5,
        name: 'Liquid Oxygen Pump',
        category: 'pumps',
        description: 'Specialized cryogenic pump for handling liquid oxygen. Designed for safety and reliability.',
        image: '/images/liquid-oxygen-pump.png',
        specs: {
            'Fluid': 'Liquid Oxygen',
            'Type': 'Cryogenic',
            'Material': 'SS 304/316'
        }
    },

    // Spares & Valves
    {
        id: 6,
        name: 'Safety Relief Valve',
        category: 'valves',
        description: 'Industrial brass safety valve for over-pressure protection in compressors and tanks.',
        image: '/images/safety-valve.png',
        specs: {
            'Material': 'Brass',
            'Pressure': 'Adjustable',
            'Connection': 'Threaded'
        }
    },
    {
        id: 7,
        name: 'Aftercooler Assembly',
        category: 'spares',
        description: 'Efficient heat exchanger to cool compressed air and remove moisture.',
        image: '/images/aftercooler.png',
        specs: {
            'Type': 'Fin Tube',
            'Material': 'Copper/Steel',
            'Function': 'Cooling'
        }
    },
    {
        id: 8,
        name: 'Cylinder Valve',
        category: 'valves',
        description: 'High pressure cylinder valves for oxygen and medical gas cylinders.',
        image: '/images/safety-valve.png', // Reusing safety valve image for generic valve look
        specs: {
            'Gas': 'Oxygen/Medical',
            'Standard': 'Industrial',
            'Operation': 'Manual'
        }
    },
    {
        id: 9,
        name: 'Air Oil Separator',
        category: 'spares',
        description: 'Premium quality separator element to ensure oil-free air delivery.',
        image: '/images/spares.png', // Reusing generic spares image
        specs: {
            'Efficiency': '99.9%',
            'Life': 'Long Service',
            'Type': 'Spin-on/Element'
        }
    }
];

export default function ProductsPage() {
    const [filter, setFilter] = useState('all');

    const filteredProducts = filter === 'all'
        ? productsData
        : productsData.filter(p => p.category === filter);

    const categories = [
        { id: 'all', label: 'All Products' },
        { id: 'compressor', label: 'Air Compressors' },
        { id: 'oxygen', label: 'Oxygen Plant Spares' },
        { id: 'valves', label: 'Industrial Valves' },
        { id: 'pumps', label: 'Industrial Pumps' },
        { id: 'spares', label: 'Spares & Accessories' },
    ];

    return (
        <div className={styles.pageContainer}>
            <div className="container">
                <header className={styles.header}>
                    <h1 className={styles.pageTitle}>Our Products</h1>
                    <p className={styles.pageDesc}>
                        Comprehensive range of Air Compressors, Oxygen Plant Components, and Industrial Spares.
                    </p>
                </header>

                <div className={styles.filters}>
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            className={`${styles.filterBtn} ${filter === cat.id ? styles.active : ''}`}
                            onClick={() => setFilter(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className={styles.grid}>
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
