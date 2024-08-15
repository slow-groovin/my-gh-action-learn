import "dotenv/config";
import Koa from 'koa'
import http from 'http';



// const hostname = '127.0.0.1';
const hostname = process.env.HOSTNAME || '0.0.0.0';
const port = Number.parseInt(process.env.PORT || '3000');


const koaApp = new Koa()
koaApp.use(async(ctx,next)=>{
    ctx.body='koa handler'
})


const index = http.createServer(async (req, res) => {
    /**
     * koa mixed
     */
    if (req.url?.startsWith("/koa")) {
        return  koaApp.callback()(req, res)
    }
    res.writeHead(200)
    res.end(JSON.stringify({msg:"handle"}))

});


index.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

