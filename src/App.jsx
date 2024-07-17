import { useRef, useEffect, useState } from 'react';
import vid from './assets/vid.mp4'
import one from './assets/1.mp4'
import two from './assets/2.mp4'
import three from './assets/3.mp4'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
gsap.registerPlugin(ScrollTrigger);
function App() {
  const handleMove = (e) => {
    gsap.to('.cursor', {
      x: e.clientX,
      y: e.clientY,
    })
  }
  const handleEnter = (e) => {
    gsap.to('.cursor', {
      opacity: 1,
      scale: 1,
    })
  }
  const handleLeave = (e) => {
    gsap.to('.cursor', {
      opacity: 0,
      scale: 0,
    })
  }
  useEffect(() => {
    const tl = gsap.timeline()
    tl.from('.loader h1 span', {
      x: 300,
      duration: 0.6,
      stagger: 0.09,
      ease: "power1.out"
    })
    tl.to('.loader h1 span', {
      x: -300,
      duration: 0.6,
      stagger: 0.09,
      delay: 0.6,
      opacity: 0,
      ease: "power1.out"
    })
    tl.to(".loader", {
      opacity: 0,
      duration: 1,
      display: "none",
    })
    tl.from(".page1-content h1 span", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 0.05,
      ease: "power1.out"
    })

    gsap.from('.text h1 span', {
      y: 100,
      duration: 0.4,
      stagger: 0.1,
      scrollTrigger: {
        scroller: "body",
        // markers: true,
        trigger: ".text h1 span",
        start: "top 100%",
        end: "top 95%",
        scrub: 2,
      }
    });
  }, []);
  return (
    <>
      <div id="main">
        <div className="loader">
          <h1>
            <span>Tomorrow's</span>
            <span> Brand's,</span>
            <span>  Today.</span>
          </h1>
        </div>
        <div className="page1" onMouseMove={handleMove} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
          <div className="cursor">Play Reel</div>
          <video autoPlay muted loop src={vid}></video>
          <div className="page1-content">
            <nav>
              <p>The Venture Agency.</p>
              <p>Menu</p>
            </nav>
            <h1>
              <span>r</span>
              <span>e</span>
              <span>j</span>
              <span>o</span>
              <span>u</span>
              <span>i</span>
              <span>c</span>
              <span>e</span>
            </h1>
          </div>
        </div>
        <div className="page2">
          <div className="top">
            <p>Tomorrow's Brands, Today™ </p>
            <p>Paris/San Diego</p>
          </div>
          <div className="text">
            <h1><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are a venture firm and digital agency. Our</span></h1>
            <h1><span>mission is to transform founders' visions into</span></h1>
            <h1><span>remarkable brands. Choose traditional</span></h1>
            <h1><span>compensation or an equity offset through our</span></h1>
            <h1><span>Venture Model - your vision, your decision.</span></h1>
          </div>
        </div>
        <div className="page3">
          <div className="page3-top">
            <div className="model">
              <p>Agency & Venture</p>
              <span>Models</span>
            </div>
            <h1>Explore our services</h1>
            <h1>and engagement models</h1>
          </div>
          <div className="images">
            <div className="image">
              <img src="https://images.prismic.io/rejouice/d8e1fa1f-4f24-41e1-a249-098c62df5aff_Group+46+%281%29.jpg?auto=compress,format" alt="" />
              <video autoPlay muted loop src={one}></video>
            </div>

            <div className="image">
              <img src="https://images.prismic.io/rejouice/e0350a3d-c390-4d97-af1a-5c86bc822b52_Group+3929.jpg?auto=compress,format" alt="" />
              <video autoPlay muted loop src={two}></video>
            </div>

            <div className="image">
              <img src="https://images.prismic.io/rejouice/2874f084-ec6c-4a19-b025-a55c1e6db929_Group+3692.jpg?auto=compress,format" alt="" />
              <video autoPlay muted loop src={three}></video>
            </div>
          </div>
        </div>
        <div className="page4">
          <video autoPlay loop muted src="https://www.rejouice.com/assets/videos/RJ-BALL-BLUE-ORANGE-scaled.webm"></video>
        </div>
        <div className="page5">
          <div className="page5-top">
            <h1>Get in touch.</h1>
          </div>
          <div className="sp">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://plus.unsplash.com/premium_photo-1720975109819-239a811d4524?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img src="https://images.unsplash.com/photo-1721157549677-73644a262b6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img src="https://images.unsplash.com/photo-1721191149571-d09f621d59ae?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img src="https://images.unsplash.com/photo-1706430263184-c1f9ac844a54?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="https://plus.unsplash.com/premium_photo-1720975109819-239a811d4524?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img src="https://images.unsplash.com/photo-1721157549677-73644a262b6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img src="https://images.unsplash.com/photo-1721191149571-d09f621d59ae?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <img src="https://images.unsplash.com/photo-1706430263184-c1f9ac844a54?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
