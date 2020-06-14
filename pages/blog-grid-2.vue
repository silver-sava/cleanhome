<template>
    <div>
      <Header />
      <PageBanner banner-title="Blog Grid" page-title="Blog Grid 2" />
      <BlogGridTwo />
    </div>
</template>

<script>
    import Header from "~/components/Home/Header";
    import PageBanner from "~/components/Pages/PageBanner";
    import BlogGridTwo from "~/components/Pages/BlogGridTwo";
    export default {
        name: "blog-grid-2",
      components: {
        BlogGridTwo,
          PageBanner,
        Header
      },
      head() {
        return {
          title: 'Blog Grid 2 | Clean Home'
        }
      },
    }
</script>

<style scoped>

</style>
