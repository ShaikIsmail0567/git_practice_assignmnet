
// Prime Problem
function identifyPrime(num) {
  let c = 0;
  for (i = 1; i <= num; i++) {
    if (num % i == 0) {
      c++;
    }
  }
  if (c == 2) {
    console.log("Yes")
  }
  else
    console.log("No")
}

// Detect Palindrome
function detectPalindrome(num) {

  let N = num.length
  let msg = "Yes"
  for (i = 0; i < N / 2; i++) {
    if (num[i] != num[N - 1 - i]) {
      msg = "No";
    }
  } console.log(msg);
}