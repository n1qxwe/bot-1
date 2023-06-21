const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `nikzittxe`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `nikzittxe#0 `,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[https://nikzittxe.space](https://nikzittxe.space)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 