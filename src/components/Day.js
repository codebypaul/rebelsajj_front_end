export default function Day(props) {
    return (
        <>
        <h1 >{props.day}</h1>
        <table className="w-100 mb-5">
            <tr>
                <th>
                    6 Am
                </th>
                <th>
                    6 Pm
                </th>
            </tr>
            <tr>
                <td>
                    {props.sixAm}
                </td>
                <td>
                    {props.sixPm}
                </td>
            </tr>
        </table>
        </>
    )
}