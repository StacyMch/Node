const yargs = require("yargs");
const pkg = require("./package.json");
const {
  addNote,
  printNotes,
  removeNote,
  editNote,
} = require("./notes-controller");

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
  builder: {
    id: {
      type: "string",
      description: "Note unique id",
      demandOption: true,
    },
  },
  async handler({ id }) {
    removeNote(id);
  },
});

yargs.command({
  command: "edit",
  describe: "Edit a note by id",
  builder: {
    id: {
      type: "string",
      description: "Note unique id",
      demandOption: true,
    },
    title: {
      type: "string",
      description: "Note title",
      demandOption: true,
    },
  },
  async handler({ id, title }) {
    editNote(id, title);
  },
});

yargs.parse();
