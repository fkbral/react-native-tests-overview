import React from 'react'
import { render } from '@testing-library/react-native'
import App from './App'

describe('Home Page', () => {
  test('Espero que a minha home tenha um texto "Entre no sistema"', () => {
    const { getByText } = render(<App />)

    expect(getByText('Entre no sistema'))
  })

  test('Espero que a minha home tenha um botão com texto "Entrar"', () => {
    const { getByText } = render(<App />)

    expect(getByText('Entrar'))
  })

  test('Espero que não exista botão de logout na página de login', () => {
    const { queryByText } = render(<App />)

    expect(queryByText('logout')).toBeFalsy()
  })
})

describe('Form de login', () => {
  test('Espero que o formulário tenha um input com placeholder "Seu usuário"', () => {
    const { getByPlaceholderText } = render(<App />)
  
    expect(getByPlaceholderText('Seu usuário'))
  })

})