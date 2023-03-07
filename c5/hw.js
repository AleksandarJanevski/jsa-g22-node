const { getAllStudents, addStudent, deleteStudent, editStudent } =
  require("./students")(async () => {
    try {
      await addStudent({
        ime: "Pero",
      });
    } catch (err) {
      console.log("Error", err);
    } finally {
      console.log("End of Code!");
    }
  })();
