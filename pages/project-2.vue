<template>
    <div>
      <Header />
      <PageBanner banner-title="Porject" page-title="Project 2 column"/>
      <ProjectTwo />
    </div>
</template>

<script>
    import Header from "~/components/Home/Header";
    import PageBanner from "~/components/Pages/PageBanner";
    import ProjectTwo from "~/components/Pages/ProjectTwo";
    export default {
        name: "project-2",
      components: {
        ProjectTwo,
        PageBanner,
          Header
      },
      head() {
        return {
          title: 'Project 2 | Clean Home'
        }
      },
    }
</script>

<style scoped>

</style>
