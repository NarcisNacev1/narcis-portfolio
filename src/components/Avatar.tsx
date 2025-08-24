import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import { useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { GLTF, SkeletonUtils } from 'three-stdlib';

type GLTFAction = THREE.AnimationClip;

type GLTFResult = GLTF & {
    nodes: {
        Wolf3D_Hair: THREE.SkinnedMesh
        Wolf3D_Outfit_Top: THREE.SkinnedMesh
        Wolf3D_Outfit_Bottom: THREE.SkinnedMesh
        Wolf3D_Outfit_Footwear: THREE.SkinnedMesh
        Wolf3D_Body: THREE.SkinnedMesh
        EyeLeft: THREE.SkinnedMesh
        EyeRight: THREE.SkinnedMesh
        Wolf3D_Head: THREE.SkinnedMesh
        Wolf3D_Teeth: THREE.SkinnedMesh
        Hips: THREE.Bone
    }
    materials: {
        Wolf3D_Hair: THREE.MeshStandardMaterial
        Wolf3D_Outfit_Top: THREE.MeshStandardMaterial
        Wolf3D_Outfit_Bottom: THREE.MeshStandardMaterial
        Wolf3D_Outfit_Footwear: THREE.MeshStandardMaterial
        Wolf3D_Body: THREE.MeshStandardMaterial
        Wolf3D_Eye: THREE.MeshStandardMaterial
        Wolf3D_Skin: THREE.MeshStandardMaterial
        Wolf3D_Teeth: THREE.MeshStandardMaterial
    }
    animations: GLTFAction[]
}

const boneMapping: { [key: string]: string } = {
    'mixamorigHips': 'Hips',
    'mixamorigSpine': 'Spine',
    'mixamorigSpine1': 'Spine1',
    'mixamorigSpine2': 'Spine2',
    'mixamorigNeck': 'Neck',
    'mixamorigHead': 'Head',
    'mixamorigLeftShoulder': 'LeftShoulder',
    'mixamorigLeftArm': 'LeftArm',
    'mixamorigLeftForeArm': 'LeftForeArm',
    'mixamorigLeftHand': 'LeftHand',
    'mixamorigRightShoulder': 'RightShoulder',
    'mixamorigRightArm': 'RightArm',
    'mixamorigRightForeArm': 'RightForeArm',
    'mixamorigRightHand': 'RightHand',
    'mixamorigLeftUpLeg': 'LeftUpLeg',
    'mixamorigLeftLeg': 'LeftLeg',
    'mixamorigLeftFoot': 'LeftFoot',
    'mixamorigLeftToeBase': 'LeftToeBase',
    'mixamorigRightUpLeg': 'RightUpLeg',
    'mixamorigRightLeg': 'RightLeg',
    'mixamorigRightFoot': 'RightFoot',
    'mixamorigRightToeBase': 'RightToeBase',
};

function remapAnimationTracks (animationClip: THREE.AnimationClip, skeleton: THREE.Skeleton): THREE.AnimationClip {
    const validBoneNames = new Set(skeleton.bones.map(bone => bone.name));

    const remappedTracks = animationClip.tracks
        .map(track => {
            const [boneName, property] = track.name.split('.');
            const mappedBoneName = boneMapping[boneName];

            if (mappedBoneName && validBoneNames.has(mappedBoneName)) {
                const newTrack = track.clone();
                newTrack.name = `${mappedBoneName}.${property}`;
                return newTrack;
            }

            if (validBoneNames.has(boneName)) {
                return track;
            }

            return null;
        })
        .filter(track => track !== null);

    return new THREE.AnimationClip(animationClip.name, animationClip.duration, remappedTracks);
}

export function Avatar (props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>(null);
    const { scene } = useGLTF('/models/68aa0e83645c86eae5f0c3b8.glb');
    const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
    const { nodes, materials } = useGraph(clone) as GLTFResult;

    const { animations: standingAnim } = useFBX('animations/StandingUp.fbx');
    const { animations: idleAnim } = useFBX('animations/BreathingIdle.fbx');
    const { animations: lookingAroundAnim } = useFBX('animations/LookingAround.fbx');

    const allAnimations = React.useMemo(() => {
        const result: THREE.AnimationClip[] = [];
        const skeleton = nodes.Wolf3D_Body?.skeleton;

        if (standingAnim[0] && skeleton) {
            const clip = remapAnimationTracks(standingAnim[0], skeleton);
            clip.name = 'StandingUp';
            result.push(clip);
        }

        if (lookingAroundAnim[0] && skeleton) {
            const clip = remapAnimationTracks(lookingAroundAnim[0], skeleton);
            clip.name = 'lookingAround';
            result.push(clip);
        }

        if (idleAnim[0] && skeleton) {
            const clip = remapAnimationTracks(idleAnim[0], skeleton);
            clip.name = 'BreathingIdle';
            result.push(clip);
        }

        return result;
    }, [nodes.Wolf3D_Body?.skeleton, standingAnim, lookingAroundAnim, idleAnim]);

    const { actions, mixer } = useAnimations(allAnimations, group);

    useEffect(() => {
        const standAction = actions['StandingUp'];
        const lookingAroundAction = actions['lookingAround'];
        const idleAction = actions['BreathingIdle'];

        if (standAction && lookingAroundAction && idleAction) {
            standAction.reset().play();
            standAction.clampWhenFinished = true;
            standAction.loop = THREE.LoopOnce;

            mixer.addEventListener('finished', (e) => {
                if (e.action === standAction) {
                    lookingAroundAction.reset().fadeIn(0.5).play();
                    lookingAroundAction.clampWhenFinished = true;
                    lookingAroundAction.loop = THREE.LoopOnce;
                }

                if (e.action === lookingAroundAction) {
                    idleAction.reset().fadeIn(0.5).play();
                    idleAction.loop = THREE.LoopRepeat;
                }
            });
        }
    }, [actions, mixer]);

    return (
        <group {...props} ref={group} dispose={null}>
            <primitive object={nodes.Hips} />
            <skinnedMesh geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
            <skinnedMesh geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
            <skinnedMesh geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
            <skinnedMesh geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
            <skinnedMesh geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
            <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
            <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
            <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
            <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
        </group>
    );
}

useGLTF.preload('/models/68aa0e83645c86eae5f0c3b8.glb');