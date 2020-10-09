<template>
    <div>
        <b-container >
            <b-col sm="7" offset="2">
                <b-jumbotron class="flex flex-row" v-if="!(index==8 && answered==true)">
                    <h2 v-html="cQuestion.question"></h2>
                    <hr>
                    <b-list-group>
                        <b-list-group-item @click="changeIndex(i)" 
                        :class="[ 
                        cIndex===i && !answered ? 'bg-info' 
                        :answered && i===correctAnswer ? 'bg-success'
                        :answered && i!==correctAnswer && i===cIndex?'bg-danger'
                        :''
                        ]"
                         v-for="(answer,i) in answers" :key="i" class="list_item">
                            {{ answer }}
                        </b-list-group-item>
                    </b-list-group>
                    <b-button type="submit" variant="success" @click="answerReco" class="m-2 mt-3 "
                        :disabled="cIndex===null || answered"
                    >Submit</b-button>
                    <b-button variant="secondary" :disabled="!answered" class="m-2 mt-3"  @click="next">Next</b-button>
                </b-jumbotron>
                <b-jumbotron class="flex flex-row" v-if="index==8 && answered==true">
                    <div>
                        Your result of sport exam:
                        <br><br>
                        <img :src="srcCorrect" alt="" width="100px" height="100px" class="mr-4"> Correct: {{ countCorrect }}
                        <br><br>
                        <img :src="srcWrong" alt="" width="100px" height="100px" class="mr-4"> Wrong: {{ countWrong }}
                    </div>
                </b-jumbotron>
            </b-col>
        </b-container>
    </div>
</template>

<script>
export default {
    props:{
        cQuestion:Object,
        next : Function,
        index : Number,
    },
    data(){
        return{
            cIndex :null,
            correctAnswer :null,
            answered :false,
            countCorrect:0,
            countWrong:0,
            finish: true,
            srcWrong:'https://vectorified.com/images/cancel-icon-png-7.png',
            srcCorrect:'https://www.iconfinder.com/data/icons/main-ui-elements-with-colour-bg/512/ok_cool_save_okay-512.png',
        }
    },
    methods:{
        changeIndex(i){
            this.cIndex=i;
        },
        answerReco(){
            if (this.cIndex == this.correctAnswer) {
                this.countCorrect++;
            }else{
                this.countWrong++;
            }
            this.answered = true;
        },
        
    },
    watch:{
        cQuestion(){
            this.cIndex = null;
            this.answered = null;
        },
        cIndex(){
            this.correctAnswer = this.answers.indexOf(this.cQuestion.correct_answer) ;
        },
        // answered(){
        //     this.cIndex = null;
        // }
    },
    computed:{
        answers(){
            let answers = [...this.cQuestion.incorrect_answers];
            answers.push(this.cQuestion.correct_answer);
            for (let index = answers.length; index>0;) {
                let j=parseInt(Math.random()*index);
                let x=answers[--index] ;
                answers[index]=answers[j];
                answers[j]=x;
            }
            return answers

        },
        
    },
    
}
</script>
<style scoped>
    .list_item:hover{
        background-color: rgb(199, 199, 202);
        cursor: pointer;
    }
</style>