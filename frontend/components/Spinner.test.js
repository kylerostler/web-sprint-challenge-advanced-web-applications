// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Spinner from './Spinner'

test('sanity', () => {
  expect(true).toBe(true)
})

test('check that spinner renders with props', async () => {
  const spinnerTrue = true
  render(<Spinner on={spinnerTrue}/>)
  const spinnerText = screen.getByText(/please wait.../i)
  await waitFor(() => {
    expect(spinnerText).toBeInTheDocument()
  })
})

test('check that spinner renders with props', async () => {
  const spinnerFalse = false
  render(<Spinner on={spinnerFalse}/>)
  const spinnerText = screen.queryByText(/please wait.../i)
  await waitFor(() => {
    expect(spinnerText).toBeNull()
  })
})