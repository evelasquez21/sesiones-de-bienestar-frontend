import Navbar from "../components/Navbar";

const Home = () => {
    return(
        <>
        <Navbar/>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <h1>Desde home</h1>
            </div>
        </div>
        </>
    )
}

export default Home;