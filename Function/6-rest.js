'use strict';

const f1 = (...args) => { // при таком объявлении аргумента
  // и жо конца все аргументы упакуются в массив  
  console.log(args);
};


const f2 = (...args) => { // захватывает все аргументы не зависимо от типа 
  // она проходится с помощью forEach 
  args.forEach(arg => {
    const type = typeof arg;
    console.log('Type: ' + type);
    if (type === 'object') {
      console. log('Value: ' + JSON.stringify(arg));
    } else {
      console.log('Value: ' + arg);
    }
  });
};

f2(1, 'Marcus', { field: 'value' });