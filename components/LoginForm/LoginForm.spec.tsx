import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { LoginForm } from '.'

describe('Form de login', () => {
  test('Espero que o formulário tenha um input com placeholder "Seu usuário"', () => {
    const { getByPlaceholderText } = render(<LoginForm />)
  
    expect(getByPlaceholderText('Seu usuário'))
  })

  test('Espero que existam inputs para nome de usuário e senha', () => {
    const { getByTestId } = render(<LoginForm />)

    const usernameInput = getByTestId('user-input')
    const usernamePassword = getByTestId('password-input')

    expect(usernameInput).toBeTruthy()
    expect(usernamePassword).toBeTruthy()
  })

  test('Espero poder preencher input de nome de usuário', () => {
    const { getByTestId } = render(<LoginForm />)

    const usernameInput = getByTestId('user-input')

    fireEvent.changeText(usernameInput, 'fulano')

    expect(usernameInput).toHaveProp('value', 'fulano')
  })

  test('Espero que apareça mensagem de boas-vindas ao realizar login', () => {
    const { getByTestId, getByText } = render(<LoginForm />)

    const usernameInput = getByTestId('user-input')
    const submitButton = getByTestId('login-button')

    fireEvent.changeText(usernameInput, 'fulano')
    fireEvent.press(submitButton)

    expect(getByText('Olá fulano'))
  })
})