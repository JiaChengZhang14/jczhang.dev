import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";


export default createMiddleware(routing);

//El middleWare pasa por todos lo archivos expcepto por lo que esta dentro de la carpeta api
export const config = {
    matcher: ["/((?!api|_next|.*\\..*).*)"],
}