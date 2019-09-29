import message from "../controllers/message";

export default ({ app }) => app.route("/hello").get(message.print);
