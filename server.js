const express = require("express");
const app = express();

app.get("/", (req, res) => {
    return res.status(200).json({
        name: "Ok",
    });
});
app.listen(3000, () => {
    console.log(`Listen at PORT:3000`);
});
