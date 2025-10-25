import React from "react";
import DashboardLayout from "../../layout/DashboardLayout";


export default function ServiceList() {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Servicios</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Servicios activos", count: 12 },
          { title: "Usuarios registrados", count: 48 },
          { title: "Citas hoy", count: 5 },
        ].map((card) => (
          <div
            key={card.title}
            className="bg-white p-5 rounded-2xl shadow hover:shadow-md transition"
          >
            <h3 className="text-gray-600 text-sm">{card.title}</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">{card.count}</p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
