function longestDynasty(dynastyReign) {
    if (dynastyReign.length === 0) {
      return "No Data";
    }
  
    let longestDuration = 0;
    let longestDynasty = '';
  
    for (const { dynasty, endOfReign } of dynastyReign) {
      const startOfReign = convertYear(endOfReign) + 1;
      const duration = startOfReign - 1000;
  
      if (duration > longestDuration) {
        longestDuration = duration;
        longestDynasty = dynasty;
      }
    }
  
    return longestDynasty;
  }
  
  function convertYear(romanYear) {
    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
    let result = 0;
    let remaining = romanYear;
  
    for (const numeral in romanNumerals) {
      while (remaining.indexOf(numeral) === 0) {
        result += romanNumerals[numeral];
        remaining = remaining.replace(numeral, '');
      }
    }
  
    if (remaining.length > 0) {
      return "Invalid";
    }
  
    return result;
  }
  
  // Example usage:
  const dynastyReign = [
    { dynasty: "Dynasty A", endOfReign: "MCMLXVIII" },
    { dynasty: "Dynasty B", endOfReign: "MCMLXXIX" },
    { dynasty: "Dynasty C", endOfReign: "MCMXCIX" },
    { dynasty: "Dynasty D", endOfReign: "MMXVII" },
  ];
  
  console.log(longestDynasty(dynastyReign)); // Output: Dynasty B
  