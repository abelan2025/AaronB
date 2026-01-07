import React, { createContext, useState, useContext } from 'react';

const ChaosContext = createContext();

export const ChaosProvider = ({ children }) => {
    const [isChaosMode, setIsChaosMode] = useState(false);

    const toggleChaos = () => setIsChaosMode(prev => !prev);

    // Helper to simulate network chaos
    const injectChaos = async () => {
        if (!isChaosMode) return;

        // 1. Latency Injection (1s to 4s)
        const latency = Math.floor(Math.random() * 3000) + 1000;
        await new Promise(resolve => setTimeout(resolve, latency));

        // 2. Failure Injection (30% chance of failure)
        if (Math.random() > 0.7) {
            const errors = [
                '500: Internal Server Error (Chaos Injection)',
                '408: Request Timeout (Chaos Injection)',
                '429: Too Many Requests (Chaos Injection)'
            ];
            const randomError = errors[Math.floor(Math.random() * errors.length)];
            throw new Error(randomError);
        }
    };

    return (
        <ChaosContext.Provider value={{ isChaosMode, toggleChaos, injectChaos }}>
            {children}
        </ChaosContext.Provider>
    );
};

export const useChaos = () => useContext(ChaosContext);
