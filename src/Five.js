import React from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai';
const Five = () => {
    return (
        <div>
        <div class=" min-h-screen  relative bottom-30 w-30 p-4 border-4">
        <div class="ml-80 relative left-60">
        <img src="./assets/images/dl1.png" style={{width:"150px", height:"70px"}} class="relative right-56"/>
        <h1 class="text-bold ml-52 relative left-1 -mt-10 text-base underline  ">class room</h1>
        <img src=" ./assets/images/bell.png" class="relative left-96  -mt-7" />
        <img src="./assets/images/user.png" class="relative left-96 -mt-9"/>
        <img src="./assets/images/boy.png" style={{height:"150px",width:"200px"}} class="ml-92 mt-12"/>
        <h1 class="#3C3C3C relative right-40 mt-5 font-semibold text-2xl">WELCOME TO THE WORLD OF CYBER SECURITY</h1> 
        <div class="box-border h-32 w-3/4  border-4 relative right-52 mr-96">
        <img src="./assets/images/aws.jpg" style={{width:"200px", height:"120px"}} />
        <h1 class="#5C5C5C font-bold ml-96 relative bottom-28">AWS</h1>
        <h1 class="ml-52 relative -top-24">Lorem ipsum dolor sit amet,conseteur sed diam </h1>
        <h1 class="ml-52 relative -top-24">nonumy eimod tempor invidunt ut labore et-dolor </h1>
        </div>
        <div ><button class="border-2 bg-blue-500 text-center text-white w-36 h-10 relative left-96 bottom-24"> Start Course <AiOutlineArrowRight className='ml-32 relative bottom-4' size={20}></AiOutlineArrowRight> </button>
         </div>
        <div class="box-border h-32 w-3/4  border-4 relative right-52 mr-96">
        <img src="./assets/images/python.jpg" style={{width:"200px", height:"120px"}} />
        <h1 class="#5C5C5C font-bold ml-96 relative bottom-28 ">Python</h1>
        <h1 class="ml-52 relative -top-24 ">Lorem ipsum dolor sit amet,conseteur sed diam </h1>
        <h1 class="ml-52 relative -top-24 ">nonumy eimod tempor invidunt ut labore et-dolor</h1>
        </div>
        <div >
        <button class="border-2 bg-blue-500 text-center text-white w-36 h-10 ml-2 relative left-96 bottom-24"> Start Course <AiOutlineArrowRight className='ml-32 relative bottom-4' size={20}></AiOutlineArrowRight> </button> </div>
        </div>
        </div>
        </div>
    );
};
export default Five;
