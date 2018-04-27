var Friend = /** @class */ (function () {
    function Friend(inName, inAge, inEmail, inBF) {
        this.Name = inName;
        this.Age = inAge;
        this.Email = inEmail;
        this.BestFriend = inBF;
    }
    // return a string representing this Friend
    Friend.prototype.about = function () {
        var bfString = this.BestFriend ? "Yes" : "No";
        var rString = this.Name + "\t" + this.Age + "\t" + this.Email + "\t" + bfString;
        return rString;
    };
    return Friend;
}());
var f1 = new Friend("Chris", 51, "cbad@test.com", true);
var f2 = new Friend("Bobby", 37, "bobby@test.com", false);
var f3 = new Friend("Sally", 40, "sally@test.com", true);
var fArray = [f1, f2, f3];
console.log("Name\tAge\tEmail\t\tBest");
for (var _i = 0, fArray_1 = fArray; _i < fArray_1.length; _i++) {
    var f = fArray_1[_i];
    console.log(f.about());
}
