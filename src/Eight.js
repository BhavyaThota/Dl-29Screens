import React from 'react'

const Eight = () => {
    return (
        
        <div class=" min-h-screen  relative bottom-30 w-30 p-4 border-4" style={{backgroundColor:"#EBF3FE"}}>
        <div>
        <img src="./assets/Images/girl1.png" class="relative bottom-60 right-12"/>
        </div>
        <div class=" ml-96 relative left-56 mt-16">
        <img src="./assets/images/dl1.png" style={{width:"150px", height:"70px",position:"relative",bottom:1000 }}/>
        </div>
        <div class="border-4  w-6/12 h-96  p-4 border-indigo-50  ml-96 mt-16 bg-gray-50 text-gray-800 " style={{position:"relative",bottom:1000}}>
        
        <h1 class="text-gray-800 ml-48">RESET YOUR PASSWORD</h1>
        <h3 class="text-gray-600 ml-14 mt-10">Please provide the email address you used when you signed up <br /></h3>
         <h3 class="text-gray-600 ml-48 mt-"> for your OSAcad account.</h3>
         <h3 class="text-gray-800 mt-16 ml-6">EMAIL ADDRESS</h3>
         <div class=" border-b-2 border-slate-300 mt-3  "></div>
         <button class="type-button  ml-56 mt-16 border-8 border-stone-100 text-violet-50 bg-blue-700 rounded-full w-40" >SEND EMAIL</button>
        </div>
       
        </div>
    );
};

export default Eight;
