<template>
  <div>
    <HeaderFour />
    <SliderFour />
    <Welcome />
    <About />
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
  import HeaderFour from "../components/HomeFour/HeaderFour";
  import SliderFour from "../components/HomeFour/SliderFour";
  import Welcome from "~/components/Home/Welcome";
  import About from "~/components/Home/About";
  import Service from "~/components/Home/Service";
  import Quote from "~/components/Home/Quote";
  import Pricing from "~/components/Home/Pricing";
  import Choose from "~/components/Home/Choose";
  import Porject from "~/components/Home/Porject";
  import Counter from "~/components/Home/Counter";
  import Blog from "~/components/Home/Blog";
  import Banner from "~/components/Home/Banner";

  export default {
    name: "index-4",
    components: {
      Banner,
      Blog,
      Counter,
      Porject,
      Choose,
      Pricing,
      Quote,
      Service,
      About,
      Welcome,
      SliderFour,
      HeaderFour
    },
    head(){
      return{
        title: 'Home 4 | Clean Home'
      }
    },
  }
</script>

<style>

</style>
