import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import UserForm from './Form'


test('UserForm renders', () => {
    render(<UserForm />)
})

test('when a user types in the first name input that value is reflected in the input', () => {
    const event = {
        target: {
            name: 'firstName',
            value: 'Kash'
        }
    }

    const { getByLabelText } = render(<UserForm/>)
    const firstNameInputNode = getByLabelText(/first name/i)
    fireEvent.change(firstNameInputNode, event)

    expect(firstNameInputNode.value).toBe('Kash')
})

test('when a user types in the first name input that value is reflected in the input', () => {
    const { getByLabelText } = render(<UserForm/>)

    const firstNameInputNode = getByLabelText(/first name/i)
    userEvent.type(firstNameInputNode, 'Joe')

    expect(firstNameInputNode.value).toBe('Joe')
})