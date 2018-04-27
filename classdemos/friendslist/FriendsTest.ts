class Friend {
    Name: string;
    Age: number;
    Email: string;
    BestFriend; boolean;
    
    constructor(inName: string, inAge: number, inEmail: string, inBF: boolean) {
        this.Name = inName;
        this.Age = inAge;
        this.Email = inEmail;
        this.BestFriend = inBF;
    }
    
    // return a string representing this Friend
    about(): string {
		let bfString: string = this.BestFriend?"Yes":"No";
        let rString: string = this.Name+"\t"+this.Age+"\t"+this.Email+"\t"+bfString;
        return rString;
    }
}

let f1: Friend = new Friend("Chris",51,"cbad@test.com",true);
let f2: Friend = new Friend("Bobby", 37,"bobby@test.com",false);
let f3: Friend = new Friend("Sally", 40,"sally@test.com",true);

let fArray: Friend[] = [f1,f2,f3];

console.log("Name\tAge\tEmail\t\tBest");
for (let f of fArray) {
    console.log(f.about());
}