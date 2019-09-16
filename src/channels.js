export async function createChannel(fin) {
    const channel = await fin.InterApplicationBus.Channel.create(
        "demo-channel"
    );
    console.log("Channel created");
    channel.setDefaultAction((action, payload, identity) => {
        console.log(`Someone sent a message`, { action, payload, identity });
        channel.send(identity, action, payload);
    });
    channel.onConnection(identity =>
        console.log(`Someone connected`, identity)
    );
}

export async function joinChannel(fin) {
    console.log("Connecting..");
    const client = await fin.InterApplicationBus.Channel.connect(
        "demo-channel",
        { wait: true }
    );

    console.log("Connected to a channel");
    client.setDefaultAction((action, payload) => {
        console.log("Received a message", { action, payload });
    });

    client.dispatch("my-action", "my-payload");
}
