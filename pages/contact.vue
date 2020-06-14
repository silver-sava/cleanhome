<template>
    <div>
      <Header />
      <PageBanner page-title="Contact us" banner-title="Contact" />
      <ContactDetails />
      <Map />
    </div>
</template>

<script>
    import Header from "~/components/Home/Header";
    import PageBanner from "~/components/Pages/PageBanner";
    import ContactDetails from "~/components/Pages/ContactDetails";
    import Map from "~/components/Pages/Map";
    export default {
        name: "contact",
      components: {
        Map,
        ContactDetails,
          PageBanner,
        Header
      },
      head() {
        return {
          title: 'Contact us | Clean Home'
        }
      },
    }
</script>

<style scoped>

</style>
