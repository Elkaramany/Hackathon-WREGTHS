export interface SNAKE {
    left: number
    top: number
}

export interface SCREENLIMIT {
    width: number
    height: number
}

export const canMoveInDirection = (direction: string, currentDirection: string) => {
    if ((currentDirection === 'right' || currentDirection === 'left') && (direction === 'up' || direction === 'down')) return true
    else if ((currentDirection === 'up' || currentDirection === 'down') && (direction === 'left' || direction === 'right')) return true

    return false
}

export const moveSnake = (direction: string, snake: SNAKE[], pixel: number, limit: SCREENLIMIT) => {

    let refSnake = [...snake]
    let newSnake = []
    let head = refSnake[refSnake.length - 1]

    for (let i = 1; i < refSnake.length; i++) {
        newSnake.push(refSnake[i])
    }

    if (direction === 'right') head = { ...head, left: head.left + pixel }
    else if (direction === 'left') head = { ...head, left: head.left - pixel }
    else if (direction === 'up') head = { ...head, top: head.top - pixel }
    else if (direction === 'down') head = { ...head, top: head.top + pixel }

    newSnake.push(head)
    if (isOutOfBounds(snake, head, limit, pixel)) return null
    else {
        let firstPixel = newSnake[0]
        if (direction === 'right') firstPixel = { ...firstPixel, left: firstPixel.left - pixel }
        else if (direction === 'left') firstPixel = { ...firstPixel, left: firstPixel.left + pixel }
        else if (direction === 'up') firstPixel = { ...firstPixel, top: firstPixel.top + pixel }
        else if (direction === 'down') firstPixel = { ...firstPixel, top: firstPixel.top - pixel }

        return [firstPixel, ...newSnake]
    }
}

export const eatFood = (direction: string, snake: SNAKE[], pixel: number) => {

}


const isOutOfBounds = (oldSnake: SNAKE[], head: SNAKE, limit: SCREENLIMIT, pixel: number) => {

    if (head.top >= limit.height || head.top < 0) return true
    if (head.left + pixel >= limit.width || head.left < 0) return true

    let val, i = 0;
    //check if 2 parts in the snake has the same coords which would indicate a collision with the body
    for (; i < oldSnake.length; i++) {
        val = oldSnake[i]
        //crash
        if (Math.round(val.top) === Math.round(head.top) && Math.round(val.left) === Math.round(head.left)) return true
    }
    return false
}