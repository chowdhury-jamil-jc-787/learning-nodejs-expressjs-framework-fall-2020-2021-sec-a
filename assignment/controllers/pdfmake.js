const express = require('express');
const router = express.Router();

const pdfMake = require('../pdfmake/pdfmake');
const vfsFonts = require('../pdfmake/vfs_fonts');

pdfMake.vfs = vfsFonts.pdfMake.vfs;

//Index Route
router.get('/', (req, res)=>{
    //res.send('Hello World');
    /*res.sendfile('index2.html');*/
    res.render('pdfmake/index2');
});

/*const pdfRoute = require('./controllers/pdfmake');
router.use('/pdfMake', pdfRoute);*/


router.post('/pdf', (req, res, next)=>{
    //res.send('PDF');

    const fname = req.body.fname;
    const lname = req.body.lname;

    var documentDefinition = {
        content: [
            `Hello ${fname} ${lname}` ,
            'Nice to meet you!'
        ]        
    };

    const pdfDoc = pdfMake.createPdf(documentDefinition);
    pdfDoc.getBase64((data)=>{
        res.writeHead(200, 
        {
            'Content-Type': 'application/pdf',
            'Content-Disposition':'attachment;filename="filename.pdf"'
        });

        const download = Buffer.from(data.toString('utf-8'), 'base64');
        res.end(download);
    });

});


module.exports = router;