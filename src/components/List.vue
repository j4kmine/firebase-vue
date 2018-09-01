<template>
    <div class="container">
        <h3>Listing</h3>
        <input type="text" class="form-control"  v-model="search" />
        <div v-tema:column="narrow" v-for="list in filterBlog" class="col-xs-8">
            <router-link v-bind:to="'/blog/'+list.id"><h3 v-rainbow>{{list.judul | to-uppercase}}</h3></router-link>
            <p>{{list.isi | snippet }}</p>
            <hr/>
        </div>
    
    </div>
</template>
<script>
import searchMixins from '../mixins/searchMixin'
export default{
    data(){
        return{
            listing:[],
            search:''
        }
    },
    created(){
             this.$http.get('https://node-b7273.firebaseio.com/posts.json').then(function(data){
                 return data.json();
             }).then(function(data){
                 var blogsArray = [];
                 for(let key in data){
                     data[key].id =key;
                     blogsArray.push(data[key]);
                 }
                 this.listing = blogsArray;
        
             })
 
    },
    filters:{
        toUppercase(value){
            return value.toUpperCase()
        }
    },
    directives:{
        'rainbow':{
             bind (el) {
                el.style.color = '#' + Math.random().toString().slice(2, 8)
            }
        }
    },
    mixins:[searchMixins]
}
</script>
<style>
</style>