import React from 'react';
import { useChaos } from '../context/ChaosContext';
import '../styles/variables.css';

const ChaosToggle = () => {
    const { isChaosMode, toggleChaos } = useChaos();

    return (
        <div
            className="chaos-toggle"
            onClick={toggleChaos}
            title="Toggle Chaos Mode (Simulate SRE Incidents)"
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: 9999,
                cursor: 'pointer',
                background: isChaosMode ? 'var(--accent-secondary)' : 'rgba(15, 23, 42, 0.9)',
                border: `1px solid ${isChaosMode ? 'var(--accent-glow)' : 'var(--text-secondary)'}`,
                padding: '10px 15px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: isChaosMode ? '0 0 20px var(--accent-glow)' : 'none',
                transition: 'all 0.3s ease'
            }}
        >
            <span style={{ fontSize: '1.2rem' }}>{isChaosMode ? '🔥' : '🛡️'}</span>
            <span style={{
                color: isChaosMode ? '#fff' : 'var(--text-secondary)',
                fontWeight: '600',
                fontSize: '0.9rem'
            }}>
                {isChaosMode ? 'CHAOS MODE: ON' : 'Chaos Mode: Off'}
            </span>
        </div>
    );
};

export default ChaosToggle;
