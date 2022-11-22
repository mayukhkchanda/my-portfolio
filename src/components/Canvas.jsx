import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene'

const canvas = () => {
  return (
    <Canvas>
        <Suspense fallback={"Loading..."}>
            <Scene />
        </Suspense>
    </Canvas>
  )
}

export default canvas