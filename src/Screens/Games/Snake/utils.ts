export interface SNAKE {
    left: number
    top: number
}

export const moveSnake = (direction: string, snake: SNAKE[], pixel: number) => {
    let refSnake = [...snake]
    let newSnake = []
    let head = refSnake[refSnake.length - 1]

    for (let i = 1; i < refSnake.length; i++) {
        newSnake.push(refSnake[i])
    }

    if (direction === 'right') head.left += pixel
    else if (direction === 'left') head.left -= pixel
    else if (direction === 'up') head.top -= pixel
    else if (direction === 'down') head.top += pixel

    newSnake.push(head)
    return newSnake
}

export const canMoveInDirection = (direction: string, currentDirection: string) => {
    if ((currentDirection === 'right' || currentDirection === 'left') && (direction === 'up' || direction === 'down')) return true
    else if ((currentDirection === 'up' || currentDirection === 'down') && (direction === 'left' || direction === 'right')) return true

    return false
}


export const TryMove = (direction: string, snake: SNAKE[], pixel: number) => {
    let refSnake = [...snake], newSnake = [], head = refSnake[refSnake.length - 1]

    for (let i = 1; i < refSnake.length; i++) {
        newSnake.push(refSnake[i])
    }

    if (direction === 'right') head.left += pixel
    else if (direction === 'left') head.left -= pixel
    else if (direction === 'up') head.top -= pixel
    else if (direction === 'down') head.top += pixel

    newSnake.push(head)
    return newSnake
}
