import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';

@Injectable()
export class NotesService {


async create(title: string, content: string) {
  // נבנה שורה שכוללת גם את הכותרת וגם את התוכן
  const entry = `${new Date().toLocaleString()}  ${title}  ${content}\n`;
  
  await fs.appendFile("./notes.txt", entry);
  return "הפתק עם הכותרת נשמר בהצלחה!";
}

  async findAll() {
    try {
      // קריאת הקובץ
      const data = await fs.readFile("./notes.txt", 'utf8');
      return data;
    } catch (error) {
      return "No notes posted yet!";
    }
  }
}
