import { server } from "./server";
import { connect } from "./database";
import { verify } from "jsonwebtoken";
import cookieParser from "cookie-parser";

connect();
server.start({port: 3000}, ({port}) => {
  console.log('Server on Port', port)
})

server.use(cookieParser());

server.use((res, _, next) => {
  const accessToken = res.cookies["access-token"];
  try {
    const data = verify(accessToken, ACCESS_TOKEN_SECRET);
    (res).userId = data.userId;
  } catch {}
  next();
});