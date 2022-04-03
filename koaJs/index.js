const Koa = require("koa");
const Router = require("koa-router");
const port = 3000;

const app = new Koa();
const router = new Router();

router.get("/", (ctx)=>{
    ctx.body = "<h1>Deneme Sayfasına Hoşgeldiniz</h1>"
    ctx.status = 200;
})

router.get("/hakkimda", (ctx)=>{
    ctx.body = "<h1>hakkimda Sayfasına Hoşgeldiniz</h1>"
    ctx.status = 200;
})

router.get("/iletisim", (ctx)=>{
    ctx.body = "<h1>iletisim Sayfasına Hoşgeldiniz</h1>"
    ctx.status = 200;
})
    
    
app.use(router.routes());

app.listen(port , ()=>{
    console.log(`Server started on ${port}`)
})