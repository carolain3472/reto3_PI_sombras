import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export  default function Model(props) {
  const { nodes, materials } = useGLTF("/static/pozo.glb");
  
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[19.84, 77.36, 31.39]} scale={54.85}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Piedras_Piedras_0.geometry}
              material={materials.Piedras}
            />
          </group>
          <group position={[19.84, 77.36, 31.39]} scale={54.85}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Madera_ColumnasMadera_0.geometry}
              material={materials.ColumnasMadera}
            />
          </group>
          <group position={[19.84, 77.36, 31.39]} scale={54.85}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Vigas_Vigas_0.geometry}
              material={materials.Vigas}
            />
          </group>
          <group
            position={[-155.06, 991.36, -286.86]}
            rotation={[0.69, 0, 0]}
            scale={[22.56, 26.34, 30.24]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Tejas_Tejas_0.geometry}
              material={materials.Tejas}
            />
          </group>
          <group position={[-274.25, 79.86, -171.05]} scale={22.43}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.PiedraSuelta_Piedras_0.geometry}
              material={materials.Piedras}
            />
          </group>
          <group
            position={[20.82, 421.37, 33.26]}
            rotation={[Math.PI / 4, 0, -Math.PI / 2]}
            scale={54.85}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cuerda_Cuerda_0.geometry}
              material={materials.Cuerda}
            />
          </group>
          <group
            position={[19.84, 420.41, 31.39]}
            rotation={[0, 0, Math.PI / 2]}
            scale={[19.11, 51.58, 19.11]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Carrete_Carrete_0.geometry}
              material={materials.Carrete}
            />
          </group>
          <group
            position={[22.38, 547.36, 35.03]}
            scale={[40.33, 40.33, 73.38]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Techo1_Techo_0.geometry}
              material={materials.Techo}
            />
          </group>
          <group
            position={[19.84, 64.19, 31.39]}
            scale={[484.27, 15.35, 484.27]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Base_Base_0.geometry}
              material={materials.Base}
            />
          </group>
          <group position={[19.84, 77.36, 31.39]} scale={54.85}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Pozo_Pozo_0.geometry}
              material={materials.Pozo}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/static/pozo.glb");
