<template>
    <div>
      <Header />
      <PageBanner banner-title="Reviews" page-title="Clients Reviews"/>
      <TestimonialsTwo />
    </div>
</template>

<script>
    import Header from "~/components/Home/Header";
    import PageBanner from "~/components/Pages/PageBanner";
    import TestimonialsTwo from "~/components/Pages/TestimonialsTwo";
    export default {
        name: "review",
      components: {
        TestimonialsTwo,
        PageBanner,
          Header
        },
      head(){
        return{
          title: 'Reviews | Clean Home'
        }
      },
    }
</script>

<style scoped>

</style>
