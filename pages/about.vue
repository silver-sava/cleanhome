<template>
    <div>
      <Header />
      <PageBanner banner-title="About Us" page-title="About Us" />
      <AboutTwo />
      <AboutFeatures />
      <AboutTeam />
      <Testimonial />
      <AboutVideo />
    </div>
</template>

<script>
    import Header from "~/components/Home/Header";
    import PageBanner from "~/components/Pages/PageBanner";
    import AboutTwo from "~/components/HomeThree/AboutTwo";
    import AboutFeatures from "~/components/Pages/AboutFeatures";
    import AboutTeam from "~/components/Pages/AboutTeam";
    import Testimonial from "~/components/Pages/Testimonial";
    import AboutVideo from "~/components/Pages/AboutVideo";
    export default {
        name: "about",
      components: {
        AboutVideo,
        Testimonial,
        AboutTeam,
        AboutFeatures,
        AboutTwo,
        PageBanner,
          Header
      },
      head(){
        return{
          title: 'About Us | Clean Home'
        }
      },
    }
</script>

<style scoped>

</style>
