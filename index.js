const power = (base,powerRaised) => {
  if (powerRaised != 0) 
      return (base * power(base, powerRaised - 1));
    else 
      return 1;
}
console.log(power(2,3));

