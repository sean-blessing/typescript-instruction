export class Ball {
    id: number;
    color: string;
    size: string;
    
    constructor(inId: number, inColor: string, inSize: string) {
        this.id = inId;
        this.color = inColor;
        this.size = inSize;
    }
    
    about(): string {
        return `Ball:  id=${this.id}, color=${this.color}, size=${this.size}`;
    }
}