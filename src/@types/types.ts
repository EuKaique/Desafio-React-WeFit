import React from "react"

export interface CardProps{
    image: string
    title: string
    price: number
    id: number
}

export interface ButtonProps{
    content: boolean
    icon?: React.ReactNode
    item?: number
    text: string
    color: "blue" | "green"
    onClick?: () => void
}