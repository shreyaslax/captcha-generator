function generateCaptcha() {
  let alpha = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '+',
  ];

  let a = alpha[Math.floor(Math.random() * 72)];
  let b = alpha[Math.floor(Math.random() * 72)];
  let c = alpha[Math.floor(Math.random() * 72)];
  let d = alpha[Math.floor(Math.random() * 72)];
  let e = alpha[Math.floor(Math.random() * 72)];
  let f = alpha[Math.floor(Math.random() * 72)];

  let final = a + b + c + d + e + f;
  document.getElementById('capt').value = final;
}

function validCaptcha() {
  let string1 = document.getElementById('capt').value;
  let string2 = document.getElementById('text-input').value;

  if (string1 == string2) {
    alert('Form is validated Successfully');
    return true;
  } else {
    alert('Please enter a valid captcha');
    return false;
  }
}
