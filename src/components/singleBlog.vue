<template>
    <div class="container">
        <h1>{{blog.judul}}</h1>
        <article>{{blog.isi}}</article>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                blogid:this.$route.params.id,
                blog:{}
            }
        },
        created(){
              this.$http.get('https://node-b7273.firebaseio.com/posts/'+this.blogid+'.json').then(response => {
                this.blog = response.body;
            }, response => {
               console.log(response);
            });
        }
    }
</script>