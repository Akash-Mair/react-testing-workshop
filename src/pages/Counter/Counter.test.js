import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Counter from './Counter'

test('Counter renders', () => {
    render(<Counter initialCountValue={0} />)
})

test('displayed count value increments on button click', () => {
    const { getByText, getByTestId } = render(<Counter initialCountValue={0} />)

    const incrementButtonNode = getByText(/increment/i)
    const countValueNode = getByTestId(/count-value/i)

    fireEvent.click(incrementButtonNode)
    fireEvent.click(incrementButtonNode)
    fireEvent.click(incrementButtonNode)

    expect(countValueNode).toHaveTextContent('3')
})

test('displayed count value decrement on button click', () => {
    const { getByText, getByTestId } = render(<Counter initialCountValue={0} />)

    const decrementButtonNode = getByText(/decrement/i)
    const countValueNode = getByTestId(/count-value/i)

    fireEvent.click(decrementButtonNode)
    fireEvent.click(decrementButtonNode)
    
    expect(countValueNode).toHaveTextContent('-2')
})

test('displayed count value resets to passed in value', () => {
    const { getByText, getByTestId } = render(<Counter initialCountValue={0} />)

    const resetButtonNode = getByText(/reset/i)
    const decrementButtonNode = getByText(/decrement/i)
    const countValueNode = getByTestId(/count-value/i)

    fireEvent.click(decrementButtonNode)
    fireEvent.click(resetButtonNode)
    
    expect(countValueNode).toHaveTextContent('0')
})


test('passed in prop gets displayed', () => {
    const { getByTestId } = render(<Counter initialCountValue={330} />)

    const countValueNode = getByTestId(/count-value/i)

    expect(countValueNode).toHaveTextContent('330')
})
