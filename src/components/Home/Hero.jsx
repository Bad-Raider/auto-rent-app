const { HeroTitle, HeroDescription, HeroLink } = require('./Hero.styled');

const Hero = () => {
  return (
    <>
      <HeroTitle>Welcome to Auto rent App</HeroTitle>
      <HeroDescription>
        "Discover Ukraine with ease and style. Our cutting-edge car rental app puts the power of exploration in your hands. Browse our diverse fleet of vehicles, from compact cars to luxurious SUVs, and book your ideal ride effortlessly. Whether you're exploring the vibrant city streets or venturing into the picturesque countryside, we've got you covered. Experience the freedom of the open road and make your Ukrainian journey unforgettable with our convenient and reliable car rental service."
      </HeroDescription>
      <HeroLink to="/catalog">Let's rent your dream car!</HeroLink>
    </>
  );
};

export default Hero;
