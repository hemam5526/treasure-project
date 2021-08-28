class Security{
    constructor(){
         this.input1 = createInput("code 1")
         this.input1.position(100,90)
         this.input1.style('background','lightblue')

         this.button1 = createButton("check")
         this.button1.position(100,120)
         this.button1.style('background','pink')

         this.input2 = createInput("code 1")
         this.input2.position(700,190)
         this.input2.style('background','green')

         this.button2 = createButton("check")
         this.button2.position(700,120)
         this.button2.style('background','white')

         this.input3 = createInput("code 1")
         this.input3.position(100,290)
         this.input3.style('background','yellow')

         this.button3 = createButton("check")
         this.button3.position(100,320)
         this.button3.style('background','brown')
    }
    display(){

       
        this.button1.mousePressed(()=>{
            console.log("Hello : ",this.input1.value)
            if(system.authenticate(axiscode1,this.input1.value())){
                this.input1.hide()
                this.button1.hide()
                score++
            }
        })
        
        this.button2.mousePressed(()=>{
            if(system.authenticate(axiscode2,this.input2.value())){
                this.input2.hide()
                this.button2.hide()
                score++
            }
        })

        this.button3.mousePressed(()=>{
            if(system.authenticate(axiscode3,this.input3.value())){
                this.input3.hide()
                this.button3.hide()
                score++
            }
        })
    }
}