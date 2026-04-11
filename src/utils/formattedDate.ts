// conversion de fecha universal (YYYY/MM/DD) a fecha local (DD/MM/YYYY)
export function formatDateAR(dateString: string | null | undefined): string {
    if (!dateString) return 'Fecha desconocida';

    // separa la fecha de la hora (si existe) y toma solo la parte de la fecha
    const onlyDate = dateString.split('T')[0];

    const [year, month, day] = onlyDate.split('-');

    // si falta alguna parte de la fecha, devuelve el string original
    if (!year || !month || !day) return dateString;

    const formattedDate = `${day}/${month}/${year}`

    return formattedDate;
}