

export type Optional<K extends string, T> = T extends undefined ? {} : { [keyof in K]: T }