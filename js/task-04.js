// ------------------task-04

const formatString = (string, maxLength = 40) => console.log(string.length > maxLength ? `${(string.slice(0, maxLength))}...` : string)


formatString('Curabitur ligula sapien, tincidunt non.');

formatString('Vestibulum facilisis, purus nec pulvinar iaculis.');

formatString('Curabitur ligula sapien.');

formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.')