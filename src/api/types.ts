
export class Task {
    title: string;
    id: number;
    static lastId = 0;
    
    constructor(title: string) {
        this.title = title;
        this.id = Task.getNextId();
    }

    private static getNextId() {
        return ++Task.lastId;
    }
}
