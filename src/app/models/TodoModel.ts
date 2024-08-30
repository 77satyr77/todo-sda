export type TodoStatus = 'OPEN' | 'PROGRES' | 'TESTING' | 'DONE';
export interface TodoModel{
    id?: number;
    text: string;
    deadline: string;
    status: TodoStatus;
}