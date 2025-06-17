import RegisterForm from "./Register";
function Landing() {
    return (
        <div className="flex flex-row justify-start items-start flex-nowrap gap-4">
            <div className="left-header p-10 md:w-1/2 w-full flex flex-col justify-center items-start relative">
            </div>
            <div className="md:block bg-white hidden w-250 relative">
                <div className="absolute top-35 left-65">
                    <RegisterForm />
                </div>
            </div>
        </div>

    );
}

export default Landing;
