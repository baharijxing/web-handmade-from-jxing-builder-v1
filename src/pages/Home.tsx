import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import Categories from '../components/Categories'
import AboutStory from '../components/AboutStory'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <AboutStory />
      <Testimonials />
    </>
  )
}
