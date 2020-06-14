<template>
    <div>
      <Header />
      <PageBanner banner-title="FAQ" page-title="FAQ"/>
      <Faqs />
    </div>
</template>

<script>
    import Header from "~/components/Home/Header";
    import PageBanner from "~/components/Pages/PageBanner";
    import Faqs from "../components/Pages/Faqs";
    export default {
        name: "faq",
      components: {
        Faqs,
        PageBanner,
          Header
      },
      head(){
        return{
          title: 'FAQ | Clean Home'
        }
      },
    }
</script>

<style scoped>

</style>
