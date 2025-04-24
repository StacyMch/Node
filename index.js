const yargs = require("yargs");
const pkg = require("./package.json");
const { addNote, printNotes, removeNote } = require("./notes-controller");

yargs.version(pkg.version);

yargs.command({
  command: "add",
  describe: "Add a new note to the list",
  builder: {
    title: {
      type: "string",
      description: "Note title",
      demandOption: true,
    },
  },
  handler({ title }) {
    addNote(title);
  },
});

yargs.command({
  command: "list",
  describe: "Print all notes",
  async handler() {
    printNotes();
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note by id",
  async handler({ id }) {
    removeNote(id);
  },
});

yargs.parse();
