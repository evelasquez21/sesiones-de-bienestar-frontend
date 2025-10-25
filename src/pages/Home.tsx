import Navbar from "../components/Navbar";

const Home = () => {
    return(
        <>
        <Navbar/>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
            <h1 className="text-8xl font-medium text-blue-300">Sesiones de bienestar</h1>
            <p className="text-2xl text-gray-600">Encuentra tu servico y reserva tu cita</p>
        </div>
        </>
    )
}

export default Home;