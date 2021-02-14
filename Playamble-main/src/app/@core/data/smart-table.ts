
export abstract class SmartTableData {
  abstract getData(): any[];
  abstract getLive(): any[];
  abstract setData(rec): void;
  abstract pushData(temp): void;
  abstract getKnowledge(): any[];
  abstract getChatbotMessages(start: Date, end: Date): any[];
  // abstract getCards(): any[];
  // abstract setCards(rec): void;
}
