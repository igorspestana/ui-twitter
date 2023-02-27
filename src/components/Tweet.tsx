import React from 'react'

interface TweetProps {
    user: string
    children: string
    likes?: number
}

export default function Tweet(props: TweetProps) {

  return (
    <div>
      <strong>{props.user}</strong>
      <p>{props.children}`</p>
      <button>Like {props.likes ?? 0}</button>
    </div>
  )
}

