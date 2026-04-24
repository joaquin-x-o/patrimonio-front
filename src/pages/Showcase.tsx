import { Button } from "../components/ui/Button/Button";
import { Input } from "../components/ui/Input/Input";
import { SummaryCard } from "../components/ui/Cards/SummaryCard";
import { Card } from "../components/ui/Common/Card";
import { FileDown, AlertTriangle, Search, CircleHelp, Package } from "lucide-react";
import { Badge } from "../components/ui/DataDisplay/Badge";
import { Bar } from "../components/ui/DataDisplay/BarGraph";
import { FooterLink } from "../components/ui/Button/FooterLink";
import { Table } from "../components/ui/DataDisplay/Table";
import type { ColumnDef } from "../interfaces/columnDef";
import { SearchableList } from "../components/ui/Search/SearchableList";
import { SearchListFormat } from "../components/ui/Search/SearchListFormat";
import { useState } from "react";
import { Modal } from "../components/ui/Common/Modal";

export default function Showcase() {

  // --- DATOS DE PRUEBA ---
  type MockData = {
    productCode: number;
    product: string;
    department: string;
    status: string;
  };

  // datos de ejemplo para la tabla 
  const tableData: MockData[] = [
    { productCode: 101, product: "Monitor Samsung 24", department: "Sistemas", status: "Activo" },
    { productCode: 102, product: "Silla ergonómica", department: "Dirección", status: "Baja" },
    { productCode: 103, product: "Notebook Dell", department: "Recepción", status: "Pendiente" },
  ];

  // columnas para la tabla
  const tableColumns: ColumnDef<MockData>[] = [
    { header: "CÓDIGO", accessorKey: "productCode" },
    { header: "PRODUCTO", accessorKey: "product" },
    { header: "ÁREA", accessorKey: "department" },
    {
      header: "ESTADO",
      accessorKey: "status",

      cell: (row: MockData) => {
        if (row.status === "Activo") return <Badge color="success">Activo</Badge>;
        if (row.status === "Baja") return <Badge color="danger">Baja</Badge>;
        return <Badge color="warning">Pendiente</Badge>;
      }
    }
  ];


  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-surface">
      <div className="max-w-5xl mx-auto space-y-12 text-foreground-muted">

        {/* Titulo de la página */}
        <div className="border-b border-neutral pb-5">
          <h1 className="text-3xl font-bold text-foreground-muted">Sección de pruebas</h1>
          <p className="mt-2">Sección para visualizar los componentes del proyecto.</p>
        </div>

        {/* Sección 1: Botones */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-foreground-muted">Botones</h2>
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
          <h2 className="text-xl font-semibold mb-4 text-foreground-muted">Inputs</h2>
          <div className="space-y-6 max-w-md">

            {/* input normal */}
            <Input
              id="nombre"
              label="Nombre del producto"
              placeholder="Ej. Monitor Samsung"
            />

            {/* input de búsqueda */}

            <Input
              id="busqueda"
              placeholder="Buscar por código..."
              className="rounded-full!"
              startIcon={<Search size={18} />}
            />

            {/* input con error */}

            <Input
              id="codigo"
              label="Código de Patrimonio"
              placeholder="Ej. 101"
              error="Este código ya se encuentra registrado."
            />

            {/* input deshabilitado */}
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
          <h2 className="text-xl font-semibold mb-4 text-foreground-muted">Tarjetas de Métricas (Summary Cards)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SummaryCard
              title="Total Productos"
              value="5.500"
              icon={<Package size={70} strokeWidth={1.5} />}
              bgColor="bg-primary-hover"
              to="/pruebas"
            />
            <SummaryCard
              title="Pendientes Revisión"
              value="20"
              icon={<AlertTriangle size={70} strokeWidth={1.5} />}
              bgColor="bg-warning"
              to="/pruebas"
            />
            <SummaryCard
              title="Bajas del Año"
              value="0"
              icon={<FileDown size={70} strokeWidth={1.5} />}
              bgColor="bg-danger"
              to="/pruebas"
            />
          </div>
        </section>

        {/* Sección 4: Tarjetas Contenedoras (Cards) */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-foreground-muted">Tarjetas Contenedoras (Cards)</h2>
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
              centerTitle={true}
              footerLinkTo="/pruebas"
              footerLinkLabel="Ver todos"
            >
              <p className="text-sm mb-4">
                Esta tarjeta muestra un título centrado, un total destacado y un enlace en el footer que redirige a otra página.
              </p>
            </Card>

            {/* Card con título centrado y botones (Acciones Rápidas) */}
            <Card title="Acciones Rápidas" centerTitle={true}>
              <div className="flex flex-col gap-3">
                <Button variant="primary" className="w-full justify-center">Crear nuevo producto</Button>
                <Button variant="primary" className="w-full justify-center">Modificar estado</Button>
                <Button variant="danger" className="w-full justify-center">Dar de baja</Button>
              </div>
            </Card>

          </div>
        </section>

        {/* Sección 5: Etiquetas de Estado (Badges) */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-foreground-muted">Etiquetas de Estado (Badges)</h2>
          <div className="flex flex-wrap gap-4">
            <Badge color="success">Activo</Badge>
            <Badge color="warning">Pendiente / En revisión</Badge>
            <Badge color="danger">Baja</Badge>
            <Badge color="default">En desuso</Badge>
          </div>
        </section>

        {/* Sección 6: Gráfico de Barra (BarGraph) */}
        <section>

          <h2 className="text-xl font-semibold mb-4 text-foreground-muted">Gráfico de Barra</h2>
          <div className="p-6 border-neutral rounded-xl max-w-2xl shadow-sm space-y-2">

            {/* Ejemplo grafico de barras */}
            <Bar
              label="Mobiliario"
              value={842}
              max={1000}
            />

            <Bar
              label="Equipamiento Informático"
              value={480}
              max={1000}
            />

            <Bar
              label="Vehículos"
              value={150}
              max={1000}
            />
          </div>
        </section>

        {/* Sección 7: Enlaces de Pie de Tarjeta (FooterLink) */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-foreground-muted">Enlaces de Acción (FooterLink)</h2>
          <div className="p-6 border border-neutral rounded-xl flex flex-wrap gap-8 items-center shadow-sm">

            {/* Ejemplo comportándose como enlace (Link de react-router-dom) */}
            <div className="flex flex-col gap-2 items-center">
              <span className="text-sm text-foreground-muted">Tipo: Enlace de navegación</span>
              <FooterLink
                label="Ver componentes"
                to="/pruebas"
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
          <h2 className="text-xl font-semibold mb-4 text-foreground-muted">Tabla de Datos Genérica (Table)</h2>
          <Table columns={tableColumns} data={tableData} />

        </section>

        {/* Sección 9: Resultados de Búsqueda (SearchResultsList) */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-foreground-muted">Resultados de Búsqueda</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SearchableList
              items={tableData}
              getKey={(item) => item.productCode}
              getSearchText={(item) => item.product}
              onSelect={(item) => alert(`Seleccionaste el producto: ${item.product}`)}
              placeholder="Buscar producto por nombre..."
              emptyMessage="No se encontraron productos"
            >
              {(product: MockData) => <SearchListFormat name={product.product} code={product.productCode} />}
            </SearchableList>

          </div>
        </section>

        {/* Sección 10: Modal */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-foreground-muted">Modal</h2>
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            Abrir modal
          </Button>

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Título del modal"
            maxWidth="xl"
          >
            <div className="p-10 flex flex-col items-center">
              <p className="text-xl">Contenido del modal</p>
              <p className="text-sm font-semibold my-4">(cerrar con el botón de abajo o con la x de la esquina superior derecha)</p>
              <Button className="text-sm" variant="outlinePrimary" onClick={() => setIsModalOpen(false)}>
                Cerrar modal
              </Button>
            </div>
          </Modal>
        </section>
      </div>
    </div>
  );
}