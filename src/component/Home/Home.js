import React, { useEffect } from 'react'
import "./Home.css"
import * as THREE from "three"
import moonImage from "../../Images/moon.jpg"
import venusImage from "../../Images/venus.jpg"
import spaceImage from "../../Images/space.jpg"
import Typography  from '@mui/material/Typography'
import TimeLine from "../TimeLine/TimeLine"

const Home = () => {

  useEffect(() => {

    const textureLoader = new THREE.TextureLoader()

    const moonTexture = textureLoader.load(moonImage)
    const venusTexture = textureLoader.load(venusImage)
    const spaceTexture = textureLoader.load(spaceImage)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(4, 4, 8)

    const canvas = document.querySelector(".homeCanvas")
    const renderer = new THREE.WebGLRenderer({ canvas })

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64)
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture })
    const moon = new THREE.Mesh(moonGeometry, moonMaterial)

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64)
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture })
    const venus = new THREE.Mesh(venusGeometry, venusMaterial)
    venus.position.set(8, 5, 5)

    const pointLight = new THREE.PointLight(0xffffff, 1)
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1)

    pointLight.position.set(8, 5, 5)
    pointLight2.position.set(-8, -5, -5)

    scene.add(moon)
    scene.add(venus)
    scene.add(pointLight)
    scene.add(pointLight2)
    scene.background=spaceTexture

    const constSpeed=0.01
    window.addEventListener("mousemove",(e)=>{
      if(e.clientX <=window.innerWidth/2){
        moon.rotation.x -= constSpeed
        moon.rotation.y += constSpeed
        venus.rotation.x -= constSpeed
        venus.rotation.y += constSpeed
      }
      if(e.clientX > window.innerWidth/2){
        moon.rotation.x -= constSpeed
        moon.rotation.y -= constSpeed
        venus.rotation.x -= constSpeed
        venus.rotation.y -= constSpeed
      }
      if(e.clientY > window.innerHeight/2){
        moon.rotation.x -= constSpeed
        moon.rotation.y += constSpeed
        venus.rotation.x -= constSpeed
        venus.rotation.y += constSpeed
      }
      if(e.clientY <= window.innerHeight/2){
        moon.rotation.x -= constSpeed
        moon.rotation.y -= constSpeed
        venus.rotation.x -= constSpeed
        venus.rotation.y -= constSpeed
      }
    })

    const animate = () => {
      requestAnimationFrame(animate)
      moon.rotation.y += 0.001
      venus.rotation.y += 0.001
      // camera.position.z += 0.01
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.render(scene, camera)
    }
    animate()
  }, [])

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
      <div className="homeContainer">
        <Typography variant='h3'>TIMELINE</Typography>
        <TimeLine timelines={[1,2,3,4]}/>
      </div>
      <div className="homeSkills">
        <Typography variant='h3'> SKILLS</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src="https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
            alt="Face1" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
            alt="Face2" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
            alt="Face3" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
            alt="Face4" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
            alt="Face5" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
            alt="Face6" />
          </div>
        </div>
        <div className="cubeShadow"></div>

        <div className="homeSkillsBox"></div>
      </div>
    </div>
  )
}

export default Home
