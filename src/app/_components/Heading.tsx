import Image from "next/image";
const Heading = () => {
    return (
        <section>
            <div className="p-3">
                <div className="flex items-center justify-between ml-9 ">
                <Image src="/images/logo.png" alt="logo" width={72} height={83} />
                    <div className='text-white text-xs flex font-bold'>
                    <p>Login</p>
                     <p>/Sign-up</p>
                </div>
                </div>
                <div className="grid grid-rows-2 grid-flow-col gap-1">
                    <div className="row-start-1 row-span-1 pt-80 ml-6">  <Image
                        src="/images/connect.png"
                        alt="logo"
                        width={855}
                        height={340}
                    /></div>
                    <div className="row-start-2 row-span-2 ml-12 text-white"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br></br>do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button className="bg-[#25AB75] mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Join the movement</button>
                    </div>  
                    <div className="row-span-2 col-span-2 relative right-20 z-[-1] mr-9"> <Image
                        src="/images/woman.png"
                        alt="woman"
                        width={780}
                        height={10} />
                    </div> 
        
                </div>
                <div className="flex">
                <div className="text-white ml-2 ">
                        <Image className="z-[-1] relative left-12 mt-5"
                        src="/images/made.png"
                        alt="logo"
                        width={560}
                        height={300}
                    />

                        <Image className=" z-[-1] relative bottom-12 left-16"
                        src="/images/orange.png"
                        alt="logo"
                        width={504}
                        height={121}
                    />
                    </div> 
                    <div className="rectangle w-6/12 h-733px bg-white bg-opacity-5">
                        <div className="ml-12 text-white opacity-70 font-bold text-center items-center min h-full flex justify-center flex-col">
                            <p className=" text-2x">Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit, sed do eiusmod tempor <br></br>incididunt ut labore et dolore magna <br></br>aliqua consectetur adipiscing..</p>
                            <button className="bg-[#25AB75] mt-7 hover:bg-blue-700 font-bold py-2 px-4 rounded">Get Started</button>
                        </div> 

                    </div>
                </div>
                <div className="grid grid-rows-3 grid-flow-col">
                    <Image className=" row-end-3 row-span-2 ml-11"
                        src="/images/w-pray.png"
                        alt="logo"
                        width={321}
                        height={321}
                    />
                 
                    <Image className="row-start-2 row-span-2"
                        src="/images/w-hand.png"
                        alt="logo"
                         width={321}
                        height={321}
                    />
                    <Image className="row-end-3 row-span-2 mr-20"
                        src="/images/man.png"
                        alt="logo"
                        width={558}
                        height={514}
                    />
                </div>
            </div>
        </section>
      
    ) 
}

export default Heading;
