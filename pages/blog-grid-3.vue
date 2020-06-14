<template>
    <div>
      <Header />
      <PageBanner page-title="Blog Grid 3" banner-title="Blog Grid" />
      <BlogGridThree />
    </div>
</template>

<script>
    import Header from "~/components/Home/Header";
    import PageBanner from "~/components/Pages/PageBanner";
    import BlogGridThree from "~/components/Pages/BlogGridThree";
    export default {
        name: "blog-grid-3",
      components: {
        BlogGridThree,
        PageBanner,
          Header
      },
      head() {
        return {
          title: 'Blog Grid 3 | Clean Home'
        }
      },
    }
</script>

<style scoped>

</style>
