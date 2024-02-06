const strings = [
    'abcdef',        
    'AbCdEf',        
    '1234567',       
    'aBc123',       
    'abcABC',       
    'notAa6',        
    'NoAAaA', 
  ];
  
  const regex = /^[^Aa]{6,}$/;
  
  for (const str of strings) {
    const match = regex.test(str);
    console.log(`Рядок: '${str}' - ${match ? 'Відповідає умовам' : 'Не відповідає'}`);
  }