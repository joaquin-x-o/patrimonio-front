import { SummaryCard } from "../components/ui/SummaryCard";
import { Card } from "../components/ui/Card";
import { Bar } from "../components/ui/BarGraph";
import { useSidebar } from "../components/layout/sidebar/SidebarProvider";
import { Table } from "../components/ui/Table";
import { LinkButton } from "../components/ui/Button/LinkButton";
import { ProductColumnNames } from "../components/features/products/ProductColumnNames";

import { getDepartmentByCode } from "../services/departments/department.service.mock";

import { Package, AlertTriangle, FileDown } from "lucide-react";
import { DepartmentNameFormat } from "../components/features/departments/DepartmentNameFormat";
import { getProducts } from "../services/products/product.service.mock";


export default function Dashboard() {
    const { isExpanded, setIsExpanded } = useSidebar();

    // stats (mock)
    const currentYearRetirementReports = 0
    const totalProductsToReview = 0;

    const products = getProducts();
    const totalProducts = products.total;

    return (
        <div className="flex flex-col gap-8 md:px-6 lg:px-5 py-4" >
            {/* RESUMEN PRINCIPAL */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <SummaryCard
                    title="Total Productos"
                    value={totalProducts}
                    icon={<Package size={70} strokeWidth={1.5} />}
                    bgColor="bg-primary-hover"
                    to="/producto/gestion-productos"
                />

                <SummaryCard
                    title="Pendientes Revisión"
                    value={totalProductsToReview}
                    icon={<AlertTriangle size={70} strokeWidth={1.5} />}
                    bgColor="bg-warning"
                    to="/producto/pendientes-revision"
                />

                <SummaryCard
                    title="Bajas del Año"
                    value={currentYearRetirementReports}
                    icon={<FileDown size={70} strokeWidth={1.5} />}
                    bgColor="bg-danger"
                    to="/gestion-reportes/bajas"
                />
            </div>


            {/* GRAFICO AREAS Y ACCIONES RAPIDAS*/}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    {/* grafico de gestion de areas */}
                    <Card title="GESTIÓN DE ÁREAS" footerLinkTo="/area/gestion-areas">

                        {/* top 3 areas con mas productos (mock) */}
                        <Bar label={
                            <DepartmentNameFormat
                                departmentCode={getDepartmentByCode("B2").departmentCode}
                                name={getDepartmentByCode("B2").name}
                            />
                        } value={842} max={1000} />
                        <Bar label={
                            <DepartmentNameFormat
                                departmentCode={getDepartmentByCode("C4").departmentCode}
                                name={getDepartmentByCode("C4").name}
                            />
                        } value={654} max={1000} />
                        <Bar label={
                            <DepartmentNameFormat
                                departmentCode={getDepartmentByCode("T1").departmentCode}
                                name={getDepartmentByCode("T1").name}
                            />
                        } value={480} max={1000} />
                    </Card>
                </div>

                {/* botones de acciones rapidas generales*/}
                <div>
                    <Card title="ACCIONES RÁPIDAS" onFooterClick={() => setIsExpanded(!isExpanded)} >
                        <div className="flex flex-col gap-3 py-2">

                            <LinkButton variant="primary" to="/producto/crear" className="w-full py-3">
                                Crear producto
                            </LinkButton>

                            <LinkButton variant="primary" to="/producto/editar-estado" className="w-full py-3">
                                Modificar estado de producto
                            </LinkButton>

                            <LinkButton variant="primary" to="/producto/transferir" className="w-full py-3">
                                Transferir producto
                            </LinkButton>

                        </div>

                    </Card>
                </div>
            </div>

            {/* TABLA DE PRODUCTOS */}
            <div>
                <Card title="ÚLTIMOS PRODUCTOS" footerLinkTo="/producto/gestion-productos">
                    <Table columns={ProductColumnNames} data={products.data}></Table>
                </Card>
            </div>

        </div >
    );
}