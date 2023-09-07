// 1. import Person.js
import Person from "./person.js";
// 2. Definisikan ketiga object person tersebut dengan ketentuan seperti diatas
const charles = Person("Charles", 30, true);
const mary = Person("Mary", 23, false);
const jane = Person("Jane", 20, false);
// 3. Tambah usia Jane 15 tahun
jane.addAge(15);
// 4. Set usia Charles menjadi 80 tahun
charles.setAge(80);
// 5. Tampilkan Informasi charles dengan querySelector
const charlesImg = document.querySelector("#charles img");
const charlesInfo = document.querySelector("#charles .info");
// a. Set avatar charles pada selector image
charlesImg.src = "https://picsum.photos/seed/picsum/200";
// b. Tampilkan info dengan Template literals
charlesInfo.innerHTML = charles.getInfo;

// 6. Sama seperti Charles, tampilkan Informasi mary dan Jane dengan querySelector
// Informasi mengenai mary
const maryImg = document.querySelector("#mary img");
const maryInfo = document.querySelector("#mary .info");
maryImg.src = "https://picsum.photos/200?grayscale";
maryInfo.innerHTML = mary.getInfo;

// Informasi mengenai jane
const janeImg = document.querySelector("#jane img");
const janeInfo = document.querySelector("#jane .info");
janeImg.src = "https://picsum.photos/200";
janeInfo.innerHTML = jane.getInfo;

const charlesJob = { job: "Programmer" };
// 7. Gabungkan objek charles dengan spread operator
const charlesJobInfo = { ...charles, ...charlesJob };
// 8. Definisikan fullName dan job milik Charles dengan object destructuring
const { fullName, job } = charlesJobInfo;
// a. Tampilkan job info milik charles dengan query selector
const charlesJobInfoSelector = document.querySelector("#charles .jobInfo");
// b. Tampilkan info dengan Template literals
charlesJobInfoSelector.innerHTML = `${fullName} is a ${job}`;