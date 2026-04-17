import { Button } from "../components/ui/Button/Button";
import { Input } from "../components/ui/Input";
import { SummaryCard } from "../components/ui/SummaryCard";
import { Card } from "../components/ui/Card"; // Asumiendo que está en esta ruta
import { FileDown, AlertTriangle, CheckCircle, Search, CircleHelp } from "lucide-react";

export default function Showcase() {
  return (
    <div className="min-h-screen p-8 bg-surface">
      <div className="max-w-5xl mx-auto space-y-12 text-foreground-muted">
        
        {/* Titulo de la página */}
        <div className="border-b border-neutral pb-5">
          <h1 className="text-3xl font-bold text-foreground">Sección de pruebas</h1>
          <p className="mt-2">Sección para visualizar los componentes del proyecto.</p>
        </div>

        {/* Sección 1: Botones */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-foreground">Botones</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Botón</Button>
            <Button variant="danger">Botón</Button>
            <Button variant="warning">Botón</Button>
            <Button variant="success">Botón</Button>
            <Button variant="neutral">Botón</Button>
            <Button variant="invisible">Botón</Button>
            <Button variant="outlinePrimary">Botón</Button>
            <Button variant="invisible" icon={<CircleHelp size={20} />}>Botón</Button>
          </div>
        </section>

        {/* Sección 2: Inputs */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-foreground">Inputs</h2>
          <div className="space-y-4 max-w-md">
            <Input 
              id="nombre" 
              label="Nombre del producto" 
              placeholder="Ej. Monitor Samsung" 
            />
            <Input 
              id="busqueda" 
              placeholder="Buscar por código..." 
              startIcon={<Search size={18} />} 
            />
            <Input 
              id="codigo" 
              label="Código de Patrimonio" 
              placeholder="Ej. 101" 
              error="Este código ya se encuentra registrado." 
            />
            <Input 
              id="area" 
              label="Área asignada" 
              value="Dirección de Patrimonio (A1)"
              disabled
            />
          </div>
        </section>

        {/* Sección 3: Tarjetas de Métricas (Summary Cards) */}
        <section>
           <h2 className="text-xl font-semibold mb-4 text-foreground">Tarjetas de Métricas</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <SummaryCard 
               title="Total Productos" 
               value="5.500" 
               icon={<CheckCircle size={70} strokeWidth={1.5} />}
               bgColor="bg-primary-hover" 
               to="/productos" 
             />
             <SummaryCard 
               title="Pendientes Revisión" 
               value="20" 
               icon={<AlertTriangle size={70} strokeWidth={1.5} />}
               bgColor="bg-warning" 
               to="/reportes/revision" 
             />
             <SummaryCard 
               title="Bajas del Año" 
               value="0" 
               icon={<FileDown size={70} strokeWidth={1.5} />}
               bgColor="bg-danger" 
               to="/reportes/bajas" 
             />
           </div>
        </section>

        {/* Sección 4: Tarjetas Contenedoras (Cards) */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-foreground">Tarjetas Contenedoras (Cards)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card estándar sin footer */}
            <Card title="Información de Área">
              <p className="text-sm">
                Esta es una tarjeta básica que contiene solo un título y elementos internos. Ideal para formularios o detalles estáticos.
              </p>
            </Card>

            {/* Card con total y enlace al footer */}
            <Card 
              title="Gestión de Productos" 
              total={150} 
              footerLinkTo="/productos" 
              footerLinkLabel="Ver tabla completa"
            >
              <div className="flex flex-col gap-2">
                <div className="p-3 bg-surface-muted rounded-md border border-neutral text-sm flex justify-between">
                  <span>Monitor Samsung</span>
                  <span className="font-bold text-primary">Cod: 101</span>
                </div>
                <div className="p-3 bg-surface-muted rounded-md border border-neutral text-sm flex justify-between">
                  <span>Silla de Oficina</span>
                  <span className="font-bold text-primary">Cod: 102</span>
                </div>
              </div>
            </Card>

            {/* Card con título centrado y botones (Acciones Rápidas) */}
            <Card title="Acciones Rápidas" centerTitle={true}>
              <div className="flex flex-col gap-3">
                <Button variant="primary" className="w-full justify-center">Crear nuevo producto</Button>
                <Button variant="outlinePrimary" className="w-full justify-center">Modificar estado</Button>
              </div>
            </Card>

          </div>
        </section>

      </div>
    </div>
  );
}