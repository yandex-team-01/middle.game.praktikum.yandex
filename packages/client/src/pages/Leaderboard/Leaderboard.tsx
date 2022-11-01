import React from 'react'

import { Button } from '../../components/Button'
import styles from './Leaderboard.module.scss'

const LeadersMockData = [
  {
    name: 'Team 1',
    score: 12345,
    players: ['player 1', 'player 2'],
  },
  {
    name: 'Team 3',
    score: 1000,
    players: ['player 6', 'player 10'],
  },
  {
    name: 'Team 5',
    score: 933,
    players: ['player 33', 'player 24'],
  },
  {
    name: 'Team 6',
    score: 600,
    players: ['player 122', 'player 442'],
  },
]

export const Leaderboard = () => {
  return (
    <div>
      <div className={styles.button_wrapper}>
        <Button>Go back</Button>
        <Button>Play</Button>
      </div>
      <div className={styles.background_overlay}>
        <h1 className={styles.header}>Top teams</h1>
        {LeadersMockData.map((team, idx) => {
          return (
            <div className={styles.leader_line}>
              <span>{idx + 1}</span>
              <span>{team.name}</span>
              <span>{team.score}</span>
              <span>{team.players[0]}, </span>
              <span>{team.players[1]}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
