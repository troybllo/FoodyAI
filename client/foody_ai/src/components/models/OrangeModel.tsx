import { useGLTF } from "@react-three/drei";

export default function OrangeModel(props: any) {
  const { scene } = useGLTF("/models/orange.glb");
  return <primitive object={scene} scale={0.5} {...props} />;
}
