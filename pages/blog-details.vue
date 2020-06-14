<template>
    <div>
      <Header />
      <PageBanner banner-title="Blog" page-title="Blog Details"/>
      <BlogDetails />
    </div>
</template>

<script>
    import Header from "~/components/Home/Header";
    import PageBanner from "~/components/Pages/PageBanner";
    import BlogDetails from "~/components/Pages/BlogDetails";
    export default {
        name: "blog-details",
      components: {
        BlogDetails,
        PageBanner,
          Header
      },
      head() {
        return {
          title: 'Blog Details | Clean Home'
        }
      },
    }
</script>

<style scoped>

</style>
