import HeroSection from '../components/HeroSection';
import FeaturedTours from '../components/FeaturedTours';
import TopCollections from '../components/TopCollections';
import PersonalisedTrip from '../components/PersonalisedTrip';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedTours />
      <TopCollections />
      <PersonalisedTrip />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
