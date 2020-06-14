<template>
    <div>
      <Header />
      <PageBanner banner-title="Error" page-title="Error"/>
      <NotFound />
    </div>
</template>

<script>
    import Header from "~/components/Home/Header";
    import PageBanner from "~/components/Pages/PageBanner";
    import NotFound from "~/components/Pages/NotFound";
    export default {
        name: "error",
      components: {
        NotFound,
        PageBanner,
          Header
      },
      head(){
        return{
          title: 'Error| Clean Home'
        }
      },
    }
</script>

<style scoped>

</style>
