Vue.component('greetings',{
    template:'<p> hey there, i am {{name}} . <button v-on:click="changedName">Changed Name </button></p>',
data:function(){
    return{
        name:"Subhan KHalid"
    }
},
methods:{
    changedName:function(){
        this.name="Rana Subhan Khan"
    }
}
})

new Vue({
    el:'#vue-app',
    data:{ 

    }
})

new Vue({
    el:'#vue-app1',
    data:{

    }
})