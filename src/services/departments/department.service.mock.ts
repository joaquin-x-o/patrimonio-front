import { departmentMock } from "../../mock/departments/departmentsMock";

// obtener departamento por codigo  
export const getDepartmentByCode = (code: string) => {
    const upperCode = code.toUpperCase();
    const dept = departmentMock.find(d => d.departmentCode === upperCode);
    if (!dept) throw new Error(`Departamento ${upperCode} no encontrado`);
    return dept;
};