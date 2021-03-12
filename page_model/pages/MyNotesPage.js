import { Selector } from "testcafe";

class MyNotesPage {
  constructor() {
    this.pageTitle = Selector('');
    this.addNoteItemButton = Selector('');
    this.noteItem = Selector('');
    this.addNoteButton = Selector('');
  }
}

export default new MyNotesPage();
