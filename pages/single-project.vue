<template>
    <div>
      <Header />
      <PageBanner page-title="Project Details" banner-title="Project" />
      <ProjectDetail />
      <ProjectRelated />
    </div>
</template>

<script>
    import Header from "~/components/Home/Header";
    import PageBanner from "~/components/Pages/PageBanner";
    import ProjectDetail from "~/components/Pages/ProjectDetail";
    import ProjectRelated from "~/components/Pages/ProjectRelated";
    export default {
        name: "single-project",
      components: {
        ProjectRelated,
        ProjectDetail,
        PageBanner,
          Header
      },
      head() {
        return {
          title: 'Single Project | Clean Home'
        }
      },
    }
</script>

<style scoped>

</style>
