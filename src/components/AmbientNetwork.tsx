"use client";

import { useEffect, useRef } from "react";

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
}

const NODE_COUNT = 80;
const MAX_DISTANCE = 200;
const NODE_COLOR = "rgba(79, 70, 229, 0.5)"; // signal
const LINE_COLOR = "59, 130, 246"; // signal-light

export function AmbientNetwork() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
        }));

        function draw() {
            ctx!.clearRect(0, 0, width, height);

            for (let i = 0; i < nodes.length; i++) {
                const a = nodes[i];

                if (!prefersReducedMotion) {
                    a.x += a.vx;
                    a.y += a.vy;
                    if (a.x < 0 || a.x > width) a.vx *= -1;
                    if (a.y < 0 || a.y > height) a.vy *= -1;
                }

                for (let j = i + 1; j < nodes.length; j++) {
                    const b = nodes[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < MAX_DISTANCE) {
                        const opacity = (1 - dist / MAX_DISTANCE) * 0.50;
                        ctx!.strokeStyle = `rgba(${LINE_COLOR}, ${opacity})`;
                        ctx!.lineWidth = 1;
                        ctx!.beginPath();
                        ctx!.moveTo(a.x, a.y);
                        ctx!.lineTo(b.x, b.y);
                        ctx!.stroke();
                    }
                }

                ctx!.fillStyle = NODE_COLOR;
                ctx!.beginPath();
                ctx!.arc(a.x, a.y, 1.8, 0, Math.PI * 2);
                ctx!.fill();
            }
        }

        let frameId: number;
        function loop() {
            draw();
            if (!prefersReducedMotion) {
                frameId = requestAnimationFrame(loop);
            }
        }
        loop();

        function handleResize() {
            width = canvas!.width = window.innerWidth;
            height = canvas!.height = window.innerHeight;
        }
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 opacity-90"
        />
    );
}