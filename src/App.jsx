import Hero from "./section/Hero";
import PopularProducts from "./section/PopularProducts";
import SpecialQuality from "./section/SpecialQuality";
import Services from "./section/Services";
import SpecialOffer from "./section/SpecialOffer";
import CustomerReviews from "./section/CustomerReviews";
import Subscribe from "./section/Subscribe";
import Footer from "./section/Footer";

import Nav from "./components/Nav";
const App = () => {
  return (
    <main className=" relative">
      <Nav />

      <section className="lg:padding-l lg:padding-r padding-b  ">
        <Hero />
      </section>
      <section className="lg:padding-l lg:padding-r padding">
        <PopularProducts />
      </section>
      <section className="lg:padding-l lg:padding-r padding">
        <SpecialQuality />
      </section>
      <section className="lg:padding-l lg:padding-r padding-x sm:py-32 w-full">
        <Services />
      </section>
      <section className="lg:padding-l lg:padding-r padding">
        <SpecialOffer />
      </section>
      <section className="lg:padding-l xl:padding-r padding">
        <Subscribe />
      </section>
      <section className="padding-x padding-t pb-8 bg-black text-white">
        <Footer />
      </section>
    </main>
  );
};

export default App;
