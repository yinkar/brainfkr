const b = new Brainfkr();
b.setOutputElement('.output');

document.querySelector('.interprete').addEventListener('click', () => {
  b.load(document.querySelector('#input').value);
  b.run();
  b.print();
});
