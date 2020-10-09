var app = new Vue({
    el : "#app", 
    data :{
            image :'./image/sagh-kootah.jpg',
            inStock : true,
            stockCount : 100,
            details :['80% Cotton', '20%Polyster','for Femail'],
            sizes : ['small', 'medium','large'],
            cart :0,
            inShort :true,
            inTall :false,
            shortData :0,
            tallData :0,
            name :"",
        },
        methods:{
        counter : function(){
            this.cart +=1;
            if (this.inShort == true) {
                this.shortData+=1;
            }
            if (this.inTall == true) {
                this.tallData+=1;
            }
        },
        short : function () {
            this.image = './image/sagh-kootah.jpg';
            this.stockCount = 5;
            this.inShort =true;
            if (this.inTall == true) {
                this.inTall=false;
            }
        },
        tall :function(){
            this.image = './image/sagh-boland.jpg'
            this.stockCount = 40;
            this.inTall =true;
            if (this.inShort == true) {
                this.inShort =false;
            }
        }
    }
})