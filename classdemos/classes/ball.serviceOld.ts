import { Ball } from './Ball/Ball';
export class BallService {
    // The 'id' that will be auto-generated
    nextId: number = 1;
    balls: Ball[] = [];
    
    list(): Ball[] {
        return this.balls;
    }
    
    add(ball: Ball): void {
        ball.id = this.nextId++;
        this.balls.push(ball);
    }
}