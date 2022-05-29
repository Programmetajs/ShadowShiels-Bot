const { MessageEmbed } = require("discord.js")
const  Random = require("srod-v2");

module.exports = {
    name: 'dog',
    description: 'Return A Random Dog!',
    run: async (client, interaction) => {
      let pembed = new MessageEmbed()
		  .setColor('RANDOM')	
			.setTitle('Rendom cute dogs :)')
			.setDescription (Random.GetAnimalImage({ Animal: "dog", Color: "RANDOM" }))
			.setTimestamp()
			.setFooter(`${interaction.user.username}`, interaction.user.avatarURL());
        interaction.reply({
          embeds: [pembed]
        });
    },
};