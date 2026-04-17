import { Button } from "../components/ui/Button/Button";
import { Input } from "../components/ui/Input";
import { SummaryCard } from "../components/ui/SummaryCard";
import { Card } from "../components/ui/Card"; // Asumiendo que está en esta ruta
import { FileDown, AlertTriangle, CheckCircle, Search, CircleHelp } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { Bar } from "../components/ui/BarGraph";
import { FooterLink } from "../components/ui/FooterLink";
import { Table } from "../components/ui/Table";
import type { ColumnDef } from "../interfaces/columnDef";
import { SearchResultsList } from "../components/ui/SearchResultsList"; 

export default function Showcase() {
  // --- DATOS DE PRUEBA PARA LA TABLA ---
  
  // 1. Le avisamos a TypeScript la forma de nuestros datos
  type MockData = {
    id: number;
    producto: string;
    area: string;
    estado: string;
  };

  // 2. Tipamos el array de datos
  const tableData: MockData[] = [
    { id: 101, producto: "Monitor Samsung 24", area: "Sistemas", estado: "Activo" },
    { id: 102, producto: "Silla ergonómica", area: "Dirección", estado: "Baja" },
    { id: 103, producto: "Notebook Dell", area: "Recepción", estado: "Pendiente" },
  ];

  // 3. Tipamos las columnas usando la interfaz del proyecto
  const tableColumns: ColumnDef<MockData>[] = [
    { header: "CÓDIGO", accessorKey: "id" },
    { header: "PRODUCTO", accessorKey: "producto" },
    { header: "ÁREA", accessorKey: "area" },
    { 
      header: "ESTADO", 
      accessorKey: "estado",
      // Ahora "row" sabe que es de tipo MockData
      cell: (row: MockData) => {
        if (row.estado === "Activo") return <Badge color="success">Activo</Badge>;
        if (row.estado === "Baja") return <Badge color="danger">Baja</Badge>;
        return <Badge color="warning">Pendiente</Badge>;
      }
    }
  ];
  // -------------------------------------
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

        {/* Sección 5: Etiquetas de Estado (Badges) */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-foreground">Etiquetas de Estado (Badges)</h2>
          <div className="flex flex-wrap gap-4">
            {/* Renderizamos las 4 variantes exactas que definió Joaquín */}
            <Badge color="success">Activo</Badge>
            <Badge color="warning">Pendiente / En revisión</Badge>
            <Badge color="danger">Baja</Badge>
            <Badge color="default">En desuso</Badge>
          </div>
        </section>

        {/* Sección 6: Gráficos de Barra (BarGraph) */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-foreground">Gráficos de Barra</h2>
          <div className="p-6 bg-surface-muted border border-neutral rounded-xl max-w-2xl shadow-sm space-y-2">

            {/* Ejemplo con label de texto y valor alto */}
            <Bar
              label="Mobiliario"
              value={842}
              max={1000}
            />

            {/* Ejemplo con valor medio */}
            <Bar
              label="Equipamiento Informático"
              value={480}
              max={1000}
            />

            {/* Ejemplo con valor bajo */}
            <Bar
              label="Vehículos"
              value={150}
              max={1000}
            />
          </div>
        </section>

        {/* Sección 7: Enlaces de Pie de Tarjeta (FooterLink) */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-foreground">Enlaces de Acción (FooterLink)</h2>
          <div className="p-6 bg-surface-muted border border-neutral rounded-xl flex flex-wrap gap-8 items-center shadow-sm">

            {/* Ejemplo comportándose como enlace (Link de react-router-dom) */}
            <div className="flex flex-col gap-2 items-center">
              <span className="text-sm text-foreground-muted">Tipo: Enlace de navegación</span>
              <FooterLink
                label="Ver todos los productos"
                to="/productos"
              />
            </div>

            {/* Ejemplo comportándose como botón (Dispara una función) */}
            <div className="flex flex-col gap-2 items-center">
              <span className="text-sm text-foreground-muted">Tipo: Botón de acción</span>
              <FooterLink
                label="Confirmar acción"
                onClick={() => alert("¡FooterLink funcionando como botón!")}
              />
            </div>

          </div>
        </section>

        {/* Sección 8: Tabla de Datos Genérica (Table) */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-foreground">Tabla de Datos</h2>
          <div className="bg-surface border border-neutral rounded-xl overflow-hidden shadow-sm">
            <Table columns={tableColumns} data={tableData} />
          </div>
        </section>

        {/* Sección 9: Resultados de Búsqueda (SearchResultsList) */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-foreground">Resultados de Búsqueda</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Ejemplo 1: Con resultados (Reutilizamos el tableData de la sección anterior) */}
            <div className="bg-surface border border-neutral rounded-xl shadow-sm overflow-hidden">
              <div className="p-3 bg-surface-muted border-b border-neutral font-medium text-sm text-foreground-muted">
                Búsqueda: "Monitor"
              </div>
              <SearchResultsList
                items={tableData}
                getKey={(item) => item.id}
                onSelect={(item) => alert(`Seleccionaste el producto: ${item.producto}`)}
              >
                {/* Acá definimos cómo se dibuja CADA elemento de la lista */}
                {(item) => (
                  <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col text-left">
                      <span className="font-semibold text-foreground">{item.producto}</span>
                      <span className="text-xs text-foreground-muted">Área: {item.area}</span>
                    </div>
                    <span className="text-xs font-mono bg-surface-muted border border-neutral px-2 py-1 rounded">
                      Cod: {item.id}
                    </span>
                  </div>
                )}
              </SearchResultsList>
            </div>

            {/* Ejemplo 2: Sin resultados */}
            <div className="bg-surface border border-neutral rounded-xl shadow-sm overflow-hidden">
               <div className="p-3 bg-surface-muted border-b border-neutral font-medium text-sm text-foreground-muted">
                Búsqueda: "Proyector 4K"
              </div>
              <SearchResultsList
                items={[]} // Array vacío para forzar el mensaje
                getKey={(item: any) => item.id}
                onSelect={() => {}}
                emptyMessage="No se encontraron productos con ese criterio."
              >
                {() => null}
              </SearchResultsList>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}