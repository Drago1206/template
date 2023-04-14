export default{
    name:"mymodulo",
    template:/*html */`
    
                <header>
                    <div class="logo">
                        <i class="fa-solid fa-e"></i>
                    </div>
                    <nav >
                        <div class="hamb">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ul class="nav-list">
                        <li><a href="#" v-text="header.nav[0]"></a></li>
                        <li><a href="#" v-text="header.nav[1]"></a></li>
                        <li><a href="#" v-text="header.nav[2]"></a></li>
                        <li><a href="#" v-text="header.nav[3]"></a></li>
                        <li class="btn"><a href="#" v-text="header.nav[4]" ></a></li>
                        </ul>
                    </nav>
                </header>

    `,
    data(){
        return{

        }
    },
    props:{
        header: Object
    }
}