import '../styles/Hero.css'
import {ReactComponent as ReactLogo} from '../assets/hero-name.svg';

const Hero = () => {
    return (
        <section className='hero-background-image'>
            {/* <img className='hero-foreground-image' src='' alt='' /> */}
            <h1 className='hero-header'>
                <ReactLogo className='hero-logo' />
            </h1>
        </section>
    )
}

export default Hero
