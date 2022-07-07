function printf(stringput) {
	console.log(stringput)
}

printf("hellooooo, this was printed via a custom print function");

let fruits = ["apple", "peach", "pear", "mango", "banana", "kiwi", "lychee", "plum", "nectarine"];

let count = 0;
for (let fruit in fruits) {
	count++;
	printf(`Fruit no. ${count}: ${fruits}`);
}
