<template>
  <div>
    <Header :index="this.index"/>
    <Content :cQuestion="questionList[index]" :next="next" :index="index"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Content from './components/Content'


export default {
  name: 'App',
  components: {
    Header,
    Content
  },
  data(){
    return{
      questionList: [],
      index:0,
      finish:false,
    }
  },
  methods :{
    next(){
      if (this.index<9) {
        this.index++;
      }
    },
    
  },
  mounted: function(){
    fetch("https://opentdb.com/api.php?amount=10&category=21&difficulty=easy",{
      method:'get'
    }).then((response)=>{
      return response.json();
    }).then((result)=>{
      this.questionList = result.results;
    })
  }

}
</script>
