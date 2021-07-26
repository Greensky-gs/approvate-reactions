const reactsArray = ['emoji 1', 'emoji 2'];

message.channel.send(`Press ${reactArray[0]} for yes and press ${reactsArray[1]} for no`).then((msg) => {
  const collector = msg.createReactionCollector((reaction, user) =>  reactsArray.includes(reaction.emoji.name) && user.id === message.author.id, {time: /* time in millisecond (don't forget to supp the comments) */});
  collector.on('collect', (reaction, user) => {
    collector.stop('raison optionnelle');

    if (reaction.emoji.name === reactsArray[0]) {
      //code for yes
    } else {
      //code for no
    };
  });
  collector.on('end', (collected, reason) => {
    if (!collected.size) //code if no reacting
  });
});
