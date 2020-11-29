import express from 'express';

const router = express.Router();

router.get(`/`,(req,res) =>{
    res.render(`inicio`,{
       pagina : 'inicio' 
    });
});

router.get(`/nosotros`, (req,res) =>{
    res.render(`nosotros`,{
        pagina: 'nosotros'
    });
});

router.get(`/viajes`, (req ,res) =>{
    res.render('viajes' , {
        pagina: 'viajes'
    });
});

router.get(`/testimonios`, (req, res) =>{
    res.render('testimonios', {
        pagina: 'testimonios'
    })
})

export default router;
