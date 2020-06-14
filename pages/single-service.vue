<template>
    <div>
      <Header />
      <PageBanner banner-title="Services Details" page-title="Services Details" />
      <SingleServices />
    </div>
</template>

<script>
    import Header from "../components/Home/Header";
    import PageBanner from "~/components/Pages/PageBanner";
    import SingleServices from "~/components/Pages/SingleServices";
    export default {
        name: "single-service",
      components: {
        SingleServices,
        PageBanner,
          Header
      },
      head(){
        return{
          title: 'Single-service | Clean Home'
        }
      },
    }
</script>

<style scoped>

</style>
