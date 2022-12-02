import { MIN_JOGADORES_POR_TIME } from "./constants"
import { Jogador } from "./interfaces/Jogador"
import { Time } from "./interfaces/Time"

test('A soma de 1 com 1 deve ser 2', function() {
  const soma = 1 + 1
  expect(soma).toEqual(2)
})

test('Um jogador deve ter um número de camisa', () => {
  const numeroDaCamisaEsperado = 6

  const jogador: Jogador = {
    nome: 'Fulano Ciclano',
    alturaEmMetros: 1.8,
    numeroDaCamisa: numeroDaCamisaEsperado,
  }

  expect(jogador).toEqual(
    expect.objectContaining({
      numeroDaCamisa: numeroDaCamisaEsperado,
    })
  )
})

test('Um time de vôlei deve ter um mínimo de 5 jogadores', () => {
  const time: Time = {
    esporte: 'vôlei',
    jogadores: [
      {
        nome: 'Fulano Ciclano',
        alturaEmMetros: 1.8,
        numeroDaCamisa: 1,
      },
      {
        nome: 'Fulano Ciclano',
        alturaEmMetros: 1.8,
        numeroDaCamisa: 2,
      },
      {
        nome: 'Fulano Ciclano',
        alturaEmMetros: 1.8,
        numeroDaCamisa: 3,
      },
      {
        nome: 'Fulano Ciclano',
        alturaEmMetros: 1.8,
        numeroDaCamisa: 6,
      },
      {
        nome: 'Fulano Ciclano',
        alturaEmMetros: 1.8,
        numeroDaCamisa: 9,
      }
    ]
  }

  expect(time.jogadores.length).toBeGreaterThanOrEqual(MIN_JOGADORES_POR_TIME["vôlei"])
})

test('Um time não pode ter jogadores com mesmo número de camisa', () => {
  const numeroDaCamisaEsperado = 6

  const time: Time = {
    esporte: 'vôlei',
    jogadores: [
      {
        nome: 'Fulano Ciclano',
        alturaEmMetros: 1.8,
        numeroDaCamisa: 2,
      },
      {
        nome: 'Fulano Ciclano',
        alturaEmMetros: 1.8,
        numeroDaCamisa: 5,
      }]
    }

  expect(time.jogadores[0].numeroDaCamisa).not.toEqual(
    time.jogadores[1].numeroDaCamisa
  )
})

// test('Um time deve ter um mínimo de jogadores adequado para o esporte praticado', () => {
  
// })