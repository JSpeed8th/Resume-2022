import '../styles/Hero.css'
import {ReactComponent as ReactLogo} from '../assets/hero-name.svg';

const Hero = () => {
    return (
        <section className='hero-background-image' id='hero'>
            {/* <img className='hero-foreground-image' src='' alt='' /> */}
                <ReactLogo className='hero-logo' />
            <h1 className='hero-header visually-hidden'>
                Jordan Speed's Portfolio Website
            </h1>
        </section>
    )
}

export default Hero
