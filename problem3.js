
// Prime Palindrome

let num=121;
let temp=num;
let final=0;
let rem=0;
while(num>0){
    rem=num%10;
    num= parseInt(num/10);
	final = final*10+rem;
}
if(final==temp){
			console.log("Its palindrome");
}
else{
			console.log("Its not palindrome");
}

// Detect Prime
let Num=13;
  let count=0;
  for(let x=0;x<=Num;x++){
    if(Num%x==0){
      count++;
    }
  }
 if(count==2){
console.log("Prime")}
else{
console.log("not prime")}