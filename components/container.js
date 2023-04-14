export default{
    name:"containers",
    template:/*html */`
            <div class="container">
                    <div class="hero-text">
                        <h3 v-text="container.h3"></h3>
                        <h1 v-text="container.h1"><span class="input" v-text="container.input">...</span></h1>
                        <p v-text="container.p"></p>
                            <div class="social">
                                <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#"><i class="fa-brands fa-instagram"><i class="fa-brands fa-dribbble"></i></i></a>
                                <a href="#"><i class="fa-brands fa-behance"></i></a>
                            </div>
                        <button type="button" v-text="container.button"></button>
                    </div>
                <div class="bottom">
                <p v-text="container.bottom"></p>
                </div>
            </div>

    `,
    data(){
        return{

        }
    },
    props:{
        container:Object
    }
}