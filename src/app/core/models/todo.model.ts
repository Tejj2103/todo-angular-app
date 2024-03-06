import { ITodoType } from "src/app/shared/components/todo-card/todo-card.component";

export interface IResponse<T>
{
    data: T;
    message: string;
}


export interface ITodo {
    id?: number,
    title: string,
    desc: string,
    status: ITodoType;
    createdAt?: string,
    updatedAt?: string
}