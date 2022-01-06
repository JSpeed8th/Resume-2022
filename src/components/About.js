import '../styles/About.css'
import {ReactComponent as AboutLogo} from '../assets/about-me.svg'
import ImageGallery from 'react-image-gallery';
import icelandCouple from '../assets/carousel/couple-iceland.jpg'
import horsePortrait from '../assets/carousel/portrait-horse-iceland.jpg'
import cuddleCats from '../assets/carousel/cuddle-cats.jpg'
import windowCats from '../assets/carousel/window-cats.jpg'

const aboutMeDescription = (
  <div className='about-description'>
    <p >Welcome to my website! Built entirely in react.js and designed by myself. Thank you for taking a peek! My name is Jordan Speed hailing from the great city of Philadelphia.</p>
    <p>I am a front-end web developer with over 3 years of industry experience, working with over 60 clients to produce exciting web content and applications. I am grateful to have a graphic design background from Rowan University, which informs my development and at times, allow me to play both designer and developer simultaneously!</p>
    <p>As someone who’s visually impaired, I know the importance of an accessible world. Most of us will experience some form of impairment as we age, which makes it important for the web to be accessible by default. I focus on meeting WCAG 2.1 guidelines, to ensure that everyone can have a quality experience.</p>
    <p>Knowledge in SEO is vital for companies today to get ahead. I am certified by MOZ Academy in Technical SEO which allows me to optimize web content to be as Google & Bing ready as possible. I also have experience writing blog content for clients in order for them to stand out and provide their users with a richer experience.</p>
    <p>Aside from my technical skills, I am a friendly and warm person who loves to laugh.  I have an amazing wife and two fur babies 🐈 (Mochi & Taro). My wife and I volunteered for three years at the <a target="_blank" rel="noreferrer" href='https://www.cedarrun.org/'>Cedar Run Animal Rescue in Medford New Jersey</a>. If you ever need to feed baby squirrels or clean an eagle enclosure, I’m your person.</p>
    <p>Lastly, these wonderful photos you see throughout my website were taken by my talented wife during our trip to Iceland.</p>
  </div>
)

const images = [
    {
      original: cuddleCats
    },
    {
      original: windowCats
    },
    {
      original: horsePortrait
    },
    {
      original: icelandCouple
    },
  ];

const About = () => {
    return (
        <section id='about'>
            {/* Content */}
            <div className='about-content'>
                <h2 className='visually-hidden'>About Me</h2>
                <AboutLogo className='about-logo' />
                  {aboutMeDescription}
            </div>
            
            {/* Photograph */}
            <div className='about-photo-gallery'>
                <ImageGallery items={ images } showFullscreenButton={false} showPlayButton={false} showThumbnails={ false } showBullets={ true } />
            </div>
        </section>
    )
}

export default About
