import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";
import { ThreeElements } from "@react-three/fiber";

type MyGroupProps = ThreeElements["group"];

export default function OrangeModel(props: MyGroupProps) {
  const group = useRef<Group>(null);
  const { scene } = useGLTF("/models/orange.glb");

  const clonedScene = React.useMemo(() => scene.clone(), [scene]);
  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={clonedScene} scale={1} />
    </group>
  );
}
