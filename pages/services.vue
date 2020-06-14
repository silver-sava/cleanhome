<template>
    <div>
      <Header />
      <PageBanner banner-title="All Services"  page-title="Services"/>
      <Welcome />
      <Service />
      <Pricing />
    </div>
</template>

<script>
    import Header from "~/components/Home/Header";
    import PageBanner from "~/components/Pages/PageBanner";
    import Welcome from "~/components/Home/Welcome";
    import Service from "~/components/Home/Service";
    import Pricing from "~/components/Home/Pricing";
    export default {
        name: "services",
      components: {
        Pricing,
        Service,
        Welcome,
        PageBanner,
          Header
      },
      head(){
        return{
          title: 'Services | Clean Home'
        }
      },
    }
</script>

<style scoped>

</style>
