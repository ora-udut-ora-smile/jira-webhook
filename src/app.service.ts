import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async jiraService(request: any) {
    const split = request.webhookEvent.split(':');
    const dataJson = {
      content: `<@&978493797321297950> ${
        request.user.displayName
      } telah melakukan ${split[split.length - 1]} di ${request.issue.key}`,
      embeds: [
        {
          title: request.issue.fields.summary,
          description: request.issue.fields.description,
          url: request.issue.fields.issueUrl,
          image: {
            url: 'https://i0.wp.com/nationalcybersecuritynews.today/wp-content/uploads/2022/06/jira.jpg?fit=728%2C380&ssl=1',
          },
        },
      ],
      message_reference: {
        message_id: '233648473390448641',
      },
    };
    await axios.post(
      'https://discord.com/api/webhooks/984333028543324200/-HawmksgaLEdNAmVuvz-IEwrC9Y7RY2Gqx45XivGmJV40MX9zyOEtShulPXEAP6Q0B5N',
      dataJson,
      {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json',
        },
      },
    );
  }
}
