<template>
    <div>
      <HeaderTwo />
      <SliderTwo />
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
    import HeaderTwo from "~/components/HomeTwo/HeaderTwo";
    import SliderTwo from "~/components/HomeTwo/SliderTwo";
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
        name: "index-2",
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
        SliderTwo,
          HeaderTwo
      },
      head(){
        return{
          title: 'Home 2 | Clean Home'
        }
      },
    }
</script>

<style scoped>

</style>
