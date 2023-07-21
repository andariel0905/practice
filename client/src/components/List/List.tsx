import React from 'react'
import { Container } from 'react-bootstrap'
import { useAppSelector } from '../../redux/store'

function List () {
    const users = useAppSelector(state => state.user.users)

    return <Container>
        <p>This is List component</p>
        <table>
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.email}>
                        <td>{user.email}</td>
                        <td>{user.name}</td>
                        <td>{user.password}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Container>
}

export default List