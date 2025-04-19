"use client";

import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div style={{ width: 200, textAlign: "center" }}>
        <div
          style={{
            height: 6,
            borderRadius: 4,
            overflow: "hidden",
            marginBottom: 8,
          }}
          className="bg-gray-200"
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              transition: "width 0.1s",
            }}
            className="bg-fuchsia-700"
          />
        </div>
      </div>
    </Html>
  );
}
