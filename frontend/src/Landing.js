import Register from "./Register";
import arrow from "./assets/custom-arrow-icon-2.svg";

function Landing() {
    return (

        <div className="flex flex-row justify-start items-start flex-nowrap gap-4">
            <div className="left-header p-10 md:w-1/2 w-full flex flex-col justify-center items-start relative">
                <div className="absolute bottom-30 left-15 w-3/4">
                    <h1 className="text-3xl text-white font-bold">Your digital study desk</h1>
                    <img src={arrow} alt="Brand Logo" className="w-30 my-3" />
                    <p className="text-white text-md font-medium w-130">We deliver classroom content through access to curated resources and material — with the ability to track your growth through realtime teacher feedback and metrics.
                    </p>
                    {/* <div className="mt-5">
                        <a className="btn-grad" href="www.google.com">Learn more</a>
                    </div> */}
                </div>
            </div>
            <div className="md:block bg-white hidden w-250 relative">
                <div className="absolute top-35 left-65">
                    <Register />
                </div>
            </div>
        </div>

    );
}

export default Landing;
