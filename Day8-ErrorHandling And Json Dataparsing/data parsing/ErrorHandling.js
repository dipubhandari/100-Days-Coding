console.log("Error Handling");

async function showName(name) {
  try {
    const fetchData = await fetch("https://api.com/data");
    // console.log("some task");
  } catch (error) {
    // console.log(error);
  }
}
showName("Dippu Bhandari Vlogs");

async function showName2(name) {
  const fetchData = await fetch("https://api.com/data");
  console.log("some task");
}
showName2("Dippu Bhandari Vlogs");
