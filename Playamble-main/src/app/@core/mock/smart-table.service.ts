import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';

@Injectable()
export class SmartTableService extends SmartTableData {
  data = [
    {
      name: 'case-63503-Marwan',
      description: 'I cannot connect to my wifi',
      dateCreated: '04/06/2020',
    },
    {
      name: 'case-85456-Ismail',
      description: 'VPN access needed	',
      dateCreated: '04/06/2020',
    },
    {
      name: 'case-55524-Sara',
      description: 'I am having a 500 server down error',
      dateCreated: '05/06/2020',
    },
  ];

  live = [
    {
      name: 'Khaled Dassouki',
      channel: 'Teams Bot',
      startTime: 'Less than one minute ago',
    },
    {
      name: 'Ahmad Naji',
      channel: 'Whatsapp Bot',
      startTime: 'Four minutes ago',
    },
    {
      name: 'Sarah Attal',
      channel: 'Web Bot',
      startTime: 'One hour ago',
    },
    {
      name: 'Marwan Hilal',
      channel: 'Email Bot',
      startTime: 'Thirty minutes ago',
    },
  ];

  knowledge = [
    {
      name: 'Printer Access',
      url: 'https://www.printerpresence.com',
      description: 'Establishing access to a printer',
    },
    {
      name: 'Download Software',
      url: 'https://www.download.com',
      description: 'Problems downloading program',
    },
    {
      name: 'Install Printer',
      url: 'https://www.printerpresence.com',
      description: 'Trouble installing printer',
    },
    {
      name: 'Windows Update',
      url: 'https://update.microsoft.com',
      description: 'Establishing access to a printer',
    },
    {
      name: 'Antivirus',
      url: 'https://www.avast.com/index#pc',
      description: 'Need to install a free antivirus to protect my pc',
    },
    {
      name: 'Forgot Password',
      url: 'https://myspace.com/forgotpassword',
      description: 'I forgot my user credentials',
    },
    {
      name: 'Access Request',
      url: 'https://accessrequest.taboola.com/access/',
      description: 'I request access on this website',
    },
    {
      name: 'Slow Connection',
      url: 'https://www.nytimes.com/2020/05/20/technology/personaltech/slow-internet-speeds.html',
      description: 'I am having very slow connection but I am subscribed to premium plan',
    },
    {
      name: 'Install Outlook',
      url: 'https://support.microsoft.com/en-us/office',
      description: 'I want to install outlook on my PC to send and recieve emails',
    },
    {
      name: 'Mail Troubleshoot',
      url: 'https://support.apple.com/en-lb/guide/mail/mail35552/mac',
      description: 'I am having an issue with sending an email on my Macbook Pro',
    },
  ];

  chatbotMessages = [
    {
      message: 'Printer successfully connected',
      date: '7 July, 2020 12:50:42 am',
    },
    {
      message: 'Wifi successfully provided',
      date: '21 July, 2020 06:31:27 pm',
    },
    {
      message: 'VPN successfully established',
      date: '17 July, 2020 3:16:57 pm',
    },
    {
      message: 'Account successfully created',
      date: '13 July, 2020 9:20:14 am',
    },
  ];

  getChatbotMessages(start: Date, end: Date) {
    return this.chatbotMessages;
  }

  // getCards(){
  //   return this.cards;
  // }

  // setCards(data){
  //   this.cards.push(data);
  // }


  getData() {
    return this.data;
  }

  setData(rec) {
    this.data = [...this.data, ...rec];
  }
  pushData(temp) {
    this.data.push(temp);
  }
  getLive() {
    return this.live;
  }

  getKnowledge() {
    return this.knowledge;
  }
}
