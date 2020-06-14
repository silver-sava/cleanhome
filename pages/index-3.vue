<template>
  <div>
    <Header />
    <Slider />
    <WelcomeTwo />
    <AboutTwo />
    <Service />
    <Quote />
    <Pricing />
    <Choose />
    <Porject />
    <Counter />
    <Blog />
    <Banner />
  </div>
</template>

<script>
  import Header from "~/components/Home/Header";
  import Slider from "~/components/Home/Slider";
  import WelcomeTwo from "~/components/HomeThree/WelcomeTwo";
  import AboutTwo from "~/components/HomeThree/AboutTwo";
  import Service from "~/components/Home/Service";
  import Quote from "~/components/Home/Quote";
  import Pricing from "~/components/Home/Pricing";
  import Choose from "~/components/Home/Choose";
  import Porject from "~/components/Home/Porject";
  import Counter from "~/components/Home/Counter";
  import Blog from "~/components/Home/Blog";
  import Banner from "~/components/Home/Banner";
  export default {
    name: "index-3",
    components: {
      Banner,
      Blog,
      Counter,
      Porject,
      Choose,
      Pricing,
      Quote,
      Service,
      AboutTwo,
      WelcomeTwo,
      Slider,
      Header
    },
    head(){
      return{
        title: 'Home 3 | Clean Home'
      }
    },
  }
</script>

<style>

</style>
