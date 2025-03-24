import { useGLTF } from "@react-three/drei";

export default function AppleModel(props: any) {
  const { scene } = useGLTF("/models/apple.glb");
  return <primitive object={scene} scale={0.5} {...props} />;
}
