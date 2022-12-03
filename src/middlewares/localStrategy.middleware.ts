import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy } from "passport-local";
import serverError from "../errors/strategy.error";
import { prisma } from "../services/connectToDatabase.service";

const LocalStrategy = () => {
     passport.use(
          new Strategy(
               {
                    usernameField: "login",
                    passwordField: "password",
               },
               async (login, password, done) => {
                    try {
                         const user = await prisma.admin.findFirst({
                              where: {
                                   login: login,
                              },
                         });

                         if (!user) {
                              return done(null, false, { message: "Login or password is incorrect" });
                         }

                         const isMatch = await bcrypt.compare(password, user.password);

                         if (isMatch) {
                              return done(null, user);
                         }
                         return done(null, false, { message: "Login or password is incorrect" });
                    } catch (e) {
                         serverError(e, done);
                    }
               }
          )
     );

     passport.serializeUser((user, done) => {
          done(null, user.idadmin);
     });
     passport.deserializeUser((idadmin: number, done) => {
          prisma.admin
               .findUnique({
                    where: {
                         idadmin: idadmin,
                    },
               })
               .then((user) => {
                    done(null, user);
               })
               .catch((e) => serverError(e, done));
     });
};
export default LocalStrategy;
