import {Canvas, useFrame, useThree} from '@react-three/fiber';
import {Box, OrbitControls} from '@react-three/drei';
import {Suspense, useEffect, useRef} from "react";
// @ts-ignore
import {GLTF, GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
// @ts-ignore
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader";
import * as THREE from "three";
import {Color} from "three";

function Model() {
    const { scene } = useThree();
    const mixer = useRef<any>();
    const gltf = useRef<GLTF>();
    useEffect(() => {
        scene.background = new Color("red");
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
        const loader = new GLTFLoader();
        loader.setDRACOLoader(dracoLoader);
        loader.load('/LittlestTokyo.glb', (gltf: GLTF) => {
            console.log("gltf >>> ", gltf)
            const model = gltf.scene;
            model.position.set(1, 1, 0);
            model.scale.set(0.01, 0.01, 0.01);
            scene.add(model);

            mixer.current = new THREE.AnimationMixer(model);
            mixer?.current?.clipAction(gltf.animations[0]).play();
        });
    }, []);

    useFrame((state, delta) => mixer.current?.update(delta));

    return null;
}

export const CanvasComponent = () => {



    return <div style={{width: "100%", height: "80vh", border: "1px solid red"}}>
        <Canvas camera={{ position: [5, 2, 8], fov: 40 }}>
            <ambientLight />
            <Suspense fallback={<div>загрузка</div>}>
                <Model />
            </Suspense>
            {/*<pointLight position={[10, 10, 10]} />*/}
            <Box position={[0, 0, 0]} onClick={() => console.log("test click")}>
                <meshStandardMaterial color={'orange'} />
            </Box>
            <Box position={[1.2, 0, 0]}>
                <meshStandardMaterial color={'yellow'} />
            </Box>
            <OrbitControls />
        </Canvas>
    </div>
}