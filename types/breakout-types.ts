export type Brick = {
    x: number;
    y: number;
    width: number;
    height: number;
    alive: boolean;
};
export type Ball = {
    x: number;
    y: number;
    radius: number;
    velocityX: number;
    velocityY: number;
};

export type Paddle = {
    x: number;
    y: number;
    width: number;
    height: number;
};
export type GameResult = "" | "won" | "lost";

export type GameStatus = "start" | "playing" | "finished";