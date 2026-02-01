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
        image: '/images/compressor.png',
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
        image: '/images/Expansion-Engine.jpg',
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
        image: '/images/safety-valve.png',
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
        image: '/images/spares.png',
        specs: {
            'Efficiency': '99.9%',
            'Life': 'Long Service',
            'Type': 'Spin-on/Element'
        }
    },
    {
        id: 10,
        name: 'Ball Valve',
        category: 'oxygen',
        description: 'High-quality ball valve for oxygen plant applications.',
        image: '/images/ball-valve-1.jpg',
        specs: {
            'Material': 'Stainless Steel',
            'Type': 'Two Piece',
            'Application': 'Oxygen Line'
        }
    },
    {
        id: 11,
        name: 'Piston Rings',
        category: 'oxygen',
        description: 'Precision-engineered piston rings for oxygen compressors.',
        image: '/images/ball-valve-1.jpg',
        specs: {
            'Material': 'Special Alloy',
            'Type': 'Compression',
            'Application': 'Compressor'
        }
    },
    {
        id: 12,
        name: 'Push Rod',
        category: 'oxygen',
        description: 'Heavy-duty push rod for oxygen plant machinery.',
        image: '/images/ball-valve-1.jpg',
        specs: {
            'Material': 'Hardened Steel',
            'Type': 'Solid',
            'Application': 'Engine Parts'
        }
    },
    {
        id: 13,
        name: 'Gasket',
        category: 'oxygen',
        description: 'Industrial grade gaskets for leak-proof sealing.',
        image: '/images/ball-valve-1.jpg',
        specs: {
            'Material': 'PTFE/Graphite',
            'Type': 'Ring',
            'Application': 'Sealing'
        }
    },
    {
        id: 14,
        name: 'Liner',
        category: 'oxygen',
        description: 'Precision liner for compressor cylinders.',
        image: '/images/ball-valve-1.jpg',
        specs: {
            'Material': 'Cast Iron',
            'Type': 'Cylinder',
            'Finish': 'Honed'
        }
    },
    {
        id: 15,
        name: 'Double Head Key',
        category: 'oxygen',
        description: 'Specialized double head key for maintenance operations.',
        image: '/images/ball-valve-1.jpg',
        specs: {
            'Material': 'Chrome Vanadium',
            'Type': 'Double End',
            'Application': 'Maintenance'
        }
    },
    {
        id: 16,
        name: 'Hex Nut Filling',
        category: 'oxygen',
        description: 'Industrial hex nuts for high-pressure applications.',
        image: '/images/ball-valve-1.jpg',
        specs: {
            'Material': 'Stainless Steel',
            'Grade': 'A2-70',
            'Standard': 'ISO 4032'
        }
    },
    {
        id: 17,
        name: 'NRV',
        category: 'oxygen',
        description: 'Non-return valve for preventing backflow in pipelines.',
        image: '/images/ball-valve-1.jpg',
        specs: {
            'Material': 'Stainless Steel',
            'Type': 'Spring Loaded',
            'Application': 'Pipeline'
        }
    },
    {
        id: 18,
        name: 'Perlite Powder',
        category: 'oxygen',
        description: 'Insulation material for cryogenic vessels.',
        image: '/images/ball-valve-1.jpg',
        specs: {
            'Material': 'Expanded Perlite',
            'Application': 'Insulation',
            'Temperature': 'Cryogenic'
        }
    },
    {
        id: 19,
        name: 'Molecular Sieve',
        category: 'oxygen',
        description: 'High-performance molecular sieve for gas separation.',
        image: '/images/ball-valve-1.jpg',
        specs: {
            'Type': '13X/5A',
            'Application': 'Gas Separation',
            'Capacity': 'Industrial'
        }
    },
    {
        id: 20,
        name: 'Oxygen Analyzer',
        category: 'oxygen',
        description: 'Precision oxygen purity analyzer for monitoring.',
        image: '/images/ball-valve-1.jpg',
        specs: {
            'Range': '0-100%',
            'Display': 'Digital',
            'Accuracy': '±0.1%'
        }
    },
    {
        id: 21,
        name: 'Air Filter',
        category: 'compressor-spares',
        description: 'High-efficiency air filter for compressor intake.',
        image: '/images/ball-valve-1.jpg',
        specs: {
            'Efficiency': '99.5%',
            'Type': 'Panel/Cartridge',
            'Application': 'Compressor'
        }
    },
];

export default function ProductsPage() {
    const [filter, setFilter] = useState('all');

    const filteredProducts = filter === 'all'
        ? productsData
        : productsData.filter(p => p.category === filter);

    const categories = [
        { id: 'all', label: 'All Products' },
        { id: 'compressor', label: 'Air Compressors' },
        { id: 'compressor-spares', label: 'Compressor Spares' },
        { id: 'oxygen', label: 'Oxygen Plant Spares' },
        { id: 'valves', label: 'Industrial Valves' },
        { id: 'pumps', label: 'Industrial Pumps' },
        { id: 'spares', label: 'Accessories' },
    ];

    return (
        <div className={styles.pageContainer}>
            {/* Dark Header */}
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.pageTitle}>Our Products</h1>
                    <p className={styles.pageDesc}>
                        Comprehensive range of Air Compressors, Oxygen Plant Components, and Industrial Spares.
                    </p>
                </div>
            </header>

            {/* Sticky Filters */}
            <div className={styles.filtersSection}>
                <div className="container">
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
                </div>
            </div>

            {/* Products Grid */}
            <section className={styles.productsSection}>
                <div className="container">
                    <p className={styles.resultsCount}>
                        Showing <strong>{filteredProducts.length}</strong> products
                    </p>
                    <div className={styles.grid}>
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
