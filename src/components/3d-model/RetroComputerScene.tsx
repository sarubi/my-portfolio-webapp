import React, { Suspense, useRef } from "react";
import { OrbitControls, Preload, useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import type { GroupProps } from '@react-three/fiber';
import { useFrame, Canvas } from '@react-three/fiber';
import CanvasLoader from './CanvasLoader';
import * as THREE from 'three'

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh
    Object_5: THREE.Mesh
    Object_37: THREE.SkinnedMesh
    Object_10: THREE.SkinnedMesh
    Object_12: THREE.SkinnedMesh
    Object_14: THREE.SkinnedMesh
    Object_16: THREE.SkinnedMesh
    Object_18: THREE.SkinnedMesh
    Object_19: THREE.SkinnedMesh
    Object_21: THREE.SkinnedMesh
    Object_23: THREE.SkinnedMesh
    Object_25: THREE.SkinnedMesh
    Object_27: THREE.SkinnedMesh
    Object_29: THREE.SkinnedMesh
    Object_31: THREE.SkinnedMesh
    Object_33: THREE.SkinnedMesh
    Object_35: THREE.SkinnedMesh
    Object_39: THREE.SkinnedMesh
    Object_41: THREE.SkinnedMesh
    Object_65: THREE.SkinnedMesh
    Object_67: THREE.SkinnedMesh
    GLTF_created_0_rootJoint: THREE.Bone
    GLTF_created_1_rootJoint: THREE.Bone
  }
  materials: {
    pasokon: THREE.MeshStandardMaterial
    terrarium1: THREE.MeshStandardMaterial
    terrarium1ame: THREE.MeshStandardMaterial
    terrarium1ameoutline: THREE.MeshStandardMaterial
  }
}


const RetroComputerModel = (props: GroupProps) => {
  const modelRef = useRef<any>()
  const { nodes, materials, animations } = useGLTF('./models/retro_computer/scene.gltf') as GLTFResult
  const speed = 0.2;

  // Rotate the model around the Y-axis on every frame
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * speed;
    }
  });
  return (
    <group ref={modelRef} {...props}
      position={[0, -1.3, 0.2]}
      rotation={[0, -1, 0]}
      scale={1.3}
      dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="pasokon_1">
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.pasokon} />
                <mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials.terrarium1} />
              </group>
              <group name="amelia_37" position={[-0.2, 0.9, 0]} rotation={[0, 0.86, 0]}>
                <group name="GLTF_created_0">
                  <primitive
                    object={nodes.GLTF_created_0_rootJoint} />
                  <group name="armies_21" />
                  <group name="armies001_22" />
                  <group name="bode_23" />
                  <group name="bode001_24" />
                  <group name="Cylinder003_25" />
                  <group name="Cylinder004_26" />
                  <group name="eyea_27" />
                  <group name="feets_28" />
                  <group name="feets001_29" />
                  <group name="guitar_30" />
                  <group name="guitar001_31" />
                  <group name="hair_32" />
                  <group name="hairoutline_33" />
                  <group name="mouf_34" />
                  <group name="nogging_35" />
                  <group name="nogging001_36" />
                  <skinnedMesh name="Object_37" geometry={nodes.Object_37.geometry} material={materials.terrarium1ame} skeleton={nodes.Object_37.skeleton} morphTargetDictionary={nodes.Object_37.morphTargetDictionary} morphTargetInfluences={nodes.Object_37.morphTargetInfluences} />
                  <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.terrarium1ame} skeleton={nodes.Object_10.skeleton} />
                  <skinnedMesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.terrarium1ameoutline} skeleton={nodes.Object_12.skeleton} />
                  <skinnedMesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.terrarium1ame} skeleton={nodes.Object_14.skeleton} />
                  <skinnedMesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.terrarium1ameoutline} skeleton={nodes.Object_16.skeleton} />
                  <skinnedMesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.terrarium1ame} skeleton={nodes.Object_18.skeleton} />
                  <skinnedMesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials.terrarium1ameoutline} skeleton={nodes.Object_19.skeleton} />
                  <skinnedMesh name="Object_21" geometry={nodes.Object_21.geometry} material={materials.terrarium1ameoutline} skeleton={nodes.Object_21.skeleton} />
                  <skinnedMesh name="Object_23" geometry={nodes.Object_23.geometry} material={materials.terrarium1ame} skeleton={nodes.Object_23.skeleton} />
                  <skinnedMesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials.terrarium1ame} skeleton={nodes.Object_25.skeleton} />
                  <skinnedMesh name="Object_27" geometry={nodes.Object_27.geometry} material={materials.terrarium1ameoutline} skeleton={nodes.Object_27.skeleton} />
                  <skinnedMesh name="Object_29" geometry={nodes.Object_29.geometry} material={materials.terrarium1ame} skeleton={nodes.Object_29.skeleton} />
                  <skinnedMesh name="Object_31" geometry={nodes.Object_31.geometry} material={materials.terrarium1ameoutline} skeleton={nodes.Object_31.skeleton} />
                  <skinnedMesh name="Object_33" geometry={nodes.Object_33.geometry} material={materials.terrarium1ame} skeleton={nodes.Object_33.skeleton} />
                  <skinnedMesh name="Object_35" geometry={nodes.Object_35.geometry} material={materials.terrarium1ameoutline} skeleton={nodes.Object_35.skeleton} />
                  <skinnedMesh name="Object_39" geometry={nodes.Object_39.geometry} material={materials.terrarium1ame} skeleton={nodes.Object_39.skeleton} />
                  <skinnedMesh name="Object_41" geometry={nodes.Object_41.geometry} material={materials.terrarium1ameoutline} skeleton={nodes.Object_41.skeleton} />
                </group>
              </group>
              <group name="isopod002_49" position={[0, 0.86, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.07}>
                <group name="GLTF_created_1">
                  <primitive object={nodes.GLTF_created_1_rootJoint} />
                  <group name="isopod_47" />
                  <group name="isopod001_48" />
                  <skinnedMesh name="Object_65" geometry={nodes.Object_65.geometry} material={materials.terrarium1} skeleton={nodes.Object_65.skeleton} />
                  <skinnedMesh name="Object_67" geometry={nodes.Object_67.geometry} material={materials.terrarium1ameoutline} skeleton={nodes.Object_67.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/retro_computer/scene.gltf')

const RetroComputerScene = () => {

  return (
    <Canvas
      shadows
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: '100%', height: '320px' }}>
      <PerspectiveCamera makeDefault position={[3, -1, 5]} />
      <ambientLight intensity={0.5} />
      <Suspense fallback={<CanvasLoader />}>
        <RetroComputerModel />
      </Suspense>
      <OrbitControls />
      <Preload all />
    </Canvas>
  );
};

export default RetroComputerScene;