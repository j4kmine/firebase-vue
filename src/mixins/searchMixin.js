export default{
  computed: {
    filterBlog: function () {
      return this.listing.filter(
        (blog) => {
          return blog.judul.match(this.search)
        }
      )
    }
  }
}
