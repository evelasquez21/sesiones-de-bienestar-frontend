import Navbar from "../components/Navbar";

const AboutUs = () => {
    return(
        <>
        <Navbar/>
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-50 to-slate-100">
            <h1 className="text-3xl font-medium text-blue-300 md:py-[5%] pt-[25%] mb-4">Nosotros</h1>
            <div className="bg-white p-5 rounded-2xl shadow hover:shadow-md transition w-[90%]">
                
                <p className="text-xl text-gray-600">Sistema de Bienestar nació de una visión: hacer que el bienestar integral sea accesible para todos. Observamos cómo las exigencias de la vida moderna afectaban la salud física, mental y emocional de las personas, y comprendimos que se necesitaba un enfoque holístico para afrontar estos desafíos.</p>
            </div>
            
            
        </div>
        </>
    )
}

export default AboutUs;