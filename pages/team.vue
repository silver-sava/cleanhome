<template>
    <div>
      <Header />
      <PageBanner banner-title="Our Team" page-title="Team" />
      <Team />
      <Banner />
    </div>
</template>

<script>
    import Header from "~/components/Home/Header";
    import PageBanner from "~/components/Pages/PageBanner";
    import Team from "~/components/Pages/Team";
    import Banner from "~/components/Home/Banner";
    export default {
        name: "team",
      components: {
        Banner,
        Team,
        PageBanner,
          Header
        },
      head(){
        return{
          title: 'Team | Clean Home'
        }
      },
    }
</script>

<style scoped>

</style>
