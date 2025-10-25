import Navbar from "../components/Navbar";

const ContactUs = () => {
    return(
        <>
        <Navbar/>
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-blue-50 to-slate-100">
            <h1 className="text-3xl font-medium text-blue-300 md:py-[5%] pt-[25%] mb-4">Contacto</h1>
            <div className="bg-white p-5 rounded-2xl shadow hover:shadow-md transition">
                
                <p className="text-xl text-gray-600">correo electrónico: svelasqueze21@gmail.com</p>
            </div>
            
            
        </div>
        </>
    )
}

export default ContactUs;