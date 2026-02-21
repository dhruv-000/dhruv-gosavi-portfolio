import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useState } from "react";

function StarField(props) {
    const ref = useRef();
    const [sphere] = useState(() => {
        // Generate 5000 points inside a sphere of radius 1.2
        const arr = new Float32Array(5000 * 3);
        let i = 0;
        while (i < arr.length) {
            const x = (Math.random() - 0.5) * 2.4;
            const y = (Math.random() - 0.5) * 2.4;
            const z = (Math.random() - 0.5) * 2.4;
            const d = Math.sqrt(x * x + y * y + z * z);
            if (d <= 1.2) {
                arr[i++] = x;
                arr[i++] = y;
                arr[i++] = z;
            }
        }
        return arr;
    });

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export default function StarsBackground() {
    return (
        <div
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ height: "100vh" }}
        >
            <Canvas camera={{ position: [0, 0, 1] }}>
                <StarField />
            </Canvas>
        </div>
    );
}
