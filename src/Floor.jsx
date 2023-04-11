import { useTexture } from "@react-three/drei";

export default function Floor() {

    const PATH = "/static/textures/floor/"

    const props = useTexture({

        aoMap: PATH + 'AO.jpg',
        map: PATH + 'color.jpg',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        displacementMap: PATH + 'height.png',
       
    })


    return (
        <mesh receiveShadow position-y={ - 1.5 } rotation-x={ - Math.PI * 0.5 }>
            <planeGeometry args={[35, 35]} />
            <meshStandardMaterial {...props} color= '#51FF00' />
        </mesh>
    )
}
