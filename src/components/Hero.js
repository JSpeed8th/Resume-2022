import '../styles/Hero.css'
import {ReactComponent as ReactLogo} from '../assets/hero-name.svg';
import skyVideo from '../assets/cloud-videos/Formation Of Clouds.mp4';


const Hero = () => {
    return (
        <section className='hero-background-image-wrapper' id='hero'>
            <video className='hero-background-image-video' autoPlay loop muted playsInline width="100%" height="auto">
                <source src={skyVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='hero-background-image'>
            {/* <img className='hero-foreground-image' src='' alt='' /> */}
                <ReactLogo className='hero-logo' />
            <h1 className='hero-header visually-hidden'>
                Jordan Speed's Portfolio Website
            </h1>
            </div>

        </section>
    )
}

export default Hero
