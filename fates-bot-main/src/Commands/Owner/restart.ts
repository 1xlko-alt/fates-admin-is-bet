import { Command } from "../../types";
import { Message } from "discord.js";
import { MessageEmbed } from "discord.js";

module.exports = {
    name: "restart",
    description: "restarts the bot",
    usage: "restart",
    permission: "OWNER",
    run(message: Message, args: string[]) {
        require("child_process").exec("pm2 restart index", (err: Error) => {
            if (err) message.channel.send(new MessageEmbed()
                .setTitle("Error")
                .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(err)
            );
        });
    }
} as Command