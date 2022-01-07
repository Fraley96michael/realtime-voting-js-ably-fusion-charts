const realtime = new Ably.Realtime({
  key: "E863jQ.2I2IIg:7ikefz3Fu4wSq28OudiNvoXm3koNPFi38tYli93HQXE",
});
const myVotingChannel = realtime.channels.get("voting-channel");

function castVote(choice) {
  myVotingChannel.publish("vote", choice, (err) => {
    console.log(choice);
    console.log(err);
  });
}
