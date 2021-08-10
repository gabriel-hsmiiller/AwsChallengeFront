export interface ApiData<T> {
    message: string;
    data: Data<T>;
}

export interface Data<T> {
    total: number,
    content?: T;
}
