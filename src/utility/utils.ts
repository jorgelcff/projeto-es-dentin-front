function bloquearColar(event: Event): void {
  event.preventDefault();
}

function RemoverNumero(event: Event): void {
  if (
    Number((event as KeyboardEvent).charCode) != 39 ||
    Number((event as KeyboardEvent).charCode) != 94 ||
    Number((event as KeyboardEvent).charCode) != 96 ||
    Number((event as KeyboardEvent).charCode) != 126
  ) {
    if (
      Number((event as KeyboardEvent).charCode) >= 33 &&
      Number((event as KeyboardEvent).charCode) <= 64
    ) {
      event.preventDefault();
    }
  }
}

function RemoverLetra(event: Event, max: number): void {
  if (
    (event.target as HTMLInputElement).value ||
    (event.target as HTMLInputElement).value != '' ||
    (event.target as HTMLInputElement).value != undefined
  ) {
    if (Number((event.target as HTMLInputElement).value) >= max) {
      event.preventDefault();
    }
  }

  if (
    Number((event as KeyboardEvent).charCode) < 48 &&
    Number((event as KeyboardEvent).charCode) != 44 ||
    Number((event as KeyboardEvent).charCode) > 57 &&
    Number((event as KeyboardEvent).charCode) != 44
  ) {
    event.preventDefault();
  }
}

function ValidarCpf(value: string): boolean {
    let cpf = value;
  // if (control.value === "marcelo") {
  //   return null;
  // } else {
  //   return { cpf: true };
  // }

  let cpfStudent = cpf.split('');
  let cpfStudentWithVerifidDigit: any = [];
  let weight = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let weight2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sum: number = 0;
  let verifiedDigit: any = [];


  if (
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999'
  ) {
    return false;
  } else {
    for (let index = 0; index < weight.length; index++) {
      sum += Number.parseInt(cpfStudent[index]) * weight[index];
      cpfStudentWithVerifidDigit.push(Number.parseInt(cpfStudent[index]));
    }

    verifiedDigit.push(sum % 11 == 10 ? 0 : sum % 11);

    sum = 0;

    cpfStudentWithVerifidDigit.push(verifiedDigit[0]);

    for (let index = 0; index < weight2.length; index++) {
      sum += cpfStudentWithVerifidDigit[index] * weight2[index];
    }

    verifiedDigit.push(sum % 11 == 10 ? 0 : sum % 11);

    if (Number.parseInt(cpfStudent[9]) === verifiedDigit[0] && Number.parseInt(cpfStudent[10]) === verifiedDigit[1]) {
      return true;
    } else {
      return false;
    }
  }
}