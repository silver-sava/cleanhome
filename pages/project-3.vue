<template>
    <div>
      <Header />
      <PageBanner banner-title="Project" page-title="Project 3 column"/>
      <Porject />
    </div>
</template>

<script>
    import Header from "~/components/Home/Header";
    import PageBanner from "~/components/Pages/PageBanner";
    import Porject from "../components/Home/Porject";
    export default {
        name: "project-3",
      components: {
        Porject,
        PageBanner,
          Header
      },
      head() {
        return {
          title: 'Project 3 | Clean Home'
        }
      },
    }
</script>

<style scoped>

</style>
