export function Scores() {
    const headers = [
        'Player Name',
        'Frame 1',
        'Frame 2',
        'Frame 3',
        'Frame 4',
        'Frame 5',
        'Frame 6',
        'Frame 7',
        'Frame 8',
        'Frame 9',
        'Frame 10',
        'Total'
    ];

    return (
        <>
            <h1 className="text-2xl font-bold mb-5 bg-cyan-500 rounded-t-lg">
                Scores
            </h1>
            <table className="min-w-full">
                <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th className="outline outline-pink-600 p-2" key={index}>
                            {header}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                <tr>

                    {/*<td className="outline outline-pink-600">Row 1, Column 1</td>*/}
                    {/*<td className="outline outline-pink-600">Row 1, Column 2</td>*/}
                    {/*<td className="outline outline-pink-600">Row 1, Column 3</td>*/}
                    {/*<td className="outline outline-pink-600">Row 1, Column 4</td>*/}
                </tr>
                </tbody>
            </table>

        </>
    )
}