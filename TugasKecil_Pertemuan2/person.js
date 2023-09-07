// 1. set default value = fullName = "unknown", age = 25, isMale = false,
const Person = (fullName = "unknown", age = 25, isMale = false, avatar) => {
  // ternary operator, menggantikan if-else
  const info = () => {
    // 2. tampilkan full name, sex dan age
    return `Full Name: ${fullName}. Sex: ${
      isMale ? "His" : "Her"
    } Age: ${age} years.`;
  };
  return {
    get getInfo() {
      // 3. kembalikan nilai info diatas
      return info();
    },
    toString() {
      // 4. kembalikan nilai info diatas
      return info();
    },
    // 5. kembalikan usia sekarang ditambah dengan tahun inputan user,
    addAge: (years) => {
      age += years;
      return age;
    },
    // 6. fungsi yang mengeset usia yang baru,
    setAge: (newAge) => {
      age = newAge;
      return age;
    },
    // 7. fungsi yang mengeset nama yang baru,
    rename: (newName) => {
      fullName = newName;
    },
    // 8. kembalikan semua nilai dengan shorthand property
  };
};
// 9. export objek person sebagai sebuah modul
export default Person;
