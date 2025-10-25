import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Button from "../components/Button"
import { useNavigate } from 'react-router-dom'

interface ServiceList {
    codigo: string;
    nombre: string;
    precio: number;
    duracion: number;
    maxConcurrentes: number;
    estado: boolean;
}

const Service: React.FC = () => {
    const [error, setError] = useState("");
    const [services, setServices] = useState<ServiceList[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        const conectApi = async () => {
            try {
                const response = await fetch("http://192.168.5.248:8080/api/servicios/lista",{
                    method: "GET"
                });

                if (!response.ok){
                    throw new Error(`Error ${response}`);
                }

                const data: ServiceList[] = await response.json();
                setServices(data);
            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        conectApi()
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
                <Navbar/>
                <h1 className="text-3xl">Cargando...</h1>
            </div>
        )
    }

    if (error){
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
                <Navbar/>
                <h1 className="text-3xl">Error: {error}</h1>
            </div>
        )
    }

    const navateService = () => {
        navigate("/login")
    }
    

  return (
    <>
    <Navbar/>
    <div className="min-h-screen items-center bg-gradient-to-br from-blue-50 to-slate-100 py-[5rem]">
        
        <h1 className="text-3xl text-blue-400 font-medium h-1 text-center mb-[3rem]">Servicios</h1>
        <div className="grid md:grid-cols-2 py-5 justify-items-center">
        {services.map(service => (
            <div key={service.codigo} className="bg-white grid shadow-lg rounded-2xl p-8 w-[90%] h-[100%] hover:w-[92%] hover:h-[102%] hover:transition-all duration-150 space-y-1.5">  
                <h1 className="text-2xl text-blue-400 hover:font-bold duration-150">{service.nombre}</h1>
                <hr className="text-blue-400"/>
                <p>
                    <b>Estado: </b>
                    <span className={service.estado ? "text-green-400" : "text-red-400"}>
                        {service.estado ? "•Activo" : "•Inactivo"}
                    </span>
                </p>
                <p><b>Precio:</b> Q{service.precio}</p>
                <p><b>Duración:</b> {service.duracion} minutos</p>
                <p className='mb-5'><b>Máximos concurrentes: </b>{service.maxConcurrentes}</p>
                <Button text="Agendar cita" type="button" onClick={navateService}></Button>
            </div>
        ))}
        </div>
        
        
        
    </div>
    </>
  )
}

export default Service
