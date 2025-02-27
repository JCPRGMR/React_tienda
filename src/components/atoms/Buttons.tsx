import ButtonStyle from '@components/Buttons.module.css' // Estilos deL src
import React from "react"

interface ButtonProps{
    content: string
}

export const Buttons : React.FC<ButtonProps> = ({content}) => {
    return (
        <>
            <button className={ButtonStyle.btn}>{content}</button>
        </>
    )
}