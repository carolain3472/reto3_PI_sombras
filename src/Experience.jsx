import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Naranja from './Naranja'
import Model from './Model'
import Floor from './Floor'
import Arbol from './Arbol'

import { useHelper } from '@react-three/drei'
import { useRef } from 'react'
import { DirectionalLightHelper, RectAreaLight } from 'three';
import { HemisphereLightHelper } from 'three';
import { PointLightHelper } from 'three';
import { SpotLightHelper } from 'three';


export default function Experience() {

     {/*Creamos una referencia al directionalLigtht*/}
     const directionalLightRef= useRef()

     {/*Creamos una referencia al HemisphereLight*/}
     const hemisphereLightRef= useRef()

     {/*Creamos una referencia al PointLight*/}
     const pointLightRef= useRef()

     {/*Creamos una referencia al RectAreaLight */}
     const rectAreaLightRef= useRef()

     {/*Creamos una referencia al SpotLight */}
     const spotLightRef= useRef()

    {useHelper(directionalLightRef, DirectionalLightHelper, 1)}
    {/*useHelper(hemisphereLightRef, HemisphereLightHelper, 1)*/}
    {useHelper(pointLightRef, PointLightHelper, 1)}


    {/* AUN NO FUNCIONA useHelper(rectAreaLightRef, RectAreaLightHelper, 1)*/}

    {/*useHelper(spotLightRef, SpotLightHelper, 1)*/}



    return <>
        <Perf position="top-left" />


        <OrbitControls makeDefault />




        {/*Sombra para el arbol directionalLight*/}
        {<directionalLight ref={directionalLightRef} castShadow position={[7.5, 8, 0]} intensity={3}  />}
        {/*<rectAreaLight ref={rectAreaLightRef} castShadow position={[7.5, 8, 0]} intensity={3}  />/*}

         {/*Sombra para el arbol spotLight*/}
         {/*<spotLight ref={spotLightRef} castShadow position={[7.5, 8, 0]} intensity={3}  />*/}

         {/*Sombra para el arbol reactAreaLight*/}
         {/* AUN NO FUNCIONAAA <RectAreaLight ref={rectAreaLightRef} castShadow position={[7.5, 8, 0]} intensity={3}  />*/}






        {/*Sombra para el pozo hemisphereLight*/}
        { /*<hemisphereLight ref={hemisphereLightRef} castShadow position={[-8, 5, 0]} intensity={1.4}  />*/}

        {/*Sombra para el pozo pointLight*/}
        { <pointLight ref={pointLightRef} castShadow position={[-8, 5, 0]} intensity={1.4}  />}
        


        <ambientLight intensity={0.5} />

        {/*pozo*/}
                
        <Model castShadow scale={0.008} position={[-8, -2,0]}></Model>
        <Arbol scale={0.6} position={[9, -2,0]}></Arbol>

        <Naranja/>
        
        <Floor/>
        
    </>
}