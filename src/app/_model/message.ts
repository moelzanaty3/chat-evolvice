export interface IMessage {
  id?: number;
  messageText: string;
  createdDate: string;
  modifiedDate: string;
  createdByUserId: number;
  createdByUserName: string;
  type: string;
  img: string;
}
