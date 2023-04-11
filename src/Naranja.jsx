import { DoubleSide, SphereGeometry } from "three";
import { useTexture } from "@react-three/drei";



export default function Naranja() {
    const PATH = "/static/textures/naranja/"

    const props = useTexture({

        map: PATH + 'color.jpg',
        displacementMap: PATH + 'displacement.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        occMap: PATH + 'occ.jpg',
       
    })

    return (
        <mesh castShadow position={[2, -0.5,0]} rotation-y={Math.PI / 12}>
             <sphereGeometry args={[1, 32, 64]}/>
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}