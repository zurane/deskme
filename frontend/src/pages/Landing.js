import RegisterForm from "../RegisterForm";
function Landing() {
    return (
        <div className="flex flex-row">
            <div className="left-header p-10 md:w-1/2 w-full flex flex-col justify-center items-start relative">
            </div>
            <div className="md:block bg-white-50 hidden w-250 relative">
                <div className="absolute top-40 left-65">
                    <RegisterForm />
                </div>
            </div>
        </div>

    );
}

export default Landing;
