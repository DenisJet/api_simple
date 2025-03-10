import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  async createContact(contactData: CreateContactDto) {
    console.log('Полученные данные:', contactData);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      message: 'Данные успешно получены и обработаны',
      data: contactData,
    };
  }
}
