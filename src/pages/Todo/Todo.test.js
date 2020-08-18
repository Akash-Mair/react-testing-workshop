import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { setupServer } from 'msw/node'

import Todo from './Todo'
import { handlers } from '../../__mocks__/Todo/server-handler'

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.restoreHandlers())

test('Todo renders', () => {
    render(<Todo />)
})

test('on clicking fetch Todo a todo is shown', async () => {
    const { findByTestId, getByText } = render(<Todo />)

    const fetchButtonNode = getByText(/fetch todo/i)
    fireEvent.click(fetchButtonNode)
    const todoNode = await findByTestId(/todo/i)
     
    expect(todoNode).toBeInTheDocument()
})