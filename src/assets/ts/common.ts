// export type connectItems = (name: string, url: string) => void
// export type Constants = (menuItems: Array<connectItems>) => void
export type ConnectItems = {
    name: string,
    url: string,
    icon: string,
}

export type Constants = {
    menuItems: ConnectItems[]
}