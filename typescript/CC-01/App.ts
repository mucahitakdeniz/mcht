const tc = document.getElementById("#tcInput")! as HTMLInputElement;
const btn = document.getElementById("btn")! as HTMLButtonElement;
const p = document.getElementById("sonuc");

const check = (x: string) => {
  let a: number =
    ((+x[1] + +x[3] + +x[7] + +x[9]) * 7 - +x[2] - +x[4] - +x[6] - +x[8]) % 10;
  if (!(a == +x[10])) {
    return alert("TC numarsı geçersizdir");
  }
};
