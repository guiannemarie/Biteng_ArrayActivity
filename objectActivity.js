const car = {
  type: "Honda",
  model: "Civic",
  color: "Silver"
};

console.log("Type of car:", typeof car);

car.type = "Toyota";
console.log("Updated car object:", car);

car.wheels = 4;
console.log("Car object after adding wheels:", car);
