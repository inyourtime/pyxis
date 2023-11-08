import { EmbedBuilder, WebhookClient, WebhookClientOptions, version } from "discord.js";
import { FastifyRequest } from "fastify";

export default class DiscordWebhook {
  private _client: WebhookClient;
  private _version: string;
  private _embeds: Array<EmbedBuilder>;

  constructor(
    private _url: string,
    private _option?: WebhookClientOptions,
  ) {
    this._version = version;
    this._embeds = [];
    this._client = this.getClient();
  }

  private getClient(): WebhookClient {
    if (!!this._client) return this._client;
    return new WebhookClient({ url: this._url }, this._option);
  }

  private addEmbed(req?: FastifyRequest): void {
    const embed = new EmbedBuilder()
      .setColor(`Random`)
      .setTitle(`Environment`)
      .setThumbnail(`https://i.imgur.com/AfFp7pu.png`)
      .addFields({ name: `Endpoint`, value: `${req?.hostname}` })
      .setTimestamp();
    this._embeds.push(embed);
  }

  send(text: string, req?: FastifyRequest): void {
    const message = `**Server Error :boom:** -> ${text}\n**[${req?.method}]** \`${req?.url}\``;
    this.addEmbed(req);
    this.getClient().send({ content: message, embeds: this._embeds });
  }
}
