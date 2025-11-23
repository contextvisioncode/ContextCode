"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ShieldCheck, Wifi, Cpu } from "lucide-react";

const LOADING_MESSAGES = [
    "Decrypting matrix...",
    "Establishing secure handshake...",
    "Analyzing neural pathways...",
    "Optimizing vibe parameters...",
    "Injecting coffee into the mainframe...",
    "Parsing quantum entanglements...",
    "Compiling architectural holograms...",
    "Syncing with the metaverse...",
    "Bypassing firewall layer 7...",
    "Generating 10x developer insights..."
];

export const HackerTerminal = () => {
    const [messageIndex, setMessageIndex] = useState(0);
    const [logs, setLogs] = useState<string[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % LOADING_MESSAGES.length);
            setLogs((prev) => [...prev.slice(-4), LOADING_MESSAGES[messageIndex]]);
        }, 500);

        return () => clearInterval(interval);
    }, [messageIndex]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 font-mono text-xs">
            <div className="w-full max-w-md bg-black/80 border border-green-500/30 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                {/* Terminal Header */}
                <div className="bg-green-900/20 border-b border-green-500/30 p-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-green-400">
                        <Terminal className="w-4 h-4" />
                        <span className="font-bold tracking-wider">ROOT_ACCESS</span>
                    </div>
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                    </div>
                </div>

                {/* Terminal Body */}
                <div className="p-4 h-48 flex flex-col justify-end space-y-1 relative">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 pointer-events-none bg-[length:100%_2px,3px_100%]" />

                    <AnimatePresence mode="popLayout">
                        {logs.map((log, i) => (
                            <motion.div
                                key={`${i}-${log}`}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-green-500/80 flex items-center gap-2 z-10"
                            >
                                <span className="text-green-700">{">"}</span>
                                {log}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    <div className="flex items-center gap-2 text-green-400 font-bold z-10 mt-2">
                        <span className="animate-pulse">{">"}</span>
                        <span className="typing-cursor">{LOADING_MESSAGES[messageIndex]}</span>
                        <span className="w-2 h-4 bg-green-500 animate-pulse" />
                    </div>
                </div>

                {/* Status Footer */}
                <div className="bg-green-900/10 border-t border-green-500/20 p-2 flex justify-between text-[10px] text-green-600 uppercase">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-3 h-3" />
                        <span>SECURE</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Wifi className="w-3 h-3 animate-pulse" />
                        <span>UPLINK: ACTIVE</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Cpu className="w-3 h-3" />
                        <span>CPU: 98%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
