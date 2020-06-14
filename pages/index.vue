<template>
  <div>
    <Header />
    <Slider />
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
  import Header from "~/components/Home/Header";
  import Slider from "~/components/Home/Slider";
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
      Slider,
      Header
    },
    head(){
      return{
        title: 'Home 1 | Clean Home'
      }
    },
  }
</script>

<style>

</style>
