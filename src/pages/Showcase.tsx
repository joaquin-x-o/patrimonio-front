import { Button } from "../components/ui/Button/Button";
import { CircleQuestionMark } from "lucide-react";


export default function Showcase() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto space-y-12 text-foreground-muted">

        {/* Titulo */}
        <div className="border-b pb-5">
          <h1 className="text-3xl font-bold">Sección de pruebas</h1>
          <p className="mt-2">
            Sección para visualizar los componentes del proyecto.
          </p>
        </div>

        {/* Botones */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Botones</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Botón</Button>
            <Button variant="danger">Botón</Button>
            <Button variant="warning">Botón</Button>
            <Button variant="success">Botón</Button>
            <Button variant="neutral">Botón</Button>
            <Button variant="invisible">Botón</Button>
            <Button variant="outlinePrimary">Botón</Button>
            <Button variant="invisible" icon={<CircleQuestionMark />}>Botón</Button>
          </div>
        </section>

        {/* Inputs */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Inputs</h2>
          <div className="space-y-4 max-w-md">
            {/*...*/}
          </div>
        </section>

        {/* Cards */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/*...*/}
          </div>
        </section>

        {/* Tablas */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Tablas</h2>
          <div>
            {/*...*/}
          </div>
        </section>

        {/* Badges */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Badges</h2>
          <div className="flex gap-4">
            {/*...*/}
          </div>
        </section>

        {/* Gráficos */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Gráficos</h2>
          <div>
            {/*...*/}
          </div>
        </section>

        {/* Listas / búsqueda */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Búsqueda / Listas</h2>
          <div>
            {/*...*/}
          </div>
        </section>

      </div>
    </div>
  );
}