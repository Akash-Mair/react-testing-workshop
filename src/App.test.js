import React from 'react'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import App from './App'
import { UserContext } from './AuthProvider/UserContext'


const renderWithSetup = (ui,{route = "/", history = createMemoryHistory({initialEntries: [route]})} = {},  value={username:'kash'} ) => (
    render( 
        <UserContext.Provider value={value}>
            <Router history={history}>
                {ui}
            </Router>
        </UserContext.Provider>
    )
)

test('App renders', () => {
    renderWithSetup(<App/>)    
})

test('App navigates to Todo', () => {
    const { getByRole } = renderWithSetup(<App/>, {route:"/todo"})
    const todoHeadingNode = getByRole('heading')
    expect(todoHeadingNode).toHaveTextContent(/to do/i)

})


test('App navigates to Counter', () => {
    const history = createMemoryHistory({initialEntries: ["/"]})
    const { getByRole } = render(
        <UserContext.Provider value={{username: 'kash'}}>
            <Router history={history}>
                <App/>
            </Router>
        </UserContext.Provider>
        )
    
    const counterHeadingNode = getByRole('heading')
    expect(counterHeadingNode).toHaveTextContent(/counter/i)

})

test('App navigates to Form', () => {
    const history = createMemoryHistory({initialEntries: ["/userform"]})
    const { getByRole } = render(
        <UserContext.Provider value={{username: 'kash'}}>
            <Router history={history}>
                <App/>
            </Router>
        </UserContext.Provider>
        )
    
    const counterHeadingNode = getByRole('heading')
    expect(counterHeadingNode).toHaveTextContent(/form/i)
})

test('App displays username if present', () => {
    const { getByText } = renderWithSetup(<App/>)

    expect(getByText(/kash/i)).toBeInTheDocument()
})

test('App displays username if present', () => {
    const { getByText } = renderWithSetup(<App/>, {}, {username: 'bob'})
    expect(getByText(/bob/i)).toBeInTheDocument()
})