import React from 'react'
import AddStudentsRow from "./AddStudentsRow"
export default function Home() {
    return (
        <div>
            <AddStudentsRow></AddStudentsRow>
            <div className="table mx-5  mt-4">
            <table className="table table-striped table-hover ">
                <thead>
                    <tr className='table-info'>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Grade</th>
                        <th scope="col">Date of Admission</th>
                        <th scope='col'>Current Month Payment</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
    
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
            </div>

        </div>
    )
}
