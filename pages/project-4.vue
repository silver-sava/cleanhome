<template>
    <div>
      <Header />
      <PageBanner page-title="Project 4 column" banner-title="Project" />
      <Projects />
    </div>
</template>

<script>
    import Header from "~/components/Home/Header";
    import PageBanner from "~/components/Pages/PageBanner";
    import Projects from "~/components/Pages/Projects";
    export default {
        name: "project-4",
      components: {
        Projects,
        PageBanner,
          Header
      },
      head() {
        return {
          title: 'Project 4 | Clean Home'
        }
      },
    }
</script>

<style scoped>

</style>
