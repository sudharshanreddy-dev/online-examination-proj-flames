export function ResultTable({data}) {
    return (
        <>
            <div className="flex justify-center mt-10">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                    <tr className="bg-gray-200">
                        <th className="py-2 px-4 border-b border-gray-300">Test Name</th>
                        <th className="py-2 px-4 border-b border-gray-300">Marks</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((test, index) => (
                        <tr key={index} className="text-center">
                            <td className="py-2 px-4 border-b border-gray-300">{test.testName}</td>
                            <td className="py-2 px-4 border-b border-gray-300">{test.marks}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}