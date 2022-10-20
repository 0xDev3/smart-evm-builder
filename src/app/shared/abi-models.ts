export interface Input {
    internalType: string,
    name: string,
    type: string
    indexed?: boolean
}

export interface Function {
    anonymous?: boolean
    inputs: Input[]
    type: FunctionType
    name?: string
    stateMutability?: string
}

export interface Artifact {
    contractName: string,
    sourceName: string,
    _format: string,
    abi: Function[]
}

type FunctionType = "constructor" | "event" | "function"