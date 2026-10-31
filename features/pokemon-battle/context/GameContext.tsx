'use client'

import { createContext } from "react";

import type { GameState } from "../gameReducer/gameTypes";


export const GameContext = createContext<GameState | null>(null);