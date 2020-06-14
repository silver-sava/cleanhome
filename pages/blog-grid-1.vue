<template>
    <div>
      <Header />
      <PageBanner banner-title="Blog " page-title="Blog Grid" />
      <BlogSidebar />
    </div>
</template>

<script>
    import Header from "~/components/Home/Header";
    import PageBanner from "~/components/Pages/PageBanner";
    import BlogSidebar from "~/components/Pages/BlogSidebar";
    export default {
        name: "blog-grid-1",
      components: {
        BlogSidebar,
        PageBanner,
          Header
      },
      head() {
        return {
          title: 'Blog Sidebar | Clean Home'
        }
      },
    }
</script>

<style scoped>

</style>
