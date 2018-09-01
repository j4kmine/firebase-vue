<template>
    <div>
        <div class="container" >
            <div class="col-xs-12" v-if="!submitted" >
                <div class="form-group">
                    <label for="body">Judul</label>
                    <input type="title" class="form-control" v-model.lazy="blog.judul"  placeholder="Judul Berita">
                </div>
                 <div class="form-group">
                    <label for="body">Body</label>
                    <textarea class="form-control" id="body" v-model.lazy="blog.isi"  rows="3"></textarea>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" value="Advetorial" v-model="blog.tipe"> Advetorial</label>
                    <label> <input type="checkbox" value="Headline"  v-model="blog.tipe"> Headline</label>
                    <label> <input type="checkbox" value="Ekonografik"  v-model="blog.tipe"> Ekonografik</label>
                </div>
                 <div class="form-group">
                    <label for="penulis">Penulis:</label>
                    <select class="form-control" id="penulis" v-model="blog.penulis">
                        <option v-for="writter in penulis">{{writter}}</option>
                        
                    </select>
                </div>
                <input v-on:click.prevent="publish" class="btn btn-primary" type="button" value="Input">
            </div>
           
            <hr/>
            <div v-if="submitted" class="alert alert-success">
                <strong>Success!</strong> Indicates a successful or positive action.
            </div>
            <h3>Judul : {{blog.judul}} </h3>
            <p>-- {{blog.isi}}</p>
            <ul>
                <li v-for="tipe in blog.tipe">{{tipe}}</li>
            </ul>
            <p>{{blog.penulis}}</p>
        </div>
    </div>
</template>
<script>
export default{
  data(){
      return{
          blog:{
            judul:"",
            isi:"",
            tipe:[],
            penulis:"",
          },
          penulis:["Markonah","Ngadiyon","Jumintents"],
          submitted:false
      }
  },
  methods:{
      publish:function(){
            this.$http.post('https://node-b7273.firebaseio.com/posts.json',this.blog).then(response => {
           
                this.submitted = true
            });
      }
  }
}
</script>
<style>

</style>