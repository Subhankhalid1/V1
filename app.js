var one=new Vue({
    el: '#vue-app',
    data: {
        health:100,
        ended: false,
        error: false,
        success: false,
        title: 'Hello World',
        name:'From Subhan',
        count:0,
        Myarrays:["Subhan", "Rana", "Khalid"],
       
    },
    methods:{
        greet:function(eve){
               return this.title+" "+this.name+" "+eve
        },
        increase:function(){
            this.count++
        },
        decrease:function(){
            
             this.count--
        },
        AddBy20:function(){
            this.count+=20;
        },
        SubtractBy20:function(){
            this.count-=20;
        },
        punch:function(){
            this.health-=10
            if(this.health<=0){
                this.ended=true;
            }


        },
        restart:function(){
            this.health=100;
            this.ended = false;
        }
    }
});

var two=new Vue({
    el: '#vue-app1',
    data:{
        name:"hello Rana"
    },
    methods:{
        greet:function(){
            return this.name
        },
        changed:function(){
            one.title="The title has been changed."
        }
    }

})