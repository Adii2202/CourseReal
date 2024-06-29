const SMTPServer = require("smtp-server").SMTPServer;
const server = new SMTPServer({
  allowInsecureAuth: true,
  authOptional: true,
  onConnect(session, cb) {
    console.log(`Connect `, session.id);
    cb();
  },
  onMailFrom(address, session, cb) {
    console.log(`Mail from`, address.address, session.id);
    cb();
  },
  onRcptTo(address, session, sb) {
    console.log(`Mail to`, address.address, session.id);
    cb();
  },
  onData(stream, session, cb) {
    stream.on("data", (data) => console.log(`Data`, data.toString()));
    stream.on("end", cb);
  },
});

server.listen(25, () => console.log("Server started on port 25"));