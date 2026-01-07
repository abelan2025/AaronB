import React from 'react';
import { useChaos } from '../context/ChaosContext';
import '../styles/variables.css';
import '../styles/ChaosToggle.css';

const ChaosToggle = () => {
    const { isChaosMode, toggleChaos } = useChaos();

    return (
        <div className="chaos-toggle-container">
            <div className="chaos-tooltip">
                <h4>What is Chaos Mode?</h4>
                <p>
                    Demonstrates <strong>Site Reliability Engineering (SRE)</strong> principles by injecting artificial network latency and random server errors.
                    Toggle it on to test the site's resiliency and error handling!
                </p>
            </div>

            <div
                className={`chaos-toggle ${isChaosMode ? 'active' : ''}`}
                onClick={toggleChaos}
            >
                <span className="chaos-icon">{isChaosMode ? '🔥' : '🛡️'}</span>
                <span className="chaos-label">
                    {isChaosMode ? 'CHAOS MODE: ON' : 'Chaos Mode: Off'}
                </span>
            </div>
        </div>
    );
};

export default ChaosToggle;
