//Inputs
/*const inputs = document.querySelectorAll('input.input-formul');
        inputs.forEach(input => {
            if (input.value.trim().length != 0 && !input.previousElementSibling.classList.contains('top')) {
                input.previousElementSibling.style.transition='0s';
                input.previousElementSibling.classList.add('top');
            }
            input.onfocus = () => {
                input.previousElementSibling.classList.add('top');
                input.previousElementSibling.classList.add('focus');
            }
            input.onblur = () => {
                if (input.value.trim().length == 0) {
                    input.previousElementSibling.classList.remove('top');
                }
                input.previousElementSibling.classList.remove('focus');
            }
});*/
function response()
{
    window.addEventListener('load', () => {
        fetch('https://ispipa.github.io/Proyecto/supermercados.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            //pintarResultado(data);
            //document.querySelector('#resultado').innerHTML = JSON.stringify(data);
        })
    })
}
response();
validarDatos();
function validarDatos()
{
    (function () {
        'use strict'
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
              form.classList.add('was-validated')
            }, false)
          })
      })()
}
const supermercados =[
    {
        supermercado : "dia",
        categorias:{
            platos_preparados:{
                0:{
                    nombre:"ensalada veggie tarrina 200grs",
                    url:"https://s3.dia.es/medias/productimages/hab/hed/10895682732062.jpg",
                    precio:"1,75€"
                },
                1:{
                    nombre:"ensalada thai tarrina 200grs",
                    url:"https://s0.dia.es/medias/productimages/h36/h5e/10895673229342.jpg",
                    precio:"1,75€"
                },
                2: {
                    nombre: "pizza jamón y queso envase 405 grs", 
                    url: "https://s2.dia.es/medias/productimages/h0c/hea/10870041968670.jpg", 
                    precio: "2,89€"
                },
                3: {
                    nombre: "pizza de pollo envase 410 grs", 
                    url: "https://s2.dia.es/medias/productimages/hd9/h5f/10870047604766.jpg", 
                    precio: "2,89€"
                },
                4: {
                    nombre: "pizza atún y bacon envase 405 grs", 
                    url: "https://s2.dia.es/medias/productimages/hee/h98/10870043344926.jpg",
                    precio: "2,89€"
                },
                5: {
                    nombre: "tortilla de patatas fresca sin cebolla envase 600 grs",
                    url: "https://s3.dia.es/medias/productimages/h85/h1a/11060759986206.jpg",
                    precio: "2,35€"
                },
                6: {
                    nombre: "tortilla de patatas fresca con cebolla envase 600 grs",
                    url: "https://s1.dia.es/medias/productimages/h75/h49/11060760313886.jpg",
                    precio: "2,35€"
                },
                7: {
                    nombre: "tortilla de patatas fresca con chorizo envase 600 grs",
                    url: "https://s1.dia.es/medias/productimages/h8c/h0b/10952749776926.jpg",
                    precio: "2,35€"
                },
                8: {
                    nombre: "ensalada César tarrina 210 grs", 
                    url: "https://s3.dia.es/medias/productimages/h2c/h87/10987954044958.jpg", 
                    precio: "2,19€"
                },
                9: {
                    nombre: "croquetas de jamón bandeja 162 gr", 
                    url: "https://s0.dia.es/medias/productimages/he3/h20/10976989872158.jpg", 
                    precio: "2,15€"
                }
            },
            despensa:{
                0: {
                    nombre: "arroz redondo paquete 1 Kg", 
                    url: "https://s0.dia.es/medias/productimages/hb8/h42/10676834861086.jpg", 
                    precio: "1,65€"
                },
                1: {
                    nombre: "espaguetis paquete 1 Kg", 
                    url: "https://s0.dia.es/medias/productimages/h6e/h6e/10712855052318.jpg", 
                    precio: "1,25€"
                },
                2: {
                    nombre: "pasta fresca con jamón ibérico bolsa 250 grs", 
                    url: "https://s1.dia.es/medias/productimages/h99/hfb/10886789726238.jpg", 
                    precio: "2,97€"
                },
                3: {
                    nombre: "fideo cabellín paquete 500 grs", 
                    url: "https://s0.dia.es/medias/productimages/h41/hb5/10797284687902.jpg", 
                    precio: "0,87€"
                },
                4: {
                    nombre: "cereales corn flakes caja 500 grs", 
                    url: "https://s2.dia.es/medias/productimages/h10/h6d/11076215570462.jpg", 
                    precio: "2,70€"
                },
                5: {
                    nombre: "leche entera envase 1 lt PACK 6", 
                    url: "https://s1.dia.es/medias/productimages/h1e/hda/10717082779678.jpg", 
                    precio: "4,50€"
                },
                6: {
                    nombre: "cocktail frutos secos bolsa 500 grs", 
                    url: "https://s2.dia.es/medias/hbf/h18/9847302062110.jpg", 
                    precio: "2,05€"
                },
                7: {
                    nombre: "aceite de oliva extra virgen botella 750 ml", 
                    url: "https://s3.dia.es/medias/productimages/h1d/h15/11037844209694.jpg", 
                    precio: "5,75€"
                },
                8: {
                    nombre: "ajo en polvo frasco 65 grs", 
                    url: "https://s2.dia.es/medias/he2/hfc/8859405123614.jpg", 
                    precio: "0,69€"
                },
                9: {
                    nombre: "agua mineral natural botella 1.5 lt PACK 6", 
                    url: "https://s1.dia.es/medias/productimages/hf5/he5/11033721405470.jpg", 
                    precio: "4,14€"
                },
                10: {
                    nombre: "café molido 100% Colombia paquete 250 grs", 
                    url: "https://s0.dia.es/medias/productimages/hf0/h66/10837617213470.jpg", 
                    precio: "3,25€"
                },
                11: {
                    nombre: "tomate frito envase 350 grs", 
                    url: "https://s3.dia.es/medias/h4e/hcf/11023246065694.jpg", 
                    precio: "0,85€"
                },
                12: {
                    nombre: "caldo de pollo estuche 24 pastillas", 
                    url: "https://s1.dia.es/medias/h71/h15/9334522839070.jpg", 
                    precio: "0,97€"
                },
                13: {
                    nombre: "pan de molde formato familiar bolsa 700 grs", 
                    url: "https://s0.dia.es/medias/productimages/hab/h29/10786470297630.jpg", 
                    precio: "2,49€"
                },
                14: {
                    nombre: "salsa de soja botella 150 ml", 
                    url: "https://s0.dia.es/medias/productimages/h93/h6c/11094508371998.jpg", 
                    precio: "1,99€"
                },
            },
            mascotas:{
                0: {
                    nombre: "alimento para perros mini bolsa 1,5 kg", 
                    url: "https://s3.dia.es/medias/h51/h8f/10661338054686.jpg", 
                    precio: "6,39€"
                },
                1: {
                    nombre: "alimento para gatos mix buey bolsa 1,5 kg", 
                    url: "https://s2.dia.es/medias/hee/hbe/10661309218846.jpg", 
                    precio: "4,65€"
                },
                2: {
                    nombre: "alimento para perros receta tradicional bolsa 4 kg", 
                    url: "https://s3.dia.es/medias/h5f/h2f/10661355225118.jpg", 
                    precio: "6,79€"
                },
                3: {
                    nombre: "detergente para ropa y cama de mascotas botella 1 lt", 
                    url: "https://s1.dia.es/medias/heb/h68/9561295257630.jpg", 
                    precio: "5,15€"
                },
                4: {
                    nombre: "barritas con frutas para canarios bolsa 70 grs", 
                    url: "https://s2.dia.es/medias/ha5/h3e/8846782529566.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "One alimento para gatos junior bolsa 450 grs", 
                    url: "https://s2.dia.es/medias/h48/h0a/10953864413214.jpg", 
                    precio: "2,79€"
                },
                6: {
                    nombre: "cepillo raqueta caucho 1 ud", 
                    url: "https://s3.dia.es/medias/h7a/hfd/8868541169694.jpg", 
                    precio: "1,99€"
                },
                7: {
                    nombre: "pelota para perros 1 ud", 
                    url: "https://s0.dia.es/medias/h2d/h26/8872827650078.jpg", 
                    precio: "3,85€"
                },
                8: {
                    nombre: "champú para perros pelo negro bote 300 ml", 
                    url: "https://s0.dia.es/medias/h3f/h83/9390412464158.jpg", 
                    precio: "5,29€"
                },
                9: {
                    nombre: "agua de colonia fresca para perros spray 125 ml", 
                    url: "https://s2.dia.es/medias/h27/h81/9390410498078.jpg",
                    precio: "4,75€"
                },
            },
            bebe:{
                0: {
                    nombre: "champú infantil clásico bote 750 ml", 
                    url: "https://s1.dia.es/medias/h69/h99/9158125191198.jpg", 
                    precio: "2,39€"
                },
                1: {
                    nombre: "toallitas para bebés envase 80 uds", 
                    url: "https://s2.dia.es/medias/productimages/h28/h15/10954616012830.jpg", 
                    precio: "1,09€"
                },
                2: {
                    nombre: "crema protectora de pañal tubo 100 ml", 
                    url: "https://s3.dia.es/medias/productimages/h56/ha1/10939360477214.jpg", 
                    precio: "3,69€"
                },
                3: {
                    nombre: "jabon liquido infantil lavanda botella 750ml", 
                    url: "https://s1.dia.es/medias/hc1/hb0/9158100025374.jpg", 
                    precio: "1,99€"
                },
                4: {
                    nombre: "colonia infantil botella 750 ml", 
                    url: "https://s3.dia.es/medias/h07/h95/8958623023134.jpg", 
                    precio: "1,79€"
                },
                5: {
                    nombre: "leche infantil 3 bote 800 grs", 
                    url: "https://s2.dia.es/medias/productimages/h4f/h7b/10988153503774.jpg", 
                    precio: "14,99€"
                },
                6: {nombre: "calzoncillos para niños absorbentes de 4 a 7 años paquete 10 uds", 
                    url: "https://s0.dia.es/medias/productimages/hdc/h35/10782312562718.jpg", 
                    precio: "14,49€"
                },
                7: {
                    nombre: "frutas variadas tarrito 2 x200 gr", 
                    url: "https://s3.dia.es/medias/hfa/h3c/8862312693790.jpg", 
                    precio: "1,77€"
                },
                8: {
                    nombre: "esponja especial de baño para bebé bolsa 1 ud", 
                    url: "https://s1.dia.es/medias/hce/h0a/8856386273310.jpg", 
                    precio: "4,45€"
                },
                9: {
                    nombre: "Baby talco dulces sueños para bebés bote 200 grs", 
                    url: "https://s0.dia.es/medias/productimages/h29/h59/10939392000030.jpg", 
                    precio: "3,05€"
                },
            },
            cuidado_para_el_hogar:{
                0: {
                    nombre: "ambientador neutralizador aroma lavanda spray 300 ml", 
                    url: "https://s2.dia.es/medias/hfb/h3f/9709996408862.jpg", 
                    precio: "1,15€"
                },
                1: {
                    nombre: "gel limpiador wc 3 en 1 océano botella 750 ml", 
                    url: "https://s0.dia.es/medias/h88/hc6/11030574792734.jpg", 
                    precio: "2,39€"
                },
                2: {
                    nombre: "palo rojo universal 1 ud", 
                    url: "https://s1.dia.es/medias/productimages/he7/h26/10844406022174.jpg", 
                    precio: "3,95€"
                },
                3: {
                    nombre: "estropajo salvauñas fibra verde paquete 4 uds", 
                    url: "https://s2.dia.es/medias/h01/haf/9354601299998.jpg", 
                    precio: "0,97€"
                },
                4: {
                    nombre: "ambientador eléctrico aroma aire fresco recambio 1 ud", 
                    url: "https://s2.dia.es/medias/productimages/h92/h71/10980041392158.jpg", 
                    precio: "3,79€"
                },
                5: {
                    nombre: "fregona hilo microfibras especial para suelos delicados bolsa 1 ud", 
                    url: "https://s3.dia.es/medias/h92/h7c/8872695398430.jpg", 
                    precio: "1,59€"
                },
                6: {
                    nombre: "descalcificador de lavadora en pastillas caja 15 ud", 
                    url: "https://s0.dia.es/medias/productimages/hb2/hba/10836376289310.jpg", 
                    precio: "8,49€"
                },
                7: {
                    nombre: "bayeta amarilla super absorbente y extra suave bolsa 3 uds", 
                    url: "https://s0.dia.es/medias/productimages/hf0/hfb/10949995069470.jpg", 
                    precio: "2,69€"
                },
                8: {
                    nombre: "cepillo antichoque de escoba 3 en 1", 
                    url: "https://s0.dia.es/medias/productimages/hfd/he3/11097403490334.jpg", 
                    precio: "4,65€"
                },
                9: {
                    nombre: "tijeras multiusos S/M 1 ud", 
                    url: "https://s1.dia.es/medias/h15/ha2/8959536300062.jpg", 
                    precio: "3,29€"
                },
            },
            cuidado_personal:{
                0: {
                    nombre: "enjuague bucal zero 500 ml", "url": 
                    "https://s2.dia.es/medias/productimages/h74/hdc/10995930398750.jpg", 
                    precio: "5,49€"
                },
                1: {
                    nombre: "compresa super con alas bolsa 12 uds", 
                    url: "https://s3.dia.es/medias/productimages/h9b/he7/10988073418782.jpg", 
                    precio: "2,89€"
                },
                2: {
                    nombre: "tinte Negro Azulado Nº 1,1 caja 1 ud", 
                    url: "https://s2.dia.es/medias/productimages/h5f/hd4/10684455485470.jpg", 
                    precio: "4,59€"
                },
                3: {
                    nombre: "Fresh step desodorante para pies spray 150 ml", 
                    url: "https://s2.dia.es/medias/hcf/he8/9639159300126.jpg", 
                    precio: "5,50€"
                },
                4: {
                    nombre: "gel fijador efecto cemento tarro 300 ml", 
                    url: "https://s3.dia.es/medias/ha3/haf/9561293946910.jpg", 
                    precio: "3,79€"
                },
                5: {
                    nombre: "cepillo dental professional medio blíster 1 ud", 
                    url: "https://s3.dia.es/medias/h42/h43/10998992240670.jpg", 
                    precio: "2,45€"
                },
                6: {
                    nombre: "hojas de afeitar classic blíster 5 uds", 
                    url: "https://s1.dia.es/medias/h58/hd7/8963438837790.jpg", 
                    precio: "2,79€"
                },
                7: {
                    nombre: "desodorante apollo spray 150 ml", 
                    url: "https://s0.dia.es/medias/hb3/h12/10465571536926.jpg", 
                    precio: "3,99€"
                },
                8: {
                    nombre: "jabón de manos pura y sensitiva pastilla 100 grs", 
                    url: "https://s1.dia.es/medias/h57/he9/10770326847518.jpg", 
                    precio: "1,49€"
                },
                9: {
                    nombre: "cepillo dental eléctrico floss tip 360º blíster 1 uds", 
                    url: "https://s2.dia.es/medias/productimages/hf7/hcc/11053856489502.jpg", 
                    precio: "9,99€"
                },
            },
            bebidas:{
                0: {
                    nombre: "cerveza clásica lata 33 cl", 
                    url: "https://s2.dia.es/medias/hed/h6b/11078438518814.jpg", 
                    precio: "0,50€"
                },
                1: {
                    nombre: "cerveza lata 50 cl", 
                    url: "https://s3.dia.es/medias/h5f/ha9/9626455638046.jpg", 
                    precio: "0,99€"
                },
                2: {
                    nombre: "bebida energética lata 25 cl", 
                    url: "https://s1.dia.es/medias/h59/h22/10908046262302.jpg", 
                    precio: "0,99€"
                },
                3: {
                    nombre: "limón zero botella 2 lts", 
                    url: "https://s0.dia.es/medias/productimages/h4a/hce/11076053041182.jpg", 
                    precio: "1,59€"
                },
                4: {
                    nombre: "sprite botella 2 lts", 
                    url: "https://s0.dia.es/medias/hd2/hc6/10742032728094.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "COCA COLA zero botella 2 lts", 
                    url: "https://s0.dia.es/medias/hf2/h42/11075969744926.jpg", 
                    precio: "1,84€"
                },
                6: {
                    nombre: "sunny delight sabor florida botella 310 ml", 
                    url: "https://s3.dia.es/medias/productimages/h34/ha7/10742378332190.jpg", 
                    precio: "0,89€"
                },
                7: {
                    nombre: "BUDWEISER cerveza pack 6 botellas 25 cl", 
                    url: "https://s2.dia.es/medias/productimages/he2/ha4/11069566189598.jpg", 
                    precio: "4,49€"
                },
                8: {
                    nombre: "MONSTER bebida energética green lata 50 cl", 
                    url: "https://s1.dia.es/medias/productimages/h7f/h30/10803178307614.jpg", 
                    precio: "1,59€"
                },
                9: {
                    nombre: "FANTA naranja zero botella 2 lts", 
                    url: "https://s1.dia.es/medias/productimages/h62/hf1/11012070932510.jpg", 
                    precio: "1,59€"
                },
            },
            bodega:{
                0: {
                    nombre: "JACK DANIELS whisky tenessee botella 70 cl", 
                    url: "https://s1.dia.es/medias/hff/h26/8865934966814.jpg", 
                    precio: "21,69€"
                },
                1: {
                    nombre: "BACARDI ron blanco superior botella 70 cl", 
                    url: "https://s2.dia.es/medias/productimages/h73/h6b/10971763441694.jpg", 
                    precio: "12,59€"
                },
                2: {
                    nombre: "TANQUERAY ginebra london dry botella 70 cl", 
                    url: "https://s0.dia.es/medias/h29/h17/10847120719902.jpg", 
                    precio: "13,59€"
                },
                3: {
                    nombre: "EL COTO vino tinto crianza DO Rioja botella 75 cl", 
                    url: "https://s1.dia.es/medias/he1/h0b/10659128705054.jpg", 
                    precio: "6,15€"
                },
                4: {
                    nombre: "BOMBAY Original ginebra london dry botella 70 cl", 
                    url: "https://s3.dia.es/medias/productimages/h00/h52/10971765735454.jpg", 
                    precio: "12,49€"
                },
                5: {
                    nombre: "PASSPORT whisky botella 70 cl", 
                    url: "https://s0.dia.es/medias/h44/h98/10660203298846.jpg", 
                    precio: "9,99€"
                },
                6: {
                    nombre: "BAJOZ vino tinto DO Toro botella 75 cl", 
                    url: "https://s1.dia.es/medias/productimages/hfc/hd5/10996233273374.jpg", 
                    precio: "3,99€"
                },
                7: {
                    nombre: "FEDERICO PATERNINA vino tinto 12 meses banda azul DO Rioja botella 75 cl", 
                    url: "https://s0.dia.es/medias/productimages/h1a/h68/10797319290910.jpg", 
                    precio: "5,99€"
                },
                8: {
                    nombre: "GORDONS ginebra botella 1 lt", 
                    url: "https://s2.dia.es/medias/h7a/h08/10847111479326.jpg", 
                    precio: "12,99€"
                },
                9: {
                    nombre: "ALVINI vermouth rosso botella 1 lt", 
                    url: "https://s3.dia.es/medias/productimages/h67/h5e/10945399848990.jpg", 
                    precio: "2,25€"
                },
            },
            congelados:{
                0: {
                    nombre: "HAAGEN DAZS helado dulce de leche tarrina 400 grs", 
                    url: "https://s3.dia.es/medias/h31/h1b/10467447963678.jpg", 
                    precio: "6,49€"
                },
                1: {
                    nombre: "OREO helado bombón caja 4 uds 260 grs", 
                    url: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202202/14/00118953905538____5__600x600.jpg", 
                    precio: "4,39€"
                },
                2: {
                    nombre: "MILKA helado cono chocolate y vainilla caja 4 uds 270 grs", 
                    url: "https://s3.dia.es/medias/h69/hf3/10660066787358.jpg", 
                    precio: "4,39€"
                },
                3: {
                    nombre: "McCain patatas fritas forno julienne bolsa 600 grs", 
                    url: "https://s1.dia.es/medias/h75/h57/10867351191582.jpg", 
                    precio: "3,09€"
                },
                4: {
                    nombre: "DIA VEGECAMPO menestra de verduras bolsa 1 kg", 
                    url: "https://s2.dia.es/medias/productimages/h51/h86/10976954679326.jpg", 
                    precio: "1,19€"
                },
                5: {
                    nombre: "NORTINDAL pack tinta de calamar 4 unidades 4 gr", 
                    url: "https://s2.dia.es/medias/he5/hcd/10324977057822.jpg", 
                    precio: "0,75€"
                },
                6: {
                    nombre: "BUITONI Forno di pietra pizza jamón y queso caja 360 grs", 
                    url: "https://s3.dia.es/medias/productimages/h97/h44/10874237452318.jpg", 
                    precio: "3,59€"
                },
                7: {
                    nombre: "DR OETKER ristorante pizza atún caja 355 grs", 
                    url: "https://s3.dia.es/medias/productimages/hcc/h34/11093296414750.jpg", 
                    precio: "3,59€"
                },
                8: {
                    nombre: "PESCANOVA calamar limpio envase 400 grs", 
                    url: "https://s2.dia.es/medias/productimages/hc3/h91/10681534545950.jpg", 
                    precio: "5,55€"
                },
                9: {
                    nombre: "MARI MARINERA gamba pelada grande bolsa 400 grs", 
                    url: "https://s2.dia.es/medias/productimages/h89/h2a/10807427399710.jpg", 
                    precio: "6,25€"
                },
            },
            refrigerados:{
                0: {
                    nombre: "Pudding de chocolate con alto contenido en proteinas y bajo en grasas YOPRO de Danone 180 g.", 
                    url: "https://www.alcampo.es/media/hac/h28/11522987622430.jpg", 
                    precio: "1,59€"
                },
                1: {
                    nombre: "Natillas de vainilla elaboradas sin gluten DANET de Danone 8 x 120 grs", 
                    url: "https://www.alcampo.es/media/hf6/h8a/9317474041886.jpg", 
                    precio: "2,99€"
                },
                2: {
                    nombre: "Kefir natural de leche de vaca de pasto EL PASTORET 500 g.", 
                    url: "https://www.alcampo.es/media/h78/h6f/9471120310302.jpg", 
                    precio: "1,68€"
                },
                3: {
                    nombre: "Flan de huevo receta tradicional, elaborado al baño maria con leche recogida diariamente DHUL 4 x 110 grs", 
                    url: "https://www.alcampo.es/media/had/h73/11385326370846.jpg", 
                    precio: "1,95€"
                },
                4: {
                    nombre: "Postre lácteo (delicias) de trufa LA LECHERA de Nestlé 2 x 125 grs", 
                    url: "https://www.alcampo.es/media/h45/h9c/10032258875422.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "Mousse de yogur natural azucarado, elaborada sin gluten DANONE 4 x 65 grs", 
                    url: "https://www.alcampo.es/media/h3e/h6b/11434522607646.jpg", 
                    precio: "2,19€"
                },
                6: {
                    nombre: "Tarrina de mantequilla sin sal CENTRAL LECHERA ASTURIANA 250 grs", 
                    url: "https://www.alcampo.es/media/h55/hbd/9280767852574.jpg", 
                    precio: "2,42€"
                },
                7: {
                    nombre: "Margarina 3/4 con sal y sin aceite de Palma TULIPÁN 450 g.", 
                    url: "https://www.alcampo.es/media/h3d/hc2/11448737398814.jpg", 
                    precio: "2,54€"
                },
                8: {
                    nombre: "Nata líquida (18 % de materia grasa) para cocinar PASCUAL 200 ml.", 
                    url: "https://www.alcampo.es/media/h44/hb3/10493030858782.jpg", 
                    precio: "1,28€"
                },
                9: {
                    nombre: "Nata montada en spray CENTRAL LECHERA ASTURIANA 250 grs", 
                    url: "https://www.alcampo.es/media/he8/hb8/8927298289694.jpg", 
                    precio: "1,98€"
                },
            },
            carniceria:{
                0: {
                    nombre: "Entrecot de vacuno (peso aprox. 330 grs)", 
                    url: "https://s2.dia.es/medias/productimages/hcf/h55/10779310227486.jpg", 
                    precio: "6,93€"
                },
                1: {
                    nombre: "pechugas enteras de pollo bandeja (peso aprox. 880 grs)", 
                    url: "https://s0.dia.es/medias/h0d/h2a/10594922561566.jpg", 
                    precio: "6,29€"
                },
                2: {
                    nombre: "preparado de carne picada de vacuno bandeja 500 grs", 
                    url: "https://s3.dia.es/medias/productimages/hcb/h11/10704616456222.jpg", 
                    precio: "3,99€"
                },
                3: {
                    nombre: "SERRANO longaniza de pavo y pollo 320 grs", 
                    url: "https://s2.dia.es/medias/productimages/hcf/hff/10676999553054.jpg", 
                    precio: "1,99€"
                },
                4: {
                    nombre: "chistorra pieza 220 grs", 
                    url: "https://s0.dia.es/medias/ha0/hdf/8822466969630.jpg", 
                    precio: "1,25€"
                },
            },
            charcuteria:{
                0: {
                    nombre: "PHILADELPHIA queso para untar original tarrina 250 grs", 
                    url: "https://s3.dia.es/medias/productimages/ha1/h08/11100149448734.jpg", 
                    precio: "2,05€"
                },
                1: {
                    nombre: "EL CASERIO queso fundido burger con cheddar en lonchas paquete 185 grs", 
                    url: "https://s0.dia.es/medias/productimages/h8e/h13/11098841120798.jpg", 
                    precio: "1,69€"
                },
                2: {
                    nombre: "SÁNCHEZ ALCARAZ jamón de cebo Ibérico 50% pieza (peso aprox. 8 Kgs)", 
                    url: "https://s3.dia.es/medias/productimages/hd3/he7/11097384484894.jpg", 
                    precio: "125€"
                },
                3: {
                    nombre: "ARGAL Bonnatur jamón cocido en finas lonchas sobre 140 grs", 
                    url: "https://s1.dia.es/medias/productimages/h81/h36/10676792197150.jpg", 
                    precio: "2,29€"
                },
                4: {
                    nombre: "ELPOZO Selección jamón curado en lonchas sobre 115 gr", 
                    url: "https://s2.dia.es/medias/productimages/hee/hed/11078460801054.jpg", 
                    precio: "1,99€"
                },
            },
            pescaderia:{
                0: {
                    nombre: "LA GULA DEL NORTE con gambas al ajillo envase 110 grs", 
                    url: "https://s1.dia.es/medias/productimages/h75/h2e/10842923106334.jpg", 
                    precio: "3,19€"
                },
                1: {
                    nombre: "GALLINA BLANCA caldo para paella de marisco envase 1 lt", 
                    url: "https://s3.dia.es/medias/hed/h7e/10594445819934.jpg", 
                    precio: "2,95€"
                },
                2: {
                    nombre: "MARI MARINERA palitos de surimi refrigeradas MSC paquete 300 grs", 
                    url: "https://s0.dia.es/medias/h50/h4a/10521864077342.jpg", 
                    precio: "1,75€"
                },
                3: {
                    nombre: "EMBUMAR rodajas de mar selectas envase 200 grs", 
                    url: "https://s2.dia.es/medias/productimages/hb5/h6a/11100151742494.jpg", 
                    precio: "4,39€"
                },
                4: {
                    nombre: "AGUINAMAR mejillones cocidos envasado al vació 1 Kg", 
                    url: "https://s1.dia.es/medias/productimages/h86/hd6/10777973030942.jpg", 
                    precio: "4,89€"
                },
            },
            frutas_y_verduras:{
                0: {
                    nombre: "Aguacate bio bandeja 400 grs", 
                    url: "https://s3.dia.es/medias/hbc/h23/9583742222366.jpg", 
                    precio: "2,89€"
                },
                1: {
                    nombre: "Kiwi bandeja 700 grs", 
                    url: "https://s2.dia.es/medias/productimages/hb7/h9e/10927281143838.jpg", 
                    precio: "2,15€"
                },
                2: {
                    nombre: "Manzana Yello bandeja 700 grs", 
                    url: "https://s1.dia.es/medias/productimages/h52/had/11007157796894.jpg", 
                    precio: "2,59€"
                },
                3: {
                    nombre: "GENUINE COCONUT Coco troceado BIO bolsa 56 grs", 
                    url: "https://s2.dia.es/medias/productimages/h60/haf/11090925584414.jpg", 
                    precio: "0,99€"
                },
                4: {
                    nombre: "Banana bio bolsa (1.2 Kg aprox.)", 
                    url: "https://s0.dia.es/medias/productimages/h72/h41/10806535192606.jpg", 
                    precio: "2,39€"
                },
                5: {
                    nombre: "Ajo BIO malla 200 grs", 
                    url: "https://s3.dia.es/medias/productimages/h6e/h6d/11016736571422.jpg", 
                    precio: "1,49€"
                },
                6: {
                    nombre: "Cilantro 20 grs", 
                    url: "https://s1.dia.es/medias/hfc/h7d/9662449287198.jpg", 
                    precio: "1,35€"
                },
                7: {
                    nombre: "Jengibre bandeja 200 grs", 
                    url: "https://s2.dia.es/medias/productimages/ha8/h54/10943702007838.jpg", 
                    precio: "1,39€"
                },
                8: {
                    nombre: "Champiñón laminado bandeja 250 grs", 
                    url: "https://s1.dia.es/medias/hee/hc1/8833925971998.jpg", 
                    precio: "1,35€"
                },
                9: {
                    nombre: "VEGECAMPO lechuga Iceberg lavada bolsa 250 grs", 
                    url: "https://s2.dia.es/medias/productimages/hfd/h7b/10987955683358.jpg", 
                    precio: "0,85€"
                },
            },
        },
    },
    //cambiar a partir de aqui
    {
        supermercado : "ahorraMas",
        categorias:{
            platos_preparados:{
                0:{
                    nombre:"ensalada veggie tarrina 200grs",
                    url:"https://s3.dia.es/medias/productimages/hab/hed/10895682732062.jpg",
                    precio:"1,75€"
                },
                1:{
                    nombre:"ensalada thai tarrina 200grs",
                    url:"https://s0.dia.es/medias/productimages/h36/h5e/10895673229342.jpg",
                    precio:"1,75€"
                },
                2: {
                    nombre: "pizza jamón y queso envase 405 grs", 
                    url: "https://s2.dia.es/medias/productimages/h0c/hea/10870041968670.jpg", 
                    precio: "2,89€"
                },
                3: {
                    nombre: "pizza de pollo envase 410 grs", 
                    url: "https://s2.dia.es/medias/productimages/hd9/h5f/10870047604766.jpg", 
                    precio: "2,89€"
                },
                4: {
                    nombre: "pizza atún y bacon envase 405 grs", 
                    url: "https://s2.dia.es/medias/productimages/hee/h98/10870043344926.jpg",
                    precio: "2,89€"
                },
                5: {
                    nombre: "tortilla de patatas fresca sin cebolla envase 600 grs",
                    url: "https://s3.dia.es/medias/productimages/h85/h1a/11060759986206.jpg",
                    precio: "2,35€"
                },
                6: {
                    nombre: "tortilla de patatas fresca con cebolla envase 600 grs",
                    url: "https://s1.dia.es/medias/productimages/h75/h49/11060760313886.jpg",
                    precio: "2,35€"
                },
                7: {
                    nombre: "tortilla de patatas fresca con chorizo envase 600 grs",
                    url: "https://s1.dia.es/medias/productimages/h8c/h0b/10952749776926.jpg",
                    precio: "2,35€"
                },
                8: {
                    nombre: "ensalada César tarrina 210 grs", 
                    url: "https://s3.dia.es/medias/productimages/h2c/h87/10987954044958.jpg", 
                    precio: "2,19€"
                },
                9: {
                    nombre: "croquetas de jamón bandeja 162 gr", 
                    url: "https://s0.dia.es/medias/productimages/he3/h20/10976989872158.jpg", 
                    precio: "2,15€"
                }
            },
            despensa:{
                0: {
                    nombre: "arroz redondo paquete 1 Kg", 
                    url: "https://s0.dia.es/medias/productimages/hb8/h42/10676834861086.jpg", 
                    precio: "1,65€"
                },
                1: {
                    nombre: "espaguetis paquete 1 Kg", 
                    url: "https://s0.dia.es/medias/productimages/h6e/h6e/10712855052318.jpg", 
                    precio: "1,25€"
                },
                2: {
                    nombre: "pasta fresca con jamón ibérico bolsa 250 grs", 
                    url: "https://s1.dia.es/medias/productimages/h99/hfb/10886789726238.jpg", 
                    precio: "2,97€"
                },
                3: {
                    nombre: "fideo cabellín paquete 500 grs", 
                    url: "https://s0.dia.es/medias/productimages/h41/hb5/10797284687902.jpg", 
                    precio: "0,87€"
                },
                4: {
                    nombre: "cereales corn flakes caja 500 grs", 
                    url: "https://s2.dia.es/medias/productimages/h10/h6d/11076215570462.jpg", 
                    precio: "2,70€"
                },
                5: {
                    nombre: "leche entera envase 1 lt PACK 6", 
                    url: "https://s1.dia.es/medias/productimages/h1e/hda/10717082779678.jpg", 
                    precio: "4,50€"
                },
                6: {
                    nombre: "cocktail frutos secos bolsa 500 grs", 
                    url: "https://s2.dia.es/medias/hbf/h18/9847302062110.jpg", 
                    precio: "2,05€"
                },
                7: {
                    nombre: "aceite de oliva extra virgen botella 750 ml", 
                    url: "https://s3.dia.es/medias/productimages/h1d/h15/11037844209694.jpg", 
                    precio: "5,75€"
                },
                8: {
                    nombre: "ajo en polvo frasco 65 grs", 
                    url: "https://s2.dia.es/medias/he2/hfc/8859405123614.jpg", 
                    precio: "0,69€"
                },
                9: {
                    nombre: "agua mineral natural botella 1.5 lt PACK 6", 
                    url: "https://s1.dia.es/medias/productimages/hf5/he5/11033721405470.jpg", 
                    precio: "4,14€"
                },
                10: {
                    nombre: "café molido 100% Colombia paquete 250 grs", 
                    url: "https://s0.dia.es/medias/productimages/hf0/h66/10837617213470.jpg", 
                    precio: "3,25€"
                },
                11: {
                    nombre: "tomate frito envase 350 grs", 
                    url: "https://s3.dia.es/medias/h4e/hcf/11023246065694.jpg", 
                    precio: "0,85€"
                },
                12: {
                    nombre: "caldo de pollo estuche 24 pastillas", 
                    url: "https://s1.dia.es/medias/h71/h15/9334522839070.jpg", 
                    precio: "0,97€"
                },
                13: {
                    nombre: "pan de molde formato familiar bolsa 700 grs", 
                    url: "https://s0.dia.es/medias/productimages/hab/h29/10786470297630.jpg", 
                    precio: "2,49€"
                },
                14: {
                    nombre: "salsa de soja botella 150 ml", 
                    url: "https://s0.dia.es/medias/productimages/h93/h6c/11094508371998.jpg", 
                    precio: "1,99€"
                },
            },
            mascotas:{
                0: {
                    nombre: "alimento para perros mini bolsa 1,5 kg", 
                    url: "https://s3.dia.es/medias/h51/h8f/10661338054686.jpg", 
                    precio: "6,39€"
                },
                1: {
                    nombre: "alimento para gatos mix buey bolsa 1,5 kg", 
                    url: "https://s2.dia.es/medias/hee/hbe/10661309218846.jpg", 
                    precio: "4,65€"
                },
                2: {
                    nombre: "alimento para perros receta tradicional bolsa 4 kg", 
                    url: "https://s3.dia.es/medias/h5f/h2f/10661355225118.jpg", 
                    precio: "6,79€"
                },
                3: {
                    nombre: "detergente para ropa y cama de mascotas botella 1 lt", 
                    url: "https://s1.dia.es/medias/heb/h68/9561295257630.jpg", 
                    precio: "5,15€"
                },
                4: {
                    nombre: "barritas con frutas para canarios bolsa 70 grs", 
                    url: "https://s2.dia.es/medias/ha5/h3e/8846782529566.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "One alimento para gatos junior bolsa 450 grs", 
                    url: "https://s2.dia.es/medias/h48/h0a/10953864413214.jpg", 
                    precio: "2,79€"
                },
                6: {
                    nombre: "cepillo raqueta caucho 1 ud", 
                    url: "https://s3.dia.es/medias/h7a/hfd/8868541169694.jpg", 
                    precio: "1,99€"
                },
                7: {
                    nombre: "pelota para perros 1 ud", 
                    url: "https://s0.dia.es/medias/h2d/h26/8872827650078.jpg", 
                    precio: "3,85€"
                },
                8: {
                    nombre: "champú para perros pelo negro bote 300 ml", 
                    url: "https://s0.dia.es/medias/h3f/h83/9390412464158.jpg", 
                    precio: "5,29€"
                },
                9: {
                    nombre: "agua de colonia fresca para perros spray 125 ml", 
                    url: "https://s2.dia.es/medias/h27/h81/9390410498078.jpg",
                    precio: "4,75€"
                },
            },
            bebe:{
                0: {
                    nombre: "champú infantil clásico bote 750 ml", 
                    url: "https://s1.dia.es/medias/h69/h99/9158125191198.jpg", 
                    precio: "2,39€"
                },
                1: {
                    nombre: "toallitas para bebés envase 80 uds", 
                    url: "https://s2.dia.es/medias/productimages/h28/h15/10954616012830.jpg", 
                    precio: "1,09€"
                },
                2: {
                    nombre: "crema protectora de pañal tubo 100 ml", 
                    url: "https://s3.dia.es/medias/productimages/h56/ha1/10939360477214.jpg", 
                    precio: "3,69€"
                },
                3: {
                    nombre: "jabon liquido infantil lavanda botella 750ml", 
                    url: "https://s1.dia.es/medias/hc1/hb0/9158100025374.jpg", 
                    precio: "1,99€"
                },
                4: {
                    nombre: "colonia infantil botella 750 ml", 
                    url: "https://s3.dia.es/medias/h07/h95/8958623023134.jpg", 
                    precio: "1,79€"
                },
                5: {
                    nombre: "leche infantil 3 bote 800 grs", 
                    url: "https://s2.dia.es/medias/productimages/h4f/h7b/10988153503774.jpg", 
                    precio: "14,99€"
                },
                6: {"nombre": "calzoncillos para niños absorbentes de 4 a 7 años paquete 10 uds", 
                    url: "https://s0.dia.es/medias/productimages/hdc/h35/10782312562718.jpg", 
                    precio: "14,49€"
                },
                7: {
                    nombre: "frutas variadas tarrito 2 x200 gr", 
                    url: "https://s3.dia.es/medias/hfa/h3c/8862312693790.jpg", 
                    precio: "1,77€"
                },
                8: {
                    nombre: "esponja especial de baño para bebé bolsa 1 ud", 
                    url: "https://s1.dia.es/medias/hce/h0a/8856386273310.jpg", 
                    precio: "4,45€"
                },
                9: {
                    nombre: "Baby talco dulces sueños para bebés bote 200 grs", 
                    url: "https://s0.dia.es/medias/productimages/h29/h59/10939392000030.jpg", 
                    precio: "3,05€"
                },
            },
            cuidado_para_el_hogar:{
                0: {
                    nombre: "ambientador neutralizador aroma lavanda spray 300 ml", 
                    url: "https://s2.dia.es/medias/hfb/h3f/9709996408862.jpg", 
                    precio: "1,15€"
                },
                1: {
                    nombre: "gel limpiador wc 3 en 1 océano botella 750 ml", 
                    url: "https://s0.dia.es/medias/h88/hc6/11030574792734.jpg", 
                    precio: "2,39€"
                },
                2: {
                    nombre: "palo rojo universal 1 ud", 
                    url: "https://s1.dia.es/medias/productimages/he7/h26/10844406022174.jpg", 
                    precio: "3,95€"
                },
                3: {
                    nombre: "estropajo salvauñas fibra verde paquete 4 uds", 
                    url: "https://s2.dia.es/medias/h01/haf/9354601299998.jpg", 
                    precio: "0,97€"
                },
                4: {
                    nombre: "ambientador eléctrico aroma aire fresco recambio 1 ud", 
                    url: "https://s2.dia.es/medias/productimages/h92/h71/10980041392158.jpg", 
                    precio: "3,79€"
                },
                5: {
                    nombre: "fregona hilo microfibras especial para suelos delicados bolsa 1 ud", 
                    url: "https://s3.dia.es/medias/h92/h7c/8872695398430.jpg", 
                    precio: "1,59€"
                },
                6: {
                    nombre: "descalcificador de lavadora en pastillas caja 15 ud", 
                    url: "https://s0.dia.es/medias/productimages/hb2/hba/10836376289310.jpg", 
                    precio: "8,49€"
                },
                7: {
                    nombre: "bayeta amarilla super absorbente y extra suave bolsa 3 uds", 
                    url: "https://s0.dia.es/medias/productimages/hf0/hfb/10949995069470.jpg", 
                    precio: "2,69€"
                },
                8: {
                    nombre: "cepillo antichoque de escoba 3 en 1", 
                    url: "https://s0.dia.es/medias/productimages/hfd/he3/11097403490334.jpg", 
                    precio: "4,65€"
                },
                9: {
                    nombre: "tijeras multiusos S/M 1 ud", 
                    url: "https://s1.dia.es/medias/h15/ha2/8959536300062.jpg", 
                    precio: "3,29€"
                },
            },
            cuidado_personal:{
                0: {
                    nombre: "enjuague bucal zero 500 ml", 
                    url: "https://s2.dia.es/medias/productimages/h74/hdc/10995930398750.jpg", 
                    precio: "5,49€"
                },
                1: {
                    nombre: "compresa super con alas bolsa 12 uds", 
                    url: "https://s3.dia.es/medias/productimages/h9b/he7/10988073418782.jpg", 
                    precio: "2,89€"
                },
                2: {
                    nombre: "tinte Negro Azulado Nº 1,1 caja 1 ud", 
                    url: "https://s2.dia.es/medias/productimages/h5f/hd4/10684455485470.jpg", 
                    precio: "4,59€"
                },
                3: {
                    nombre: "Fresh step desodorante para pies spray 150 ml", 
                    url: "https://s2.dia.es/medias/hcf/he8/9639159300126.jpg", 
                    precio: "5,50€"
                },
                4: {
                    nombre: "gel fijador efecto cemento tarro 300 ml", 
                    url: "https://s3.dia.es/medias/ha3/haf/9561293946910.jpg", 
                    precio: "3,79€"
                },
                5: {
                    nombre: "cepillo dental professional medio blíster 1 ud", 
                    url: "https://s3.dia.es/medias/h42/h43/10998992240670.jpg", 
                    precio: "2,45€"
                },
                6: {
                    nombre: "hojas de afeitar classic blíster 5 uds", 
                    url: "https://s1.dia.es/medias/h58/hd7/8963438837790.jpg", 
                    precio: "2,79€"
                },
                7: {
                    nombre: "desodorante apollo spray 150 ml", 
                    url: "https://s0.dia.es/medias/hb3/h12/10465571536926.jpg", 
                    precio: "3,99€"
                },
                8: {
                    nombre: "jabón de manos pura y sensitiva pastilla 100 grs", 
                    url: "https://s1.dia.es/medias/h57/he9/10770326847518.jpg", 
                    precio: "1,49€"
                },
                9: {
                    nombre: "cepillo dental eléctrico floss tip 360º blíster 1 uds", 
                    url: "https://s2.dia.es/medias/productimages/hf7/hcc/11053856489502.jpg", 
                    precio: "9,99€"
                },
            },
            bebidas:{
                0: {
                    nombre: "cerveza clásica lata 33 cl", 
                    url: "https://s2.dia.es/medias/hed/h6b/11078438518814.jpg", 
                    precio: "0,50€"
                },
                1: {
                    nombre: "cerveza lata 50 cl", 
                    url: "https://s3.dia.es/medias/h5f/ha9/9626455638046.jpg", 
                    precio: "0,99€"
                },
                2: {
                    nombre: "bebida energética lata 25 cl", 
                    url: "https://s1.dia.es/medias/h59/h22/10908046262302.jpg", 
                    precio: "0,99€"
                },
                3: {
                    nombre: "limón zero botella 2 lts", 
                    url: "https://s0.dia.es/medias/productimages/h4a/hce/11076053041182.jpg", 
                    precio: "1,59€"
                },
                4: {
                    nombre: "sprite botella 2 lts", 
                    url: "https://s0.dia.es/medias/hd2/hc6/10742032728094.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "COCA COLA zero botella 2 lts", 
                    url: "https://s0.dia.es/medias/hf2/h42/11075969744926.jpg", 
                    precio: "1,84€"
                },
                6: {
                    nombre: "sunny delight sabor florida botella 310 ml", 
                    url: "https://s3.dia.es/medias/productimages/h34/ha7/10742378332190.jpg", 
                    precio: "0,89€"
                },
                7: {
                    nombre: "BUDWEISER cerveza pack 6 botellas 25 cl", 
                    url: "https://s2.dia.es/medias/productimages/he2/ha4/11069566189598.jpg", 
                    precio: "4,49€"
                },
                8: {
                    nombre: "MONSTER bebida energética green lata 50 cl", 
                    url: "https://s1.dia.es/medias/productimages/h7f/h30/10803178307614.jpg", 
                    precio: "1,59€"
                },
                9: {
                    nombre: "FANTA naranja zero botella 2 lts", 
                    url: "https://s1.dia.es/medias/productimages/h62/hf1/11012070932510.jpg", 
                    precio: "1,59€"
                },
            },
            bodega:{
                0: {
                    nombre: "JACK DANIELS whisky tenessee botella 70 cl", 
                    url: "https://s1.dia.es/medias/hff/h26/8865934966814.jpg", 
                    precio: "21,69€"
                },
                1: {
                    nombre: "BACARDI ron blanco superior botella 70 cl", 
                    url: "https://s2.dia.es/medias/productimages/h73/h6b/10971763441694.jpg", 
                    precio: "12,59€"
                },
                2: {
                    nombre: "TANQUERAY ginebra london dry botella 70 cl", 
                    url: "https://s0.dia.es/medias/h29/h17/10847120719902.jpg", 
                    precio: "13,59€"
                },
                3: {
                    nombre: "EL COTO vino tinto crianza DO Rioja botella 75 cl", 
                    url: "https://s1.dia.es/medias/he1/h0b/10659128705054.jpg", 
                    precio: "6,15€"
                },
                4: {
                    nombre: "BOMBAY Original ginebra london dry botella 70 cl", 
                    url: "https://s3.dia.es/medias/productimages/h00/h52/10971765735454.jpg", 
                    precio: "12,49€"
                },
                5: {
                    nombre: "PASSPORT whisky botella 70 cl", 
                    url: "https://s0.dia.es/medias/h44/h98/10660203298846.jpg", 
                    precio: "9,99€"
                },
                6: {
                    nombre: "BAJOZ vino tinto DO Toro botella 75 cl", 
                    url: "https://s1.dia.es/medias/productimages/hfc/hd5/10996233273374.jpg", 
                    precio: "3,99€"
                },
                7: {
                    nombre: "FEDERICO PATERNINA vino tinto 12 meses banda azul DO Rioja botella 75 cl", 
                    url: "https://s0.dia.es/medias/productimages/h1a/h68/10797319290910.jpg", 
                    precio: "5,99€"
                },
                8: {
                    nombre: "GORDONS ginebra botella 1 lt", 
                    url: "https://s2.dia.es/medias/h7a/h08/10847111479326.jpg", 
                    precio: "12,99€"
                },
                9: {
                    nombre: "ALVINI vermouth rosso botella 1 lt", 
                    url: "https://s3.dia.es/medias/productimages/h67/h5e/10945399848990.jpg", 
                    precio: "2,25€"
                },
            },
            congelados:{
                0: {
                    nombre: "HAAGEN DAZS helado dulce de leche tarrina 400 grs", 
                    url: "https://s3.dia.es/medias/h31/h1b/10467447963678.jpg", 
                    precio: "6,49€"
                },
                1: {
                    nombre: "OREO helado bombón caja 4 uds 260 grs", 
                    url: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202202/14/00118953905538____5__600x600.jpg", 
                    precio: "4,39€"
                },
                2: {
                    nombre: "MILKA helado cono chocolate y vainilla caja 4 uds 270 grs", 
                    url: "https://s3.dia.es/medias/h69/hf3/10660066787358.jpg", 
                    precio: "4,39€"
                },
                3: {
                    nombre: "McCain patatas fritas forno julienne bolsa 600 grs", 
                    url: "https://s1.dia.es/medias/h75/h57/10867351191582.jpg", 
                    precio: "3,09€"
                },
                4: {
                    nombre: "DIA VEGECAMPO menestra de verduras bolsa 1 kg", 
                    url: "https://s2.dia.es/medias/productimages/h51/h86/10976954679326.jpg", 
                    precio: "1,19€"
                },
                5: {
                    nombre: "NORTINDAL pack tinta de calamar 4 unidades 4 gr", 
                    url: "https://s2.dia.es/medias/he5/hcd/10324977057822.jpg", 
                    precio: "0,75€"
                },
                6: {
                    nombre: "BUITONI Forno di pietra pizza jamón y queso caja 360 grs", 
                    url: "https://s3.dia.es/medias/productimages/h97/h44/10874237452318.jpg", 
                    precio: "3,59€"
                },
                7: {
                    nombre: "DR OETKER ristorante pizza atún caja 355 grs", 
                    url: "https://s3.dia.es/medias/productimages/hcc/h34/11093296414750.jpg", 
                    precio: "3,59€"
                },
                8: {
                    nombre: "PESCANOVA calamar limpio envase 400 grs", 
                    url: "https://s2.dia.es/medias/productimages/hc3/h91/10681534545950.jpg", 
                    precio: "5,55€"
                },
                9: {
                    nombre: "MARI MARINERA gamba pelada grande bolsa 400 grs", 
                    url: "https://s2.dia.es/medias/productimages/h89/h2a/10807427399710.jpg", 
                    precio: "6,25€"
                },
            },
            refrigerados:{
                0: {
                    nombre: "Pudding de chocolate con alto contenido en proteinas y bajo en grasas YOPRO de Danone 180 g.", 
                    url: "https://www.alcampo.es/media/hac/h28/11522987622430.jpg", 
                    precio: "1,59€"
                },
                1: {
                    nombre: "Natillas de vainilla elaboradas sin gluten DANET de Danone 8 x 120 grs", 
                    url: "https://www.alcampo.es/media/hf6/h8a/9317474041886.jpg", 
                    precio: "2,99€"
                },
                2: {
                    nombre: "Kefir natural de leche de vaca de pasto EL PASTORET 500 g.", 
                    url: "https://www.alcampo.es/media/h78/h6f/9471120310302.jpg", 
                    precio: "1,68€"
                },
                3: {
                    nombre: "Flan de huevo receta tradicional, elaborado al baño maria con leche recogida diariamente DHUL 4 x 110 grs", 
                    url: "https://www.alcampo.es/media/had/h73/11385326370846.jpg", 
                    precio: "1,95€"
                },
                4: {
                    nombre: "Postre lácteo (delicias) de trufa LA LECHERA de Nestlé 2 x 125 grs", 
                    url: "https://www.alcampo.es/media/h45/h9c/10032258875422.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "Mousse de yogur natural azucarado, elaborada sin gluten DANONE 4 x 65 grs", 
                    url: "https://www.alcampo.es/media/h3e/h6b/11434522607646.jpg", 
                    precio: "2,19€"
                },
                6: {
                    nombre: "Tarrina de mantequilla sin sal CENTRAL LECHERA ASTURIANA 250 grs", 
                    url: "https://www.alcampo.es/media/h55/hbd/9280767852574.jpg", 
                    precio: "2,42€"
                },
                7: {
                    nombre: "Margarina 3/4 con sal y sin aceite de Palma TULIPÁN 450 g.", 
                    url: "https://www.alcampo.es/media/h3d/hc2/11448737398814.jpg", 
                    precio: "2,54€"
                },
                8: {
                    nombre: "Nata líquida (18 % de materia grasa) para cocinar PASCUAL 200 ml.", 
                    url: "https://www.alcampo.es/media/h44/hb3/10493030858782.jpg", 
                    precio: "1,28€"
                },
                9: {
                    nombre: "Nata montada en spray CENTRAL LECHERA ASTURIANA 250 grs", 
                    url: "https://www.alcampo.es/media/he8/hb8/8927298289694.jpg", 
                    precio: "1,98€"
                },
            },
            carniceria:{
                0: {
                    nombre: "Entrecot de vacuno (peso aprox. 330 grs)", 
                    url: "https://s2.dia.es/medias/productimages/hcf/h55/10779310227486.jpg", 
                    precio: "6,93€"
                },
                1: {
                    nombre: "pechugas enteras de pollo bandeja (peso aprox. 880 grs)", 
                    url: "https://s0.dia.es/medias/h0d/h2a/10594922561566.jpg", 
                    precio: "6,29€"
                },
                2: {
                    nombre: "preparado de carne picada de vacuno bandeja 500 grs", 
                    url: "https://s3.dia.es/medias/productimages/hcb/h11/10704616456222.jpg", 
                    precio: "3,99€"
                },
                3: {
                    nombre: "SERRANO longaniza de pavo y pollo 320 grs", 
                    url: "https://s2.dia.es/medias/productimages/hcf/hff/10676999553054.jpg", 
                    precio: "1,99€"
                },
                4: {
                    nombre: "chistorra pieza 220 grs", 
                    url: "https://s0.dia.es/medias/ha0/hdf/8822466969630.jpg", 
                    precio: "1,25€"
                },
            },
            charcuteria:{
                0: {
                    nombre: "PHILADELPHIA queso para untar original tarrina 250 grs", 
                    url: "https://s3.dia.es/medias/productimages/ha1/h08/11100149448734.jpg", 
                    precio: "2,05€"
                },
                1: {
                    nombre: "EL CASERIO queso fundido burger con cheddar en lonchas paquete 185 grs", 
                    url: "https://s0.dia.es/medias/productimages/h8e/h13/11098841120798.jpg", 
                    precio: "1,69€"
                },
                2: {
                    nombre: "SÁNCHEZ ALCARAZ jamón de cebo Ibérico 50% pieza (peso aprox. 8 Kgs)", 
                    url: "https://s3.dia.es/medias/productimages/hd3/he7/11097384484894.jpg", 
                    precio: "125€"
                },
                3: {
                    nombre: "ARGAL Bonnatur jamón cocido en finas lonchas sobre 140 grs", 
                    url: "https://s1.dia.es/medias/productimages/h81/h36/10676792197150.jpg", 
                    precio: "2,29€"
                },
                4: {
                    nombre: "ELPOZO Selección jamón curado en lonchas sobre 115 gr", 
                    url: "https://s2.dia.es/medias/productimages/hee/hed/11078460801054.jpg", 
                    precio: "1,99€"
                },
            },
            pescaderia:{
                0: {
                    nombre: "LA GULA DEL NORTE con gambas al ajillo envase 110 grs", 
                    url: "https://s1.dia.es/medias/productimages/h75/h2e/10842923106334.jpg", 
                    precio: "3,19€"
                },
                1: {
                    nombre: "GALLINA BLANCA caldo para paella de marisco envase 1 lt", 
                    url: "https://s3.dia.es/medias/hed/h7e/10594445819934.jpg", 
                    precio: "2,95€"
                },
                2: {
                    nombre: "MARI MARINERA palitos de surimi refrigeradas MSC paquete 300 grs", 
                    url: "https://s0.dia.es/medias/h50/h4a/10521864077342.jpg", 
                    precio: "1,75€"
                },
                3: {
                    nombre: "EMBUMAR rodajas de mar selectas envase 200 grs", 
                    url: "https://s2.dia.es/medias/productimages/hb5/h6a/11100151742494.jpg", 
                    precio: "4,39€"
                },
                4: {
                    nombre: "AGUINAMAR mejillones cocidos envasado al vació 1 Kg", 
                    url: "https://s1.dia.es/medias/productimages/h86/hd6/10777973030942.jpg", 
                    precio: "4,89€"
                },
            },
            frutas_y_verduras:{
                0: {
                    nombre: "Aguacate bio bandeja 400 grs", 
                    url: "https://s3.dia.es/medias/hbc/h23/9583742222366.jpg", 
                    precio: "2,89€"
                },
                1: {
                    nombre: "Kiwi bandeja 700 grs", 
                    url: "https://s2.dia.es/medias/productimages/hb7/h9e/10927281143838.jpg", 
                    precio: "2,15€"
                },
                2: {
                    nombre: "Manzana Yello bandeja 700 grs", 
                    url: "https://s1.dia.es/medias/productimages/h52/had/11007157796894.jpg", 
                    precio: "2,59€"
                },
                3: {
                    nombre: "GENUINE COCONUT Coco troceado BIO bolsa 56 grs", 
                    url: "https://s2.dia.es/medias/productimages/h60/haf/11090925584414.jpg", 
                    precio: "0,99€"
                },
                4: {
                    nombre: "Banana bio bolsa (1.2 Kg aprox.)", 
                    url: "https://s0.dia.es/medias/productimages/h72/h41/10806535192606.jpg", 
                    precio: "2,39€"
                },
                5: {
                    nombre: "Ajo BIO malla 200 grs", 
                    url: "https://s3.dia.es/medias/productimages/h6e/h6d/11016736571422.jpg", 
                    precio: "1,49€"
                },
                6: {
                    nombre: "Cilantro 20 grs", 
                    url: "https://s1.dia.es/medias/hfc/h7d/9662449287198.jpg", 
                    precio: "1,35€"
                },
                7: {
                    nombre: "Jengibre bandeja 200 grs", 
                    url: "https://s2.dia.es/medias/productimages/ha8/h54/10943702007838.jpg", 
                    precio: "1,39€"
                },
                8: {
                    nombre: "Champiñón laminado bandeja 250 grs", 
                    url: "https://s1.dia.es/medias/hee/hc1/8833925971998.jpg", 
                    precio: "1,35€"
                },
                9: {
                    nombre: "VEGECAMPO lechuga Iceberg lavada bolsa 250 grs", 
                    url: "https://s2.dia.es/medias/productimages/hfd/h7b/10987955683358.jpg", 
                    precio: "0,85€"
                },
            },
        },
    },
    {
        supermercado : "mercadona",
        categorias:{
            platos_preparados:{
                0:{
                    nombre:"ensalada veggie tarrina 200grs",
                    url:"https://s3.dia.es/medias/productimages/hab/hed/10895682732062.jpg",
                    precio:"1,75€"
                },
                1:{
                    nombre:"ensalada thai tarrina 200grs",
                    url:"https://s0.dia.es/medias/productimages/h36/h5e/10895673229342.jpg",
                    precio:"1,75€"
                },
                2: {
                    nombre: "pizza jamón y queso envase 405 grs", 
                    url: "https://s2.dia.es/medias/productimages/h0c/hea/10870041968670.jpg", 
                    precio: "2,89€"
                },
                3: {
                    nombre: "pizza de pollo envase 410 grs", 
                    url: "https://s2.dia.es/medias/productimages/hd9/h5f/10870047604766.jpg", 
                    precio: "2,89€"
                },
                4: {
                    nombre: "pizza atún y bacon envase 405 grs", 
                    url: "https://s2.dia.es/medias/productimages/hee/h98/10870043344926.jpg",
                    precio: "2,89€"
                },
                5: {
                    nombre: "tortilla de patatas fresca sin cebolla envase 600 grs",
                    url: "https://s3.dia.es/medias/productimages/h85/h1a/11060759986206.jpg",
                    precio: "2,35€"
                },
                6: {
                    nombre: "tortilla de patatas fresca con cebolla envase 600 grs",
                    url: "https://s1.dia.es/medias/productimages/h75/h49/11060760313886.jpg",
                    precio: "2,35€"
                },
                7: {
                    nombre: "tortilla de patatas fresca con chorizo envase 600 grs",
                    url: "https://s1.dia.es/medias/productimages/h8c/h0b/10952749776926.jpg",
                    precio: "2,35€"
                },
                8: {
                    nombre: "ensalada César tarrina 210 grs", 
                    url: "https://s3.dia.es/medias/productimages/h2c/h87/10987954044958.jpg", 
                    precio: "2,19€"
                },
                9: {
                    nombre: "croquetas de jamón bandeja 162 gr", 
                    url: "https://s0.dia.es/medias/productimages/he3/h20/10976989872158.jpg", 
                    precio: "2,15€"
                }
            },
            despensa:{
                0: {
                    nombre: "arroz redondo paquete 1 Kg", 
                    url: "https://s0.dia.es/medias/productimages/hb8/h42/10676834861086.jpg", 
                    precio: "1,65€"
                },
                1: {
                    nombre: "espaguetis paquete 1 Kg", 
                    url: "https://s0.dia.es/medias/productimages/h6e/h6e/10712855052318.jpg", 
                    precio: "1,25€"
                },
                2: {
                    nombre: "pasta fresca con jamón ibérico bolsa 250 grs", 
                    url: "https://s1.dia.es/medias/productimages/h99/hfb/10886789726238.jpg", 
                    precio: "2,97€"
                },
                3: {
                    nombre: "fideo cabellín paquete 500 grs", 
                    url: "https://s0.dia.es/medias/productimages/h41/hb5/10797284687902.jpg", 
                    precio: "0,87€"
                },
                4: {
                    nombre: "cereales corn flakes caja 500 grs", 
                    url: "https://s2.dia.es/medias/productimages/h10/h6d/11076215570462.jpg", 
                    precio: "2,70€"
                },
                5: {
                    nombre: "leche entera envase 1 lt PACK 6", 
                    url: "https://s1.dia.es/medias/productimages/h1e/hda/10717082779678.jpg", 
                    precio: "4,50€"
                },
                6: {
                    nombre: "cocktail frutos secos bolsa 500 grs", 
                    url: "https://s2.dia.es/medias/hbf/h18/9847302062110.jpg", 
                    precio: "2,05€"
                },
                7: {
                    nombre: "aceite de oliva extra virgen botella 750 ml", 
                    url: "https://s3.dia.es/medias/productimages/h1d/h15/11037844209694.jpg", 
                    precio: "5,75€"
                },
                8: {
                    nombre: "ajo en polvo frasco 65 grs", 
                    url: "https://s2.dia.es/medias/he2/hfc/8859405123614.jpg", 
                    precio: "0,69€"
                },
                9: {
                    nombre: "agua mineral natural botella 1.5 lt PACK 6", 
                    url: "https://s1.dia.es/medias/productimages/hf5/he5/11033721405470.jpg", 
                    precio: "4,14€"
                },
                10: {
                    nombre: "café molido 100% Colombia paquete 250 grs", 
                    url: "https://s0.dia.es/medias/productimages/hf0/h66/10837617213470.jpg", 
                    precio: "3,25€"
                },
                11: {
                    nombre: "tomate frito envase 350 grs", 
                    url: "https://s3.dia.es/medias/h4e/hcf/11023246065694.jpg", 
                    precio: "0,85€"
                },
                12: {
                    nombre: "caldo de pollo estuche 24 pastillas", 
                    url: "https://s1.dia.es/medias/h71/h15/9334522839070.jpg", 
                    precio: "0,97€"
                },
                13: {
                    nombre: "pan de molde formato familiar bolsa 700 grs", 
                    url: "https://s0.dia.es/medias/productimages/hab/h29/10786470297630.jpg", 
                    precio: "2,49€"
                },
                14: {
                    nombre: "salsa de soja botella 150 ml", 
                    url: "https://s0.dia.es/medias/productimages/h93/h6c/11094508371998.jpg", 
                    precio: "1,99€"
                },
            },
            mascotas:{
                0: {
                    nombre: "alimento para perros mini bolsa 1,5 kg", 
                    url: "https://s3.dia.es/medias/h51/h8f/10661338054686.jpg", 
                    precio: "6,39€"
                },
                1: {
                    nombre: "alimento para gatos mix buey bolsa 1,5 kg", 
                    url: "https://s2.dia.es/medias/hee/hbe/10661309218846.jpg", 
                    precio: "4,65€"
                },
                2: {
                    nombre: "alimento para perros receta tradicional bolsa 4 kg", 
                    url: "https://s3.dia.es/medias/h5f/h2f/10661355225118.jpg", 
                    precio: "6,79€"
                },
                3: {
                    nombre: "detergente para ropa y cama de mascotas botella 1 lt", 
                    url: "https://s1.dia.es/medias/heb/h68/9561295257630.jpg", 
                    precio: "5,15€"
                },
                4: {
                    nombre: "barritas con frutas para canarios bolsa 70 grs", 
                    url: "https://s2.dia.es/medias/ha5/h3e/8846782529566.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "One alimento para gatos junior bolsa 450 grs", 
                    url: "https://s2.dia.es/medias/h48/h0a/10953864413214.jpg", 
                    precio: "2,79€"
                },
                6: {
                    nombre: "cepillo raqueta caucho 1 ud", 
                    url: "https://s3.dia.es/medias/h7a/hfd/8868541169694.jpg", 
                    precio: "1,99€"
                },
                7: {
                    nombre: "pelota para perros 1 ud", 
                    url: "https://s0.dia.es/medias/h2d/h26/8872827650078.jpg", 
                    precio: "3,85€"
                },
                8: {
                    nombre: "champú para perros pelo negro bote 300 ml", 
                    url: "https://s0.dia.es/medias/h3f/h83/9390412464158.jpg", 
                    precio: "5,29€"
                },
                9: {
                    nombre: "agua de colonia fresca para perros spray 125 ml", 
                    url: "https://s2.dia.es/medias/h27/h81/9390410498078.jpg",
                    precio: "4,75€"
                },
            },
            bebe:{
                0: {
                    nombre: "champú infantil clásico bote 750 ml", 
                    url: "https://s1.dia.es/medias/h69/h99/9158125191198.jpg", 
                    precio: "2,39€"
                },
                1: {
                    nombre: "toallitas para bebés envase 80 uds", 
                    url: "https://s2.dia.es/medias/productimages/h28/h15/10954616012830.jpg", 
                    precio: "1,09€"
                },
                2: {
                    nombre: "crema protectora de pañal tubo 100 ml", 
                    url: "https://s3.dia.es/medias/productimages/h56/ha1/10939360477214.jpg", 
                    precio: "3,69€"
                },
                3: {
                    nombre: "jabon liquido infantil lavanda botella 750ml", 
                    url: "https://s1.dia.es/medias/hc1/hb0/9158100025374.jpg", 
                    precio: "1,99€"
                },
                4: {
                    nombre: "colonia infantil botella 750 ml", 
                    url: "https://s3.dia.es/medias/h07/h95/8958623023134.jpg", 
                    precio: "1,79€"
                },
                5: {
                    nombre: "leche infantil 3 bote 800 grs", 
                    url: "https://s2.dia.es/medias/productimages/h4f/h7b/10988153503774.jpg", 
                    precio: "14,99€"
                },
                6: {"nombre": "calzoncillos para niños absorbentes de 4 a 7 años paquete 10 uds", 
                    url: "https://s0.dia.es/medias/productimages/hdc/h35/10782312562718.jpg", 
                    precio: "14,49€"
                },
                7: {
                    nombre: "frutas variadas tarrito 2 x200 gr", 
                    url: "https://s3.dia.es/medias/hfa/h3c/8862312693790.jpg", 
                    precio: "1,77€"
                },
                8: {
                    nombre: "esponja especial de baño para bebé bolsa 1 ud", 
                    url: "https://s1.dia.es/medias/hce/h0a/8856386273310.jpg", 
                    precio: "4,45€"
                },
                9: {
                    nombre: "Baby talco dulces sueños para bebés bote 200 grs", 
                    url: "https://s0.dia.es/medias/productimages/h29/h59/10939392000030.jpg", 
                    precio: "3,05€"
                },
            },
            cuidado_para_el_hogar:{
                0: {
                    nombre: "ambientador neutralizador aroma lavanda spray 300 ml", 
                    url: "https://s2.dia.es/medias/hfb/h3f/9709996408862.jpg", 
                    precio: "1,15€"
                },
                1: {
                    nombre: "gel limpiador wc 3 en 1 océano botella 750 ml", 
                    url: "https://s0.dia.es/medias/h88/hc6/11030574792734.jpg", 
                    precio: "2,39€"
                },
                2: {
                    nombre: "palo rojo universal 1 ud", 
                    url: "https://s1.dia.es/medias/productimages/he7/h26/10844406022174.jpg", 
                    precio: "3,95€"
                },
                3: {
                    nombre: "estropajo salvauñas fibra verde paquete 4 uds", 
                    url: "https://s2.dia.es/medias/h01/haf/9354601299998.jpg", 
                    precio: "0,97€"
                },
                4: {
                    nombre: "ambientador eléctrico aroma aire fresco recambio 1 ud", 
                    url: "https://s2.dia.es/medias/productimages/h92/h71/10980041392158.jpg", 
                    precio: "3,79€"
                },
                5: {
                    nombre: "fregona hilo microfibras especial para suelos delicados bolsa 1 ud", 
                    url: "https://s3.dia.es/medias/h92/h7c/8872695398430.jpg", 
                    precio: "1,59€"
                },
                6: {
                    nombre: "descalcificador de lavadora en pastillas caja 15 ud", 
                    url: "https://s0.dia.es/medias/productimages/hb2/hba/10836376289310.jpg", 
                    precio: "8,49€"
                },
                7: {
                    nombre: "bayeta amarilla super absorbente y extra suave bolsa 3 uds", 
                    url: "https://s0.dia.es/medias/productimages/hf0/hfb/10949995069470.jpg", 
                    precio: "2,69€"
                },
                8: {
                    nombre: "cepillo antichoque de escoba 3 en 1", 
                    url: "https://s0.dia.es/medias/productimages/hfd/he3/11097403490334.jpg", 
                    precio: "4,65€"
                },
                9: {
                    nombre: "tijeras multiusos S/M 1 ud", 
                    url: "https://s1.dia.es/medias/h15/ha2/8959536300062.jpg", 
                    precio: "3,29€"
                },
            },
            cuidado_personal:{
                0: {
                    nombre: "enjuague bucal zero 500 ml", 
                    url: "https://s2.dia.es/medias/productimages/h74/hdc/10995930398750.jpg", 
                    precio: "5,49€"
                },
                1: {
                    nombre: "compresa super con alas bolsa 12 uds", 
                    url: "https://s3.dia.es/medias/productimages/h9b/he7/10988073418782.jpg", 
                    precio: "2,89€"
                },
                2: {
                    nombre: "tinte Negro Azulado Nº 1,1 caja 1 ud", 
                    url: "https://s2.dia.es/medias/productimages/h5f/hd4/10684455485470.jpg", 
                    precio: "4,59€"
                },
                3: {
                    nombre: "Fresh step desodorante para pies spray 150 ml", 
                    url: "https://s2.dia.es/medias/hcf/he8/9639159300126.jpg", 
                    precio: "5,50€"
                },
                4: {
                    nombre: "gel fijador efecto cemento tarro 300 ml", 
                    url: "https://s3.dia.es/medias/ha3/haf/9561293946910.jpg", 
                    precio: "3,79€"
                },
                5: {
                    nombre: "cepillo dental professional medio blíster 1 ud", 
                    url: "https://s3.dia.es/medias/h42/h43/10998992240670.jpg", 
                    precio: "2,45€"
                },
                6: {
                    nombre: "hojas de afeitar classic blíster 5 uds", 
                    url: "https://s1.dia.es/medias/h58/hd7/8963438837790.jpg", 
                    precio: "2,79€"
                },
                7: {
                    nombre: "desodorante apollo spray 150 ml", 
                    url: "https://s0.dia.es/medias/hb3/h12/10465571536926.jpg", 
                    precio: "3,99€"
                },
                8: {
                    nombre: "jabón de manos pura y sensitiva pastilla 100 grs", 
                    url: "https://s1.dia.es/medias/h57/he9/10770326847518.jpg", 
                    precio: "1,49€"
                },
                9: {
                    nombre: "cepillo dental eléctrico floss tip 360º blíster 1 uds", 
                    url: "https://s2.dia.es/medias/productimages/hf7/hcc/11053856489502.jpg", 
                    precio: "9,99€"
                },
            },
            bebidas:{
                0: {
                    nombre: "cerveza clásica lata 33 cl", 
                    url: "https://s2.dia.es/medias/hed/h6b/11078438518814.jpg", 
                    precio: "0,50€"
                },
                1: {
                    nombre: "cerveza lata 50 cl", 
                    url: "https://s3.dia.es/medias/h5f/ha9/9626455638046.jpg", 
                    precio: "0,99€"
                },
                2: {
                    nombre: "bebida energética lata 25 cl", 
                    url: "https://s1.dia.es/medias/h59/h22/10908046262302.jpg", 
                    precio: "0,99€"
                },
                3: {
                    nombre: "limón zero botella 2 lts", 
                    url: "https://s0.dia.es/medias/productimages/h4a/hce/11076053041182.jpg", 
                    precio: "1,59€"
                },
                4: {
                    nombre: "sprite botella 2 lts", 
                    url: "https://s0.dia.es/medias/hd2/hc6/10742032728094.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "COCA COLA zero botella 2 lts", 
                    url: "https://s0.dia.es/medias/hf2/h42/11075969744926.jpg", 
                    precio: "1,84€"
                },
                6: {
                    nombre: "sunny delight sabor florida botella 310 ml", 
                    url: "https://s3.dia.es/medias/productimages/h34/ha7/10742378332190.jpg", 
                    precio: "0,89€"
                },
                7: {
                    nombre: "BUDWEISER cerveza pack 6 botellas 25 cl", 
                    url: "https://s2.dia.es/medias/productimages/he2/ha4/11069566189598.jpg", 
                    precio: "4,49€"
                },
                8: {
                    nombre: "MONSTER bebida energética green lata 50 cl", 
                    url: "https://s1.dia.es/medias/productimages/h7f/h30/10803178307614.jpg", 
                    precio: "1,59€"
                },
                9: {
                    nombre: "FANTA naranja zero botella 2 lts", 
                    url: "https://s1.dia.es/medias/productimages/h62/hf1/11012070932510.jpg", 
                    precio: "1,59€"
                },
            },
            bodega:{
                0: {
                    nombre: "JACK DANIELS whisky tenessee botella 70 cl", 
                    url: "https://s1.dia.es/medias/hff/h26/8865934966814.jpg", 
                    precio: "21,69€"
                },
                1: {
                    nombre: "BACARDI ron blanco superior botella 70 cl", 
                    url: "https://s2.dia.es/medias/productimages/h73/h6b/10971763441694.jpg", 
                    precio: "12,59€"
                },
                2: {
                    nombre: "TANQUERAY ginebra london dry botella 70 cl", 
                    url: "https://s0.dia.es/medias/h29/h17/10847120719902.jpg", 
                    precio: "13,59€"
                },
                3: {
                    nombre: "EL COTO vino tinto crianza DO Rioja botella 75 cl", 
                    url: "https://s1.dia.es/medias/he1/h0b/10659128705054.jpg", 
                    precio: "6,15€"
                },
                4: {
                    nombre: "BOMBAY Original ginebra london dry botella 70 cl", 
                    url: "https://s3.dia.es/medias/productimages/h00/h52/10971765735454.jpg", 
                    precio: "12,49€"
                },
                5: {
                    nombre: "PASSPORT whisky botella 70 cl", 
                    url: "https://s0.dia.es/medias/h44/h98/10660203298846.jpg", 
                    precio: "9,99€"
                },
                6: {
                    nombre: "BAJOZ vino tinto DO Toro botella 75 cl", 
                    url: "https://s1.dia.es/medias/productimages/hfc/hd5/10996233273374.jpg", 
                    precio: "3,99€"
                },
                7: {
                    nombre: "FEDERICO PATERNINA vino tinto 12 meses banda azul DO Rioja botella 75 cl", 
                    url: "https://s0.dia.es/medias/productimages/h1a/h68/10797319290910.jpg", 
                    precio: "5,99€"
                },
                8: {
                    nombre: "GORDONS ginebra botella 1 lt", 
                    url: "https://s2.dia.es/medias/h7a/h08/10847111479326.jpg", 
                    precio: "12,99€"
                },
                9: {
                    nombre: "ALVINI vermouth rosso botella 1 lt", 
                    url: "https://s3.dia.es/medias/productimages/h67/h5e/10945399848990.jpg", 
                    precio: "2,25€"
                },
            },
            congelados:{
                0: {
                    nombre: "HAAGEN DAZS helado dulce de leche tarrina 400 grs", 
                    url: "https://s3.dia.es/medias/h31/h1b/10467447963678.jpg", 
                    precio: "6,49€"
                },
                1: {
                    nombre: "OREO helado bombón caja 4 uds 260 grs", 
                    url: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202202/14/00118953905538____5__600x600.jpg", 
                    precio: "4,39€"
                },
                2: {
                    nombre: "MILKA helado cono chocolate y vainilla caja 4 uds 270 grs", 
                    url: "https://s3.dia.es/medias/h69/hf3/10660066787358.jpg", 
                    precio: "4,39€"
                },
                3: {
                    nombre: "McCain patatas fritas forno julienne bolsa 600 grs", 
                    url: "https://s1.dia.es/medias/h75/h57/10867351191582.jpg", 
                    precio: "3,09€"
                },
                4: {
                    nombre: "DIA VEGECAMPO menestra de verduras bolsa 1 kg", 
                    url: "https://s2.dia.es/medias/productimages/h51/h86/10976954679326.jpg", 
                    precio: "1,19€"
                },
                5: {
                    nombre: "NORTINDAL pack tinta de calamar 4 unidades 4 gr", 
                    url: "https://s2.dia.es/medias/he5/hcd/10324977057822.jpg", 
                    precio: "0,75€"
                },
                6: {
                    nombre: "BUITONI Forno di pietra pizza jamón y queso caja 360 grs", 
                    url: "https://s3.dia.es/medias/productimages/h97/h44/10874237452318.jpg", 
                    precio: "3,59€"
                },
                7: {
                    nombre: "DR OETKER ristorante pizza atún caja 355 grs", 
                    url: "https://s3.dia.es/medias/productimages/hcc/h34/11093296414750.jpg", 
                    precio: "3,59€"
                },
                8: {
                    nombre: "PESCANOVA calamar limpio envase 400 grs", 
                    url: "https://s2.dia.es/medias/productimages/hc3/h91/10681534545950.jpg", 
                    precio: "5,55€"
                },
                9: {
                    nombre: "MARI MARINERA gamba pelada grande bolsa 400 grs", 
                    url: "https://s2.dia.es/medias/productimages/h89/h2a/10807427399710.jpg", 
                    precio: "6,25€"
                },
            },
            refrigerados:{
                0: {
                    nombre: "Pudding de chocolate con alto contenido en proteinas y bajo en grasas YOPRO de Danone 180 g.", 
                    url: "https://www.alcampo.es/media/hac/h28/11522987622430.jpg", 
                    precio: "1,59€"
                },
                1: {
                    nombre: "Natillas de vainilla elaboradas sin gluten DANET de Danone 8 x 120 grs", 
                    url: "https://www.alcampo.es/media/hf6/h8a/9317474041886.jpg", 
                    precio: "2,99€"
                },
                2: {
                    nombre: "Kefir natural de leche de vaca de pasto EL PASTORET 500 g.", 
                    url: "https://www.alcampo.es/media/h78/h6f/9471120310302.jpg", 
                    precio: "1,68€"
                },
                3: {
                    nombre: "Flan de huevo receta tradicional, elaborado al baño maria con leche recogida diariamente DHUL 4 x 110 grs", 
                    url: "https://www.alcampo.es/media/had/h73/11385326370846.jpg", 
                    precio: "1,95€"
                },
                4: {
                    nombre: "Postre lácteo (delicias) de trufa LA LECHERA de Nestlé 2 x 125 grs", 
                    url: "https://www.alcampo.es/media/h45/h9c/10032258875422.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "Mousse de yogur natural azucarado, elaborada sin gluten DANONE 4 x 65 grs", 
                    url: "https://www.alcampo.es/media/h3e/h6b/11434522607646.jpg", 
                    precio: "2,19€"
                },
                6: {
                    nombre: "Tarrina de mantequilla sin sal CENTRAL LECHERA ASTURIANA 250 grs", 
                    url: "https://www.alcampo.es/media/h55/hbd/9280767852574.jpg", 
                    precio: "2,42€"
                },
                7: {
                    nombre: "Margarina 3/4 con sal y sin aceite de Palma TULIPÁN 450 g.", 
                    url: "https://www.alcampo.es/media/h3d/hc2/11448737398814.jpg", 
                    precio: "2,54€"
                },
                8: {
                    nombre: "Nata líquida (18 % de materia grasa) para cocinar PASCUAL 200 ml.", 
                    url: "https://www.alcampo.es/media/h44/hb3/10493030858782.jpg", 
                    precio: "1,28€"
                },
                9: {
                    nombre: "Nata montada en spray CENTRAL LECHERA ASTURIANA 250 grs", 
                    url: "https://www.alcampo.es/media/he8/hb8/8927298289694.jpg", 
                    precio: "1,98€"
                },
            },
            carniceria:{
                0: {
                    nombre: "Entrecot de vacuno (peso aprox. 330 grs)", 
                    url: "https://s2.dia.es/medias/productimages/hcf/h55/10779310227486.jpg", 
                    precio: "6,93€"
                },
                1: {
                    nombre: "pechugas enteras de pollo bandeja (peso aprox. 880 grs)", 
                    url: "https://s0.dia.es/medias/h0d/h2a/10594922561566.jpg", 
                    precio: "6,29€"
                },
                2: {
                    nombre: "preparado de carne picada de vacuno bandeja 500 grs", 
                    url: "https://s3.dia.es/medias/productimages/hcb/h11/10704616456222.jpg", 
                    precio: "3,99€"
                },
                3: {
                    nombre: "SERRANO longaniza de pavo y pollo 320 grs", 
                    url: "https://s2.dia.es/medias/productimages/hcf/hff/10676999553054.jpg", 
                    precio: "1,99€"
                },
                4: {
                    nombre: "chistorra pieza 220 grs", 
                    url: "https://s0.dia.es/medias/ha0/hdf/8822466969630.jpg", 
                    precio: "1,25€"
                },
            },
            charcuteria:{
                0: {
                    nombre: "PHILADELPHIA queso para untar original tarrina 250 grs", 
                    url: "https://s3.dia.es/medias/productimages/ha1/h08/11100149448734.jpg", 
                    precio: "2,05€"
                },
                1: {
                    nombre: "EL CASERIO queso fundido burger con cheddar en lonchas paquete 185 grs", 
                    url: "https://s0.dia.es/medias/productimages/h8e/h13/11098841120798.jpg", 
                    precio: "1,69€"
                },
                2: {
                    nombre: "SÁNCHEZ ALCARAZ jamón de cebo Ibérico 50% pieza (peso aprox. 8 Kgs)", 
                    url: "https://s3.dia.es/medias/productimages/hd3/he7/11097384484894.jpg", 
                    precio: "125€"
                },
                3: {
                    nombre: "ARGAL Bonnatur jamón cocido en finas lonchas sobre 140 grs", 
                    url: "https://s1.dia.es/medias/productimages/h81/h36/10676792197150.jpg", 
                    precio: "2,29€"
                },
                4: {
                    nombre: "ELPOZO Selección jamón curado en lonchas sobre 115 gr", 
                    url: "https://s2.dia.es/medias/productimages/hee/hed/11078460801054.jpg", 
                    precio: "1,99€"
                },
            },
            pescaderia:{
                0: {
                    nombre: "LA GULA DEL NORTE con gambas al ajillo envase 110 grs", 
                    url: "https://s1.dia.es/medias/productimages/h75/h2e/10842923106334.jpg", 
                    precio: "3,19€"
                },
                1: {
                    nombre: "GALLINA BLANCA caldo para paella de marisco envase 1 lt", 
                    url: "https://s3.dia.es/medias/hed/h7e/10594445819934.jpg", 
                    precio: "2,95€"
                },
                2: {
                    nombre: "MARI MARINERA palitos de surimi refrigeradas MSC paquete 300 grs", 
                    url: "https://s0.dia.es/medias/h50/h4a/10521864077342.jpg", 
                    precio: "1,75€"
                },
                3: {
                    nombre: "EMBUMAR rodajas de mar selectas envase 200 grs", 
                    url: "https://s2.dia.es/medias/productimages/hb5/h6a/11100151742494.jpg", 
                    precio: "4,39€"
                },
                4: {
                    nombre: "AGUINAMAR mejillones cocidos envasado al vació 1 Kg", 
                    url: "https://s1.dia.es/medias/productimages/h86/hd6/10777973030942.jpg", 
                    precio: "4,89€"
                },
            },
            frutas_y_verduras:{
                0: {
                    nombre: "Aguacate bio bandeja 400 grs", 
                    url: "https://s3.dia.es/medias/hbc/h23/9583742222366.jpg", 
                    precio: "2,89€"
                },
                1: {
                    nombre: "Kiwi bandeja 700 grs", 
                    url: "https://s2.dia.es/medias/productimages/hb7/h9e/10927281143838.jpg", 
                    precio: "2,15€"
                },
                2: {
                    nombre: "Manzana Yello bandeja 700 grs", 
                    url: "https://s1.dia.es/medias/productimages/h52/had/11007157796894.jpg", 
                    precio: "2,59€"
                },
                3: {
                    nombre: "GENUINE COCONUT Coco troceado BIO bolsa 56 grs", 
                    url: "https://s2.dia.es/medias/productimages/h60/haf/11090925584414.jpg", 
                    precio: "0,99€"
                },
                4: {
                    nombre: "Banana bio bolsa (1.2 Kg aprox.)", 
                    url: "https://s0.dia.es/medias/productimages/h72/h41/10806535192606.jpg", 
                    precio: "2,39€"
                },
                5: {
                    nombre: "Ajo BIO malla 200 grs", 
                    url: "https://s3.dia.es/medias/productimages/h6e/h6d/11016736571422.jpg", 
                    precio: "1,49€"
                },
                6: {
                    nombre: "Cilantro 20 grs", 
                    url: "https://s1.dia.es/medias/hfc/h7d/9662449287198.jpg", 
                    precio: "1,35€"
                },
                7: {
                    nombre: "Jengibre bandeja 200 grs", 
                    url: "https://s2.dia.es/medias/productimages/ha8/h54/10943702007838.jpg", 
                    precio: "1,39€"
                },
                8: {
                    nombre: "Champiñón laminado bandeja 250 grs", 
                    url: "https://s1.dia.es/medias/hee/hc1/8833925971998.jpg", 
                    precio: "1,35€"
                },
                9: {
                    nombre: "VEGECAMPO lechuga Iceberg lavada bolsa 250 grs", 
                    url: "https://s2.dia.es/medias/productimages/hfd/h7b/10987955683358.jpg", 
                    precio: "0,85€"
                },
            },
        },
    },
    {
        supermercado : "esclat",
        categorias:{
            platos_preparados:{
                0:{
                    nombre:"ensalada veggie tarrina 200grs",
                    url:"https://s3.dia.es/medias/productimages/hab/hed/10895682732062.jpg",
                    precio:"1,75€"
                },
                1:{
                    nombre:"ensalada thai tarrina 200grs",
                    url:"https://s0.dia.es/medias/productimages/h36/h5e/10895673229342.jpg",
                    precio:"1,75€"
                },
                2: {
                    nombre: "pizza jamón y queso envase 405 grs", 
                    url: "https://s2.dia.es/medias/productimages/h0c/hea/10870041968670.jpg", 
                    precio: "2,89€"
                },
                3: {
                    nombre: "pizza de pollo envase 410 grs", 
                    url: "https://s2.dia.es/medias/productimages/hd9/h5f/10870047604766.jpg", 
                    precio: "2,89€"
                },
                4: {
                    nombre: "pizza atún y bacon envase 405 grs", 
                    url: "https://s2.dia.es/medias/productimages/hee/h98/10870043344926.jpg",
                    precio: "2,89€"
                },
                5: {
                    nombre: "tortilla de patatas fresca sin cebolla envase 600 grs",
                    url: "https://s3.dia.es/medias/productimages/h85/h1a/11060759986206.jpg",
                    precio: "2,35€"
                },
                6: {
                    nombre: "tortilla de patatas fresca con cebolla envase 600 grs",
                    url: "https://s1.dia.es/medias/productimages/h75/h49/11060760313886.jpg",
                    precio: "2,35€"
                },
                7: {
                    nombre: "tortilla de patatas fresca con chorizo envase 600 grs",
                    url: "https://s1.dia.es/medias/productimages/h8c/h0b/10952749776926.jpg",
                    precio: "2,35€"
                },
                8: {
                    nombre: "ensalada César tarrina 210 grs", 
                    url: "https://s3.dia.es/medias/productimages/h2c/h87/10987954044958.jpg", 
                    precio: "2,19€"
                },
                9: {
                    nombre: "croquetas de jamón bandeja 162 gr", 
                    url: "https://s0.dia.es/medias/productimages/he3/h20/10976989872158.jpg", 
                    precio: "2,15€"
                }
            },
            despensa:{
                0: {
                    nombre: "arroz redondo paquete 1 Kg", 
                    url: "https://s0.dia.es/medias/productimages/hb8/h42/10676834861086.jpg", 
                    precio: "1,65€"
                },
                1: {
                    nombre: "espaguetis paquete 1 Kg", 
                    url: "https://s0.dia.es/medias/productimages/h6e/h6e/10712855052318.jpg", 
                    precio: "1,25€"
                },
                2: {
                    nombre: "pasta fresca con jamón ibérico bolsa 250 grs", 
                    url: "https://s1.dia.es/medias/productimages/h99/hfb/10886789726238.jpg", 
                    precio: "2,97€"
                },
                3: {
                    nombre: "fideo cabellín paquete 500 grs", 
                    url: "https://s0.dia.es/medias/productimages/h41/hb5/10797284687902.jpg", 
                    precio: "0,87€"
                },
                4: {
                    nombre: "cereales corn flakes caja 500 grs", 
                    url: "https://s2.dia.es/medias/productimages/h10/h6d/11076215570462.jpg", 
                    precio: "2,70€"
                },
                5: {
                    nombre: "leche entera envase 1 lt PACK 6", 
                    url: "https://s1.dia.es/medias/productimages/h1e/hda/10717082779678.jpg", 
                    precio: "4,50€"
                },
                6: {
                    nombre: "cocktail frutos secos bolsa 500 grs", 
                    url: "https://s2.dia.es/medias/hbf/h18/9847302062110.jpg", 
                    precio: "2,05€"
                },
                7: {
                    nombre: "aceite de oliva extra virgen botella 750 ml", 
                    url: "https://s3.dia.es/medias/productimages/h1d/h15/11037844209694.jpg", 
                    precio: "5,75€"
                },
                8: {
                    nombre: "ajo en polvo frasco 65 grs", 
                    url: "https://s2.dia.es/medias/he2/hfc/8859405123614.jpg", 
                    precio: "0,69€"
                },
                9: {
                    nombre: "agua mineral natural botella 1.5 lt PACK 6", 
                    url: "https://s1.dia.es/medias/productimages/hf5/he5/11033721405470.jpg", 
                    precio: "4,14€"
                },
                10: {
                    nombre: "café molido 100% Colombia paquete 250 grs", 
                    url: "https://s0.dia.es/medias/productimages/hf0/h66/10837617213470.jpg", 
                    precio: "3,25€"
                },
                11: {
                    nombre: "tomate frito envase 350 grs", 
                    url: "https://s3.dia.es/medias/h4e/hcf/11023246065694.jpg", 
                    precio: "0,85€"
                },
                12: {
                    nombre: "caldo de pollo estuche 24 pastillas", 
                    url: "https://s1.dia.es/medias/h71/h15/9334522839070.jpg", 
                    precio: "0,97€"
                },
                13: {
                    nombre: "pan de molde formato familiar bolsa 700 grs", 
                    url: "https://s0.dia.es/medias/productimages/hab/h29/10786470297630.jpg", 
                    precio: "2,49€"
                },
                14: {
                    nombre: "salsa de soja botella 150 ml", 
                    url: "https://s0.dia.es/medias/productimages/h93/h6c/11094508371998.jpg", 
                    precio: "1,99€"
                },
            },
            mascotas:{
                0: {
                    nombre: "alimento para perros mini bolsa 1,5 kg", 
                    url: "https://s3.dia.es/medias/h51/h8f/10661338054686.jpg", 
                    precio: "6,39€"
                },
                1: {
                    nombre: "alimento para gatos mix buey bolsa 1,5 kg", 
                    url: "https://s2.dia.es/medias/hee/hbe/10661309218846.jpg", 
                    precio: "4,65€"
                },
                2: {
                    nombre: "alimento para perros receta tradicional bolsa 4 kg", 
                    url: "https://s3.dia.es/medias/h5f/h2f/10661355225118.jpg", 
                    precio: "6,79€"
                },
                3: {
                    nombre: "detergente para ropa y cama de mascotas botella 1 lt", 
                    url: "https://s1.dia.es/medias/heb/h68/9561295257630.jpg", 
                    precio: "5,15€"
                },
                4: {
                    nombre: "barritas con frutas para canarios bolsa 70 grs", 
                    url: "https://s2.dia.es/medias/ha5/h3e/8846782529566.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "One alimento para gatos junior bolsa 450 grs", 
                    url: "https://s2.dia.es/medias/h48/h0a/10953864413214.jpg", 
                    precio: "2,79€"
                },
                6: {
                    nombre: "cepillo raqueta caucho 1 ud", 
                    url: "https://s3.dia.es/medias/h7a/hfd/8868541169694.jpg", 
                    precio: "1,99€"
                },
                7: {
                    nombre: "pelota para perros 1 ud", 
                    url: "https://s0.dia.es/medias/h2d/h26/8872827650078.jpg", 
                    precio: "3,85€"
                },
                8: {
                    nombre: "champú para perros pelo negro bote 300 ml", 
                    url: "https://s0.dia.es/medias/h3f/h83/9390412464158.jpg", 
                    precio: "5,29€"
                },
                9: {
                    nombre: "agua de colonia fresca para perros spray 125 ml", 
                    url: "https://s2.dia.es/medias/h27/h81/9390410498078.jpg",
                    precio: "4,75€"
                },
            },
            bebe:{
                0: {
                    nombre: "champú infantil clásico bote 750 ml", 
                    url: "https://s1.dia.es/medias/h69/h99/9158125191198.jpg", 
                    precio: "2,39€"
                },
                1: {
                    nombre: "toallitas para bebés envase 80 uds", 
                    url: "https://s2.dia.es/medias/productimages/h28/h15/10954616012830.jpg", 
                    precio: "1,09€"
                },
                2: {
                    nombre: "crema protectora de pañal tubo 100 ml", 
                    url: "https://s3.dia.es/medias/productimages/h56/ha1/10939360477214.jpg", 
                    precio: "3,69€"
                },
                3: {
                    nombre: "jabon liquido infantil lavanda botella 750ml", 
                    url: "https://s1.dia.es/medias/hc1/hb0/9158100025374.jpg", 
                    precio: "1,99€"
                },
                4: {
                    nombre: "colonia infantil botella 750 ml", 
                    url: "https://s3.dia.es/medias/h07/h95/8958623023134.jpg", 
                    precio: "1,79€"
                },
                5: {
                    nombre: "leche infantil 3 bote 800 grs", 
                    url: "https://s2.dia.es/medias/productimages/h4f/h7b/10988153503774.jpg", 
                    precio: "14,99€"
                },
                6: {"nombre": "calzoncillos para niños absorbentes de 4 a 7 años paquete 10 uds", 
                    url: "https://s0.dia.es/medias/productimages/hdc/h35/10782312562718.jpg", 
                    precio: "14,49€"
                },
                7: {
                    nombre: "frutas variadas tarrito 2 x200 gr", 
                    url: "https://s3.dia.es/medias/hfa/h3c/8862312693790.jpg", 
                    precio: "1,77€"
                },
                8: {
                    nombre: "esponja especial de baño para bebé bolsa 1 ud", 
                    url: "https://s1.dia.es/medias/hce/h0a/8856386273310.jpg", 
                    precio: "4,45€"
                },
                9: {
                    nombre: "Baby talco dulces sueños para bebés bote 200 grs", 
                    url: "https://s0.dia.es/medias/productimages/h29/h59/10939392000030.jpg", 
                    precio: "3,05€"
                },
            },
            cuidado_para_el_hogar:{
                0: {
                    nombre: "ambientador neutralizador aroma lavanda spray 300 ml", 
                    url: "https://s2.dia.es/medias/hfb/h3f/9709996408862.jpg", 
                    precio: "1,15€"
                },
                1: {
                    nombre: "gel limpiador wc 3 en 1 océano botella 750 ml", 
                    url: "https://s0.dia.es/medias/h88/hc6/11030574792734.jpg", 
                    precio: "2,39€"
                },
                2: {
                    nombre: "palo rojo universal 1 ud", 
                    url: "https://s1.dia.es/medias/productimages/he7/h26/10844406022174.jpg", 
                    precio: "3,95€"
                },
                3: {
                    nombre: "estropajo salvauñas fibra verde paquete 4 uds", 
                    url: "https://s2.dia.es/medias/h01/haf/9354601299998.jpg", 
                    precio: "0,97€"
                },
                4: {
                    nombre: "ambientador eléctrico aroma aire fresco recambio 1 ud", 
                    url: "https://s2.dia.es/medias/productimages/h92/h71/10980041392158.jpg", 
                    precio: "3,79€"
                },
                5: {
                    nombre: "fregona hilo microfibras especial para suelos delicados bolsa 1 ud", 
                    url: "https://s3.dia.es/medias/h92/h7c/8872695398430.jpg", 
                    precio: "1,59€"
                },
                6: {
                    nombre: "descalcificador de lavadora en pastillas caja 15 ud", 
                    url: "https://s0.dia.es/medias/productimages/hb2/hba/10836376289310.jpg", 
                    precio: "8,49€"
                },
                7: {
                    nombre: "bayeta amarilla super absorbente y extra suave bolsa 3 uds", 
                    url: "https://s0.dia.es/medias/productimages/hf0/hfb/10949995069470.jpg", 
                    precio: "2,69€"
                },
                8: {
                    nombre: "cepillo antichoque de escoba 3 en 1", 
                    url: "https://s0.dia.es/medias/productimages/hfd/he3/11097403490334.jpg", 
                    precio: "4,65€"
                },
                9: {
                    nombre: "tijeras multiusos S/M 1 ud", 
                    url: "https://s1.dia.es/medias/h15/ha2/8959536300062.jpg", 
                    precio: "3,29€"
                },
            },
            cuidado_personal:{
                0: {
                    nombre: "enjuague bucal zero 500 ml", 
                    url: "https://s2.dia.es/medias/productimages/h74/hdc/10995930398750.jpg", 
                    precio: "5,49€"
                },
                1: {
                    nombre: "compresa super con alas bolsa 12 uds", 
                    url: "https://s3.dia.es/medias/productimages/h9b/he7/10988073418782.jpg", 
                    precio: "2,89€"
                },
                2: {
                    nombre: "tinte Negro Azulado Nº 1,1 caja 1 ud", 
                    url: "https://s2.dia.es/medias/productimages/h5f/hd4/10684455485470.jpg", 
                    precio: "4,59€"
                },
                3: {
                    nombre: "Fresh step desodorante para pies spray 150 ml", 
                    url: "https://s2.dia.es/medias/hcf/he8/9639159300126.jpg", 
                    precio: "5,50€"
                },
                4: {
                    nombre: "gel fijador efecto cemento tarro 300 ml", 
                    url: "https://s3.dia.es/medias/ha3/haf/9561293946910.jpg", 
                    precio: "3,79€"
                },
                5: {
                    nombre: "cepillo dental professional medio blíster 1 ud", 
                    url: "https://s3.dia.es/medias/h42/h43/10998992240670.jpg", 
                    precio: "2,45€"
                },
                6: {
                    nombre: "hojas de afeitar classic blíster 5 uds", 
                    url: "https://s1.dia.es/medias/h58/hd7/8963438837790.jpg", 
                    precio: "2,79€"
                },
                7: {
                    nombre: "desodorante apollo spray 150 ml", 
                    url: "https://s0.dia.es/medias/hb3/h12/10465571536926.jpg", 
                    precio: "3,99€"
                },
                8: {
                    nombre: "jabón de manos pura y sensitiva pastilla 100 grs", 
                    url: "https://s1.dia.es/medias/h57/he9/10770326847518.jpg", 
                    precio: "1,49€"
                },
                9: {
                    nombre: "cepillo dental eléctrico floss tip 360º blíster 1 uds", 
                    url: "https://s2.dia.es/medias/productimages/hf7/hcc/11053856489502.jpg", 
                    precio: "9,99€"
                },
            },
            bebidas:{
                0: {
                    nombre: "cerveza clásica lata 33 cl", 
                    url: "https://s2.dia.es/medias/hed/h6b/11078438518814.jpg", 
                    precio: "0,50€"
                },
                1: {
                    nombre: "cerveza lata 50 cl", 
                    url: "https://s3.dia.es/medias/h5f/ha9/9626455638046.jpg", 
                    precio: "0,99€"
                },
                2: {
                    nombre: "bebida energética lata 25 cl", 
                    url: "https://s1.dia.es/medias/h59/h22/10908046262302.jpg", 
                    precio: "0,99€"
                },
                3: {
                    nombre: "limón zero botella 2 lts", 
                    url: "https://s0.dia.es/medias/productimages/h4a/hce/11076053041182.jpg", 
                    precio: "1,59€"
                },
                4: {
                    nombre: "sprite botella 2 lts", 
                    url: "https://s0.dia.es/medias/hd2/hc6/10742032728094.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "COCA COLA zero botella 2 lts", 
                    url: "https://s0.dia.es/medias/hf2/h42/11075969744926.jpg", 
                    precio: "1,84€"
                },
                6: {
                    nombre: "sunny delight sabor florida botella 310 ml", 
                    url: "https://s3.dia.es/medias/productimages/h34/ha7/10742378332190.jpg", 
                    precio: "0,89€"
                },
                7: {
                    nombre: "BUDWEISER cerveza pack 6 botellas 25 cl", 
                    url: "https://s2.dia.es/medias/productimages/he2/ha4/11069566189598.jpg", 
                    precio: "4,49€"
                },
                8: {
                    nombre: "MONSTER bebida energética green lata 50 cl", 
                    url: "https://s1.dia.es/medias/productimages/h7f/h30/10803178307614.jpg", 
                    precio: "1,59€"
                },
                9: {
                    nombre: "FANTA naranja zero botella 2 lts", 
                    url: "https://s1.dia.es/medias/productimages/h62/hf1/11012070932510.jpg", 
                    precio: "1,59€"
                },
            },
            bodega:{
                0: {
                    nombre: "JACK DANIELS whisky tenessee botella 70 cl", 
                    url: "https://s1.dia.es/medias/hff/h26/8865934966814.jpg", 
                    precio: "21,69€"
                },
                1: {
                    nombre: "BACARDI ron blanco superior botella 70 cl", 
                    url: "https://s2.dia.es/medias/productimages/h73/h6b/10971763441694.jpg", 
                    precio: "12,59€"
                },
                2: {
                    nombre: "TANQUERAY ginebra london dry botella 70 cl", 
                    url: "https://s0.dia.es/medias/h29/h17/10847120719902.jpg", 
                    precio: "13,59€"
                },
                3: {
                    nombre: "EL COTO vino tinto crianza DO Rioja botella 75 cl", 
                    url: "https://s1.dia.es/medias/he1/h0b/10659128705054.jpg", 
                    precio: "6,15€"
                },
                4: {
                    nombre: "BOMBAY Original ginebra london dry botella 70 cl", 
                    url: "https://s3.dia.es/medias/productimages/h00/h52/10971765735454.jpg", 
                    precio: "12,49€"
                },
                5: {
                    nombre: "PASSPORT whisky botella 70 cl", 
                    url: "https://s0.dia.es/medias/h44/h98/10660203298846.jpg", 
                    precio: "9,99€"
                },
                6: {
                    nombre: "BAJOZ vino tinto DO Toro botella 75 cl", 
                    url: "https://s1.dia.es/medias/productimages/hfc/hd5/10996233273374.jpg", 
                    precio: "3,99€"
                },
                7: {
                    nombre: "FEDERICO PATERNINA vino tinto 12 meses banda azul DO Rioja botella 75 cl", 
                    url: "https://s0.dia.es/medias/productimages/h1a/h68/10797319290910.jpg", 
                    precio: "5,99€"
                },
                8: {
                    nombre: "GORDONS ginebra botella 1 lt", 
                    url: "https://s2.dia.es/medias/h7a/h08/10847111479326.jpg", 
                    precio: "12,99€"
                },
                9: {
                    nombre: "ALVINI vermouth rosso botella 1 lt", 
                    url: "https://s3.dia.es/medias/productimages/h67/h5e/10945399848990.jpg", 
                    precio: "2,25€"
                },
            },
            congelados:{
                0: {
                    nombre: "HAAGEN DAZS helado dulce de leche tarrina 400 grs", 
                    url: "https://s3.dia.es/medias/h31/h1b/10467447963678.jpg", 
                    precio: "6,49€"
                },
                1: {
                    nombre: "OREO helado bombón caja 4 uds 260 grs", 
                    url: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202202/14/00118953905538____5__600x600.jpg", 
                    precio: "4,39€"
                },
                2: {
                    nombre: "MILKA helado cono chocolate y vainilla caja 4 uds 270 grs", 
                    url: "https://s3.dia.es/medias/h69/hf3/10660066787358.jpg", 
                    precio: "4,39€"
                },
                3: {
                    nombre: "McCain patatas fritas forno julienne bolsa 600 grs", 
                    url: "https://s1.dia.es/medias/h75/h57/10867351191582.jpg", 
                    precio: "3,09€"
                },
                4: {
                    nombre: "DIA VEGECAMPO menestra de verduras bolsa 1 kg", 
                    url: "https://s2.dia.es/medias/productimages/h51/h86/10976954679326.jpg", 
                    precio: "1,19€"
                },
                5: {
                    nombre: "NORTINDAL pack tinta de calamar 4 unidades 4 gr", 
                    url: "https://s2.dia.es/medias/he5/hcd/10324977057822.jpg", 
                    precio: "0,75€"
                },
                6: {
                    nombre: "BUITONI Forno di pietra pizza jamón y queso caja 360 grs", 
                    url: "https://s3.dia.es/medias/productimages/h97/h44/10874237452318.jpg", 
                    precio: "3,59€"
                },
                7: {
                    nombre: "DR OETKER ristorante pizza atún caja 355 grs", 
                    url: "https://s3.dia.es/medias/productimages/hcc/h34/11093296414750.jpg", 
                    precio: "3,59€"
                },
                8: {
                    nombre: "PESCANOVA calamar limpio envase 400 grs", 
                    url: "https://s2.dia.es/medias/productimages/hc3/h91/10681534545950.jpg", 
                    precio: "5,55€"
                },
                9: {
                    nombre: "MARI MARINERA gamba pelada grande bolsa 400 grs", 
                    url: "https://s2.dia.es/medias/productimages/h89/h2a/10807427399710.jpg", 
                    precio: "6,25€"
                },
            },
            refrigerados:{
                0: {
                    nombre: "Pudding de chocolate con alto contenido en proteinas y bajo en grasas YOPRO de Danone 180 g.", 
                    url: "https://www.alcampo.es/media/hac/h28/11522987622430.jpg", 
                    precio: "1,59€"
                },
                1: {
                    nombre: "Natillas de vainilla elaboradas sin gluten DANET de Danone 8 x 120 grs", 
                    url: "https://www.alcampo.es/media/hf6/h8a/9317474041886.jpg", 
                    precio: "2,99€"
                },
                2: {
                    nombre: "Kefir natural de leche de vaca de pasto EL PASTORET 500 g.", 
                    url: "https://www.alcampo.es/media/h78/h6f/9471120310302.jpg", 
                    precio: "1,68€"
                },
                3: {
                    nombre: "Flan de huevo receta tradicional, elaborado al baño maria con leche recogida diariamente DHUL 4 x 110 grs", 
                    url: "https://www.alcampo.es/media/had/h73/11385326370846.jpg", 
                    precio: "1,95€"
                },
                4: {
                    nombre: "Postre lácteo (delicias) de trufa LA LECHERA de Nestlé 2 x 125 grs", 
                    url: "https://www.alcampo.es/media/h45/h9c/10032258875422.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "Mousse de yogur natural azucarado, elaborada sin gluten DANONE 4 x 65 grs", 
                    url: "https://www.alcampo.es/media/h3e/h6b/11434522607646.jpg", 
                    precio: "2,19€"
                },
                6: {
                    nombre: "Tarrina de mantequilla sin sal CENTRAL LECHERA ASTURIANA 250 grs", 
                    url: "https://www.alcampo.es/media/h55/hbd/9280767852574.jpg", 
                    precio: "2,42€"
                },
                7: {
                    nombre: "Margarina 3/4 con sal y sin aceite de Palma TULIPÁN 450 g.", 
                    url: "https://www.alcampo.es/media/h3d/hc2/11448737398814.jpg", 
                    precio: "2,54€"
                },
                8: {
                    nombre: "Nata líquida (18 % de materia grasa) para cocinar PASCUAL 200 ml.", 
                    url: "https://www.alcampo.es/media/h44/hb3/10493030858782.jpg", 
                    precio: "1,28€"
                },
                9: {
                    nombre: "Nata montada en spray CENTRAL LECHERA ASTURIANA 250 grs", 
                    url: "https://www.alcampo.es/media/he8/hb8/8927298289694.jpg", 
                    precio: "1,98€"
                },
            },
            carniceria:{
                0: {
                    nombre: "Entrecot de vacuno (peso aprox. 330 grs)", 
                    url: "https://s2.dia.es/medias/productimages/hcf/h55/10779310227486.jpg", 
                    precio: "6,93€"
                },
                1: {
                    nombre: "pechugas enteras de pollo bandeja (peso aprox. 880 grs)", 
                    url: "https://s0.dia.es/medias/h0d/h2a/10594922561566.jpg", 
                    precio: "6,29€"
                },
                2: {
                    nombre: "preparado de carne picada de vacuno bandeja 500 grs", 
                    url: "https://s3.dia.es/medias/productimages/hcb/h11/10704616456222.jpg", 
                    precio: "3,99€"
                },
                3: {
                    nombre: "SERRANO longaniza de pavo y pollo 320 grs", 
                    url: "https://s2.dia.es/medias/productimages/hcf/hff/10676999553054.jpg", 
                    precio: "1,99€"
                },
                4: {
                    nombre: "chistorra pieza 220 grs", 
                    url: "https://s0.dia.es/medias/ha0/hdf/8822466969630.jpg", 
                    precio: "1,25€"
                },
            },
            charcuteria:{
                0: {
                    nombre: "PHILADELPHIA queso para untar original tarrina 250 grs", 
                    url: "https://s3.dia.es/medias/productimages/ha1/h08/11100149448734.jpg", 
                    precio: "2,05€"
                },
                1: {
                    nombre: "EL CASERIO queso fundido burger con cheddar en lonchas paquete 185 grs", 
                    url: "https://s0.dia.es/medias/productimages/h8e/h13/11098841120798.jpg", 
                    precio: "1,69€"
                },
                2: {
                    nombre: "SÁNCHEZ ALCARAZ jamón de cebo Ibérico 50% pieza (peso aprox. 8 Kgs)", 
                    url: "https://s3.dia.es/medias/productimages/hd3/he7/11097384484894.jpg", 
                    precio: "125€"
                },
                3: {
                    nombre: "ARGAL Bonnatur jamón cocido en finas lonchas sobre 140 grs", 
                    url: "https://s1.dia.es/medias/productimages/h81/h36/10676792197150.jpg", 
                    precio: "2,29€"
                },
                4: {
                    nombre: "ELPOZO Selección jamón curado en lonchas sobre 115 gr", 
                    url: "https://s2.dia.es/medias/productimages/hee/hed/11078460801054.jpg", 
                    precio: "1,99€"
                },
            },
            pescaderia:{
                0: {
                    nombre: "LA GULA DEL NORTE con gambas al ajillo envase 110 grs", 
                    url: "https://s1.dia.es/medias/productimages/h75/h2e/10842923106334.jpg", 
                    precio: "3,19€"
                },
                1: {
                    nombre: "GALLINA BLANCA caldo para paella de marisco envase 1 lt", 
                    url: "https://s3.dia.es/medias/hed/h7e/10594445819934.jpg", 
                    precio: "2,95€"
                },
                2: {
                    nombre: "MARI MARINERA palitos de surimi refrigeradas MSC paquete 300 grs", 
                    url: "https://s0.dia.es/medias/h50/h4a/10521864077342.jpg", 
                    precio: "1,75€"
                },
                3: {
                    nombre: "EMBUMAR rodajas de mar selectas envase 200 grs", 
                    url: "https://s2.dia.es/medias/productimages/hb5/h6a/11100151742494.jpg", 
                    precio: "4,39€"
                },
                4: {
                    nombre: "AGUINAMAR mejillones cocidos envasado al vació 1 Kg", 
                    url: "https://s1.dia.es/medias/productimages/h86/hd6/10777973030942.jpg", 
                    precio: "4,89€"
                },
            },
            frutas_y_verduras:{
                0: {
                    nombre: "Aguacate bio bandeja 400 grs", 
                    url: "https://s3.dia.es/medias/hbc/h23/9583742222366.jpg", 
                    precio: "2,89€"
                },
                1: {
                    nombre: "Kiwi bandeja 700 grs", 
                    url: "https://s2.dia.es/medias/productimages/hb7/h9e/10927281143838.jpg", 
                    precio: "2,15€"
                },
                2: {
                    nombre: "Manzana Yello bandeja 700 grs", 
                    url: "https://s1.dia.es/medias/productimages/h52/had/11007157796894.jpg", 
                    precio: "2,59€"
                },
                3: {
                    nombre: "GENUINE COCONUT Coco troceado BIO bolsa 56 grs", 
                    url: "https://s2.dia.es/medias/productimages/h60/haf/11090925584414.jpg", 
                    precio: "0,99€"
                },
                4: {
                    nombre: "Banana bio bolsa (1.2 Kg aprox.)", 
                    url: "https://s0.dia.es/medias/productimages/h72/h41/10806535192606.jpg", 
                    precio: "2,39€"
                },
                5: {
                    nombre: "Ajo BIO malla 200 grs", 
                    url: "https://s3.dia.es/medias/productimages/h6e/h6d/11016736571422.jpg", 
                    precio: "1,49€"
                },
                6: {
                    nombre: "Cilantro 20 grs", 
                    url: "https://s1.dia.es/medias/hfc/h7d/9662449287198.jpg", 
                    precio: "1,35€"
                },
                7: {
                    nombre: "Jengibre bandeja 200 grs", 
                    url: "https://s2.dia.es/medias/productimages/ha8/h54/10943702007838.jpg", 
                    precio: "1,39€"
                },
                8: {
                    nombre: "Champiñón laminado bandeja 250 grs", 
                    url: "https://s1.dia.es/medias/hee/hc1/8833925971998.jpg", 
                    precio: "1,35€"
                },
                9: {
                    nombre: "VEGECAMPO lechuga Iceberg lavada bolsa 250 grs", 
                    url: "https://s2.dia.es/medias/productimages/hfd/h7b/10987955683358.jpg", 
                    precio: "0,85€"
                },
            },
        },
    },
    {
        supermercado : "hiperCor",
        categorias:{
            platos_preparados:{
                0:{
                    nombre:"ensalada veggie tarrina 200grs",
                    url:"https://s3.dia.es/medias/productimages/hab/hed/10895682732062.jpg",
                    precio:"1,75€"
                },
                1:{
                    nombre:"ensalada thai tarrina 200grs",
                    url:"https://s0.dia.es/medias/productimages/h36/h5e/10895673229342.jpg",
                    precio:"1,75€"
                },
                2: {
                    nombre: "pizza jamón y queso envase 405 grs", 
                    url: "https://s2.dia.es/medias/productimages/h0c/hea/10870041968670.jpg", 
                    precio: "2,89€"
                },
                3: {
                    nombre: "pizza de pollo envase 410 grs", 
                    url: "https://s2.dia.es/medias/productimages/hd9/h5f/10870047604766.jpg", 
                    precio: "2,89€"
                },
                4: {
                    nombre: "pizza atún y bacon envase 405 grs", 
                    url: "https://s2.dia.es/medias/productimages/hee/h98/10870043344926.jpg",
                    precio: "2,89€"
                },
                5: {
                    nombre: "tortilla de patatas fresca sin cebolla envase 600 grs",
                    url: "https://s3.dia.es/medias/productimages/h85/h1a/11060759986206.jpg",
                    precio: "2,35€"
                },
                6: {
                    nombre: "tortilla de patatas fresca con cebolla envase 600 grs",
                    url: "https://s1.dia.es/medias/productimages/h75/h49/11060760313886.jpg",
                    precio: "2,35€"
                },
                7: {
                    nombre: "tortilla de patatas fresca con chorizo envase 600 grs",
                    url: "https://s1.dia.es/medias/productimages/h8c/h0b/10952749776926.jpg",
                    precio: "2,35€"
                },
                8: {
                    nombre: "ensalada César tarrina 210 grs", 
                    url: "https://s3.dia.es/medias/productimages/h2c/h87/10987954044958.jpg", 
                    precio: "2,19€"
                },
                9: {
                    nombre: "croquetas de jamón bandeja 162 gr", 
                    url: "https://s0.dia.es/medias/productimages/he3/h20/10976989872158.jpg", 
                    precio: "2,15€"
                }
            },
            despensa:{
                0: {
                    nombre: "arroz redondo paquete 1 Kg", 
                    url: "https://s0.dia.es/medias/productimages/hb8/h42/10676834861086.jpg", 
                    precio: "1,65€"
                },
                1: {
                    nombre: "espaguetis paquete 1 Kg", 
                    url: "https://s0.dia.es/medias/productimages/h6e/h6e/10712855052318.jpg", 
                    precio: "1,25€"
                },
                2: {
                    nombre: "pasta fresca con jamón ibérico bolsa 250 grs", 
                    url: "https://s1.dia.es/medias/productimages/h99/hfb/10886789726238.jpg", 
                    precio: "2,97€"
                },
                3: {
                    nombre: "fideo cabellín paquete 500 grs", 
                    url: "https://s0.dia.es/medias/productimages/h41/hb5/10797284687902.jpg", 
                    precio: "0,87€"
                },
                4: {
                    nombre: "cereales corn flakes caja 500 grs", 
                    url: "https://s2.dia.es/medias/productimages/h10/h6d/11076215570462.jpg", 
                    precio: "2,70€"
                },
                5: {
                    nombre: "leche entera envase 1 lt PACK 6", 
                    url: "https://s1.dia.es/medias/productimages/h1e/hda/10717082779678.jpg", 
                    precio: "4,50€"
                },
                6: {
                    nombre: "cocktail frutos secos bolsa 500 grs", 
                    url: "https://s2.dia.es/medias/hbf/h18/9847302062110.jpg", 
                    precio: "2,05€"
                },
                7: {
                    nombre: "aceite de oliva extra virgen botella 750 ml", 
                    url: "https://s3.dia.es/medias/productimages/h1d/h15/11037844209694.jpg", 
                    precio: "5,75€"
                },
                8: {
                    nombre: "ajo en polvo frasco 65 grs", 
                    url: "https://s2.dia.es/medias/he2/hfc/8859405123614.jpg", 
                    precio: "0,69€"
                },
                9: {
                    nombre: "agua mineral natural botella 1.5 lt PACK 6", 
                    url: "https://s1.dia.es/medias/productimages/hf5/he5/11033721405470.jpg", 
                    precio: "4,14€"
                },
                10: {
                    nombre: "café molido 100% Colombia paquete 250 grs", 
                    url: "https://s0.dia.es/medias/productimages/hf0/h66/10837617213470.jpg", 
                    precio: "3,25€"
                },
                11: {
                    nombre: "tomate frito envase 350 grs", 
                    url: "https://s3.dia.es/medias/h4e/hcf/11023246065694.jpg", 
                    precio: "0,85€"
                },
                12: {
                    nombre: "caldo de pollo estuche 24 pastillas", 
                    url: "https://s1.dia.es/medias/h71/h15/9334522839070.jpg", 
                    precio: "0,97€"
                },
                13: {
                    nombre: "pan de molde formato familiar bolsa 700 grs", 
                    url: "https://s0.dia.es/medias/productimages/hab/h29/10786470297630.jpg", 
                    precio: "2,49€"
                },
                14: {
                    nombre: "salsa de soja botella 150 ml", 
                    url: "https://s0.dia.es/medias/productimages/h93/h6c/11094508371998.jpg", 
                    precio: "1,99€"
                },
            },
            mascotas:{
                0: {
                    nombre: "alimento para perros mini bolsa 1,5 kg", 
                    url: "https://s3.dia.es/medias/h51/h8f/10661338054686.jpg", 
                    precio: "6,39€"
                },
                1: {
                    nombre: "alimento para gatos mix buey bolsa 1,5 kg", 
                    url: "https://s2.dia.es/medias/hee/hbe/10661309218846.jpg", 
                    precio: "4,65€"
                },
                2: {
                    nombre: "alimento para perros receta tradicional bolsa 4 kg", 
                    url: "https://s3.dia.es/medias/h5f/h2f/10661355225118.jpg", 
                    precio: "6,79€"
                },
                3: {
                    nombre: "detergente para ropa y cama de mascotas botella 1 lt", 
                    url: "https://s1.dia.es/medias/heb/h68/9561295257630.jpg", 
                    precio: "5,15€"
                },
                4: {
                    nombre: "barritas con frutas para canarios bolsa 70 grs", 
                    url: "https://s2.dia.es/medias/ha5/h3e/8846782529566.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "One alimento para gatos junior bolsa 450 grs", 
                    url: "https://s2.dia.es/medias/h48/h0a/10953864413214.jpg", 
                    precio: "2,79€"
                },
                6: {
                    nombre: "cepillo raqueta caucho 1 ud", 
                    url: "https://s3.dia.es/medias/h7a/hfd/8868541169694.jpg", 
                    precio: "1,99€"
                },
                7: {
                    nombre: "pelota para perros 1 ud", 
                    url: "https://s0.dia.es/medias/h2d/h26/8872827650078.jpg", 
                    precio: "3,85€"
                },
                8: {
                    nombre: "champú para perros pelo negro bote 300 ml", 
                    url: "https://s0.dia.es/medias/h3f/h83/9390412464158.jpg", 
                    precio: "5,29€"
                },
                9: {
                    nombre: "agua de colonia fresca para perros spray 125 ml", 
                    url: "https://s2.dia.es/medias/h27/h81/9390410498078.jpg",
                    precio: "4,75€"
                },
            },
            bebe:{
                0: {
                    nombre: "champú infantil clásico bote 750 ml", 
                    url: "https://s1.dia.es/medias/h69/h99/9158125191198.jpg", 
                    precio: "2,39€"
                },
                1: {
                    nombre: "toallitas para bebés envase 80 uds", 
                    url: "https://s2.dia.es/medias/productimages/h28/h15/10954616012830.jpg", 
                    precio: "1,09€"
                },
                2: {
                    nombre: "crema protectora de pañal tubo 100 ml", 
                    url: "https://s3.dia.es/medias/productimages/h56/ha1/10939360477214.jpg", 
                    precio: "3,69€"
                },
                3: {
                    nombre: "jabon liquido infantil lavanda botella 750ml", 
                    url: "https://s1.dia.es/medias/hc1/hb0/9158100025374.jpg", 
                    precio: "1,99€"
                },
                4: {
                    nombre: "colonia infantil botella 750 ml", 
                    url: "https://s3.dia.es/medias/h07/h95/8958623023134.jpg", 
                    precio: "1,79€"
                },
                5: {
                    nombre: "leche infantil 3 bote 800 grs", 
                    url: "https://s2.dia.es/medias/productimages/h4f/h7b/10988153503774.jpg", 
                    precio: "14,99€"
                },
                6: {"nombre": "calzoncillos para niños absorbentes de 4 a 7 años paquete 10 uds", 
                    url: "https://s0.dia.es/medias/productimages/hdc/h35/10782312562718.jpg", 
                    precio: "14,49€"
                },
                7: {
                    nombre: "frutas variadas tarrito 2 x200 gr", 
                    url: "https://s3.dia.es/medias/hfa/h3c/8862312693790.jpg", 
                    precio: "1,77€"
                },
                8: {
                    nombre: "esponja especial de baño para bebé bolsa 1 ud", 
                    url: "https://s1.dia.es/medias/hce/h0a/8856386273310.jpg", 
                    precio: "4,45€"
                },
                9: {
                    nombre: "Baby talco dulces sueños para bebés bote 200 grs", 
                    url: "https://s0.dia.es/medias/productimages/h29/h59/10939392000030.jpg", 
                    precio: "3,05€"
                },
            },
            cuidado_para_el_hogar:{
                0: {
                    nombre: "ambientador neutralizador aroma lavanda spray 300 ml", 
                    url: "https://s2.dia.es/medias/hfb/h3f/9709996408862.jpg", 
                    precio: "1,15€"
                },
                1: {
                    nombre: "gel limpiador wc 3 en 1 océano botella 750 ml", 
                    url: "https://s0.dia.es/medias/h88/hc6/11030574792734.jpg", 
                    precio: "2,39€"
                },
                2: {
                    nombre: "palo rojo universal 1 ud", 
                    url: "https://s1.dia.es/medias/productimages/he7/h26/10844406022174.jpg", 
                    precio: "3,95€"
                },
                3: {
                    nombre: "estropajo salvauñas fibra verde paquete 4 uds", 
                    url: "https://s2.dia.es/medias/h01/haf/9354601299998.jpg", 
                    precio: "0,97€"
                },
                4: {
                    nombre: "ambientador eléctrico aroma aire fresco recambio 1 ud", 
                    url: "https://s2.dia.es/medias/productimages/h92/h71/10980041392158.jpg", 
                    precio: "3,79€"
                },
                5: {
                    nombre: "fregona hilo microfibras especial para suelos delicados bolsa 1 ud", 
                    url: "https://s3.dia.es/medias/h92/h7c/8872695398430.jpg", 
                    precio: "1,59€"
                },
                6: {
                    nombre: "descalcificador de lavadora en pastillas caja 15 ud", 
                    url: "https://s0.dia.es/medias/productimages/hb2/hba/10836376289310.jpg", 
                    precio: "8,49€"
                },
                7: {
                    nombre: "bayeta amarilla super absorbente y extra suave bolsa 3 uds", 
                    url: "https://s0.dia.es/medias/productimages/hf0/hfb/10949995069470.jpg", 
                    precio: "2,69€"
                },
                8: {
                    nombre: "cepillo antichoque de escoba 3 en 1", 
                    url: "https://s0.dia.es/medias/productimages/hfd/he3/11097403490334.jpg", 
                    precio: "4,65€"
                },
                9: {
                    nombre: "tijeras multiusos S/M 1 ud", 
                    url: "https://s1.dia.es/medias/h15/ha2/8959536300062.jpg", 
                    precio: "3,29€"
                },
            },
            cuidado_personal:{
                0: {
                    nombre: "enjuague bucal zero 500 ml", 
                    url: "https://s2.dia.es/medias/productimages/h74/hdc/10995930398750.jpg", 
                    precio: "5,49€"
                },
                1: {
                    nombre: "compresa super con alas bolsa 12 uds", 
                    url: "https://s3.dia.es/medias/productimages/h9b/he7/10988073418782.jpg", 
                    precio: "2,89€"
                },
                2: {
                    nombre: "tinte Negro Azulado Nº 1,1 caja 1 ud", 
                    url: "https://s2.dia.es/medias/productimages/h5f/hd4/10684455485470.jpg", 
                    precio: "4,59€"
                },
                3: {
                    nombre: "Fresh step desodorante para pies spray 150 ml", 
                    url: "https://s2.dia.es/medias/hcf/he8/9639159300126.jpg", 
                    precio: "5,50€"
                },
                4: {
                    nombre: "gel fijador efecto cemento tarro 300 ml", 
                    url: "https://s3.dia.es/medias/ha3/haf/9561293946910.jpg", 
                    precio: "3,79€"
                },
                5: {
                    nombre: "cepillo dental professional medio blíster 1 ud", 
                    url: "https://s3.dia.es/medias/h42/h43/10998992240670.jpg", 
                    precio: "2,45€"
                },
                6: {
                    nombre: "hojas de afeitar classic blíster 5 uds", 
                    url: "https://s1.dia.es/medias/h58/hd7/8963438837790.jpg", 
                    precio: "2,79€"
                },
                7: {
                    nombre: "desodorante apollo spray 150 ml", 
                    url: "https://s0.dia.es/medias/hb3/h12/10465571536926.jpg", 
                    precio: "3,99€"
                },
                8: {
                    nombre: "jabón de manos pura y sensitiva pastilla 100 grs", 
                    url: "https://s1.dia.es/medias/h57/he9/10770326847518.jpg", 
                    precio: "1,49€"
                },
                9: {
                    nombre: "cepillo dental eléctrico floss tip 360º blíster 1 uds", 
                    url: "https://s2.dia.es/medias/productimages/hf7/hcc/11053856489502.jpg", 
                    precio: "9,99€"
                },
            },
            bebidas:{
                0: {
                    nombre: "cerveza clásica lata 33 cl", 
                    url: "https://s2.dia.es/medias/hed/h6b/11078438518814.jpg", 
                    precio: "0,50€"
                },
                1: {
                    nombre: "cerveza lata 50 cl", 
                    url: "https://s3.dia.es/medias/h5f/ha9/9626455638046.jpg", 
                    precio: "0,99€"
                },
                2: {
                    nombre: "bebida energética lata 25 cl", 
                    url: "https://s1.dia.es/medias/h59/h22/10908046262302.jpg", 
                    precio: "0,99€"
                },
                3: {
                    nombre: "limón zero botella 2 lts", 
                    url: "https://s0.dia.es/medias/productimages/h4a/hce/11076053041182.jpg", 
                    precio: "1,59€"
                },
                4: {
                    nombre: "sprite botella 2 lts", 
                    url: "https://s0.dia.es/medias/hd2/hc6/10742032728094.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "COCA COLA zero botella 2 lts", 
                    url: "https://s0.dia.es/medias/hf2/h42/11075969744926.jpg", 
                    precio: "1,84€"
                },
                6: {
                    nombre: "sunny delight sabor florida botella 310 ml", 
                    url: "https://s3.dia.es/medias/productimages/h34/ha7/10742378332190.jpg", 
                    precio: "0,89€"
                },
                7: {
                    nombre: "BUDWEISER cerveza pack 6 botellas 25 cl", 
                    url: "https://s2.dia.es/medias/productimages/he2/ha4/11069566189598.jpg", 
                    precio: "4,49€"
                },
                8: {
                    nombre: "MONSTER bebida energética green lata 50 cl", 
                    url: "https://s1.dia.es/medias/productimages/h7f/h30/10803178307614.jpg", 
                    precio: "1,59€"
                },
                9: {
                    nombre: "FANTA naranja zero botella 2 lts", 
                    url: "https://s1.dia.es/medias/productimages/h62/hf1/11012070932510.jpg", 
                    precio: "1,59€"
                },
            },
            bodega:{
                0: {
                    nombre: "JACK DANIELS whisky tenessee botella 70 cl", 
                    url: "https://s1.dia.es/medias/hff/h26/8865934966814.jpg", 
                    precio: "21,69€"
                },
                1: {
                    nombre: "BACARDI ron blanco superior botella 70 cl", 
                    url: "https://s2.dia.es/medias/productimages/h73/h6b/10971763441694.jpg", 
                    precio: "12,59€"
                },
                2: {
                    nombre: "TANQUERAY ginebra london dry botella 70 cl", 
                    url: "https://s0.dia.es/medias/h29/h17/10847120719902.jpg", 
                    precio: "13,59€"
                },
                3: {
                    nombre: "EL COTO vino tinto crianza DO Rioja botella 75 cl", 
                    url: "https://s1.dia.es/medias/he1/h0b/10659128705054.jpg", 
                    precio: "6,15€"
                },
                4: {
                    nombre: "BOMBAY Original ginebra london dry botella 70 cl", 
                    url: "https://s3.dia.es/medias/productimages/h00/h52/10971765735454.jpg", 
                    precio: "12,49€"
                },
                5: {
                    nombre: "PASSPORT whisky botella 70 cl", 
                    url: "https://s0.dia.es/medias/h44/h98/10660203298846.jpg", 
                    precio: "9,99€"
                },
                6: {
                    nombre: "BAJOZ vino tinto DO Toro botella 75 cl", 
                    url: "https://s1.dia.es/medias/productimages/hfc/hd5/10996233273374.jpg", 
                    precio: "3,99€"
                },
                7: {
                    nombre: "FEDERICO PATERNINA vino tinto 12 meses banda azul DO Rioja botella 75 cl", 
                    url: "https://s0.dia.es/medias/productimages/h1a/h68/10797319290910.jpg", 
                    precio: "5,99€"
                },
                8: {
                    nombre: "GORDONS ginebra botella 1 lt", 
                    url: "https://s2.dia.es/medias/h7a/h08/10847111479326.jpg", 
                    precio: "12,99€"
                },
                9: {
                    nombre: "ALVINI vermouth rosso botella 1 lt", 
                    url: "https://s3.dia.es/medias/productimages/h67/h5e/10945399848990.jpg", 
                    precio: "2,25€"
                },
            },
            congelados:{
                0: {
                    nombre: "HAAGEN DAZS helado dulce de leche tarrina 400 grs", 
                    url: "https://s3.dia.es/medias/h31/h1b/10467447963678.jpg", 
                    precio: "6,49€"
                },
                1: {
                    nombre: "OREO helado bombón caja 4 uds 260 grs", 
                    url: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202202/14/00118953905538____5__600x600.jpg", 
                    precio: "4,39€"
                },
                2: {
                    nombre: "MILKA helado cono chocolate y vainilla caja 4 uds 270 grs", 
                    url: "https://s3.dia.es/medias/h69/hf3/10660066787358.jpg", 
                    precio: "4,39€"
                },
                3: {
                    nombre: "McCain patatas fritas forno julienne bolsa 600 grs", 
                    url: "https://s1.dia.es/medias/h75/h57/10867351191582.jpg", 
                    precio: "3,09€"
                },
                4: {
                    nombre: "DIA VEGECAMPO menestra de verduras bolsa 1 kg", 
                    url: "https://s2.dia.es/medias/productimages/h51/h86/10976954679326.jpg", 
                    precio: "1,19€"
                },
                5: {
                    nombre: "NORTINDAL pack tinta de calamar 4 unidades 4 gr", 
                    url: "https://s2.dia.es/medias/he5/hcd/10324977057822.jpg", 
                    precio: "0,75€"
                },
                6: {
                    nombre: "BUITONI Forno di pietra pizza jamón y queso caja 360 grs", 
                    url: "https://s3.dia.es/medias/productimages/h97/h44/10874237452318.jpg", 
                    precio: "3,59€"
                },
                7: {
                    nombre: "DR OETKER ristorante pizza atún caja 355 grs", 
                    url: "https://s3.dia.es/medias/productimages/hcc/h34/11093296414750.jpg", 
                    precio: "3,59€"
                },
                8: {
                    nombre: "PESCANOVA calamar limpio envase 400 grs", 
                    url: "https://s2.dia.es/medias/productimages/hc3/h91/10681534545950.jpg", 
                    precio: "5,55€"
                },
                9: {
                    nombre: "MARI MARINERA gamba pelada grande bolsa 400 grs", 
                    url: "https://s2.dia.es/medias/productimages/h89/h2a/10807427399710.jpg", 
                    precio: "6,25€"
                },
            },
            refrigerados:{
                0: {
                    nombre: "Pudding de chocolate con alto contenido en proteinas y bajo en grasas YOPRO de Danone 180 g.", 
                    url: "https://www.alcampo.es/media/hac/h28/11522987622430.jpg", 
                    precio: "1,59€"
                },
                1: {
                    nombre: "Natillas de vainilla elaboradas sin gluten DANET de Danone 8 x 120 grs", 
                    url: "https://www.alcampo.es/media/hf6/h8a/9317474041886.jpg", 
                    precio: "2,99€"
                },
                2: {
                    nombre: "Kefir natural de leche de vaca de pasto EL PASTORET 500 g.", 
                    url: "https://www.alcampo.es/media/h78/h6f/9471120310302.jpg", 
                    precio: "1,68€"
                },
                3: {
                    nombre: "Flan de huevo receta tradicional, elaborado al baño maria con leche recogida diariamente DHUL 4 x 110 grs", 
                    url: "https://www.alcampo.es/media/had/h73/11385326370846.jpg", 
                    precio: "1,95€"
                },
                4: {
                    nombre: "Postre lácteo (delicias) de trufa LA LECHERA de Nestlé 2 x 125 grs", 
                    url: "https://www.alcampo.es/media/h45/h9c/10032258875422.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "Mousse de yogur natural azucarado, elaborada sin gluten DANONE 4 x 65 grs", 
                    url: "https://www.alcampo.es/media/h3e/h6b/11434522607646.jpg", 
                    precio: "2,19€"
                },
                6: {
                    nombre: "Tarrina de mantequilla sin sal CENTRAL LECHERA ASTURIANA 250 grs", 
                    url: "https://www.alcampo.es/media/h55/hbd/9280767852574.jpg", 
                    precio: "2,42€"
                },
                7: {
                    nombre: "Margarina 3/4 con sal y sin aceite de Palma TULIPÁN 450 g.", 
                    url: "https://www.alcampo.es/media/h3d/hc2/11448737398814.jpg", 
                    precio: "2,54€"
                },
                8: {
                    nombre: "Nata líquida (18 % de materia grasa) para cocinar PASCUAL 200 ml.", 
                    url: "https://www.alcampo.es/media/h44/hb3/10493030858782.jpg", 
                    precio: "1,28€"
                },
                9: {
                    nombre: "Nata montada en spray CENTRAL LECHERA ASTURIANA 250 grs", 
                    url: "https://www.alcampo.es/media/he8/hb8/8927298289694.jpg", 
                    precio: "1,98€"
                },
            },
            carniceria:{
                0: {
                    nombre: "Entrecot de vacuno (peso aprox. 330 grs)", 
                    url: "https://s2.dia.es/medias/productimages/hcf/h55/10779310227486.jpg", 
                    precio: "6,93€"
                },
                1: {
                    nombre: "pechugas enteras de pollo bandeja (peso aprox. 880 grs)", 
                    url: "https://s0.dia.es/medias/h0d/h2a/10594922561566.jpg", 
                    precio: "6,29€"
                },
                2: {
                    nombre: "preparado de carne picada de vacuno bandeja 500 grs", 
                    url: "https://s3.dia.es/medias/productimages/hcb/h11/10704616456222.jpg", 
                    precio: "3,99€"
                },
                3: {
                    nombre: "SERRANO longaniza de pavo y pollo 320 grs", 
                    url: "https://s2.dia.es/medias/productimages/hcf/hff/10676999553054.jpg", 
                    precio: "1,99€"
                },
                4: {
                    nombre: "chistorra pieza 220 grs", 
                    url: "https://s0.dia.es/medias/ha0/hdf/8822466969630.jpg", 
                    precio: "1,25€"
                },
            },
            charcuteria:{
                0: {
                    nombre: "PHILADELPHIA queso para untar original tarrina 250 grs", 
                    url: "https://s3.dia.es/medias/productimages/ha1/h08/11100149448734.jpg", 
                    precio: "2,05€"
                },
                1: {
                    nombre: "EL CASERIO queso fundido burger con cheddar en lonchas paquete 185 grs", 
                    url: "https://s0.dia.es/medias/productimages/h8e/h13/11098841120798.jpg", 
                    precio: "1,69€"
                },
                2: {
                    nombre: "SÁNCHEZ ALCARAZ jamón de cebo Ibérico 50% pieza (peso aprox. 8 Kgs)", 
                    url: "https://s3.dia.es/medias/productimages/hd3/he7/11097384484894.jpg", 
                    precio: "125€"
                },
                3: {
                    nombre: "ARGAL Bonnatur jamón cocido en finas lonchas sobre 140 grs", 
                    url: "https://s1.dia.es/medias/productimages/h81/h36/10676792197150.jpg", 
                    precio: "2,29€"
                },
                4: {
                    nombre: "ELPOZO Selección jamón curado en lonchas sobre 115 gr", 
                    url: "https://s2.dia.es/medias/productimages/hee/hed/11078460801054.jpg", 
                    precio: "1,99€"
                },
            },
            pescaderia:{
                0: {
                    nombre: "LA GULA DEL NORTE con gambas al ajillo envase 110 grs", 
                    url: "https://s1.dia.es/medias/productimages/h75/h2e/10842923106334.jpg", 
                    precio: "3,19€"
                },
                1: {
                    nombre: "GALLINA BLANCA caldo para paella de marisco envase 1 lt", 
                    url: "https://s3.dia.es/medias/hed/h7e/10594445819934.jpg", 
                    precio: "2,95€"
                },
                2: {
                    nombre: "MARI MARINERA palitos de surimi refrigeradas MSC paquete 300 grs", 
                    url: "https://s0.dia.es/medias/h50/h4a/10521864077342.jpg", 
                    precio: "1,75€"
                },
                3: {
                    nombre: "EMBUMAR rodajas de mar selectas envase 200 grs", 
                    url: "https://s2.dia.es/medias/productimages/hb5/h6a/11100151742494.jpg", 
                    precio: "4,39€"
                },
                4: {
                    nombre: "AGUINAMAR mejillones cocidos envasado al vació 1 Kg", 
                    url: "https://s1.dia.es/medias/productimages/h86/hd6/10777973030942.jpg", 
                    precio: "4,89€"
                },
            },
            frutas_y_verduras:{
                0: {
                    nombre: "Aguacate bio bandeja 400 grs", 
                    url: "https://s3.dia.es/medias/hbc/h23/9583742222366.jpg", 
                    precio: "2,89€"
                },
                1: {
                    nombre: "Kiwi bandeja 700 grs", 
                    url: "https://s2.dia.es/medias/productimages/hb7/h9e/10927281143838.jpg", 
                    precio: "2,15€"
                },
                2: {
                    nombre: "Manzana Yello bandeja 700 grs", 
                    url: "https://s1.dia.es/medias/productimages/h52/had/11007157796894.jpg", 
                    precio: "2,59€"
                },
                3: {
                    nombre: "GENUINE COCONUT Coco troceado BIO bolsa 56 grs", 
                    url: "https://s2.dia.es/medias/productimages/h60/haf/11090925584414.jpg", 
                    precio: "0,99€"
                },
                4: {
                    nombre: "Banana bio bolsa (1.2 Kg aprox.)", 
                    url: "https://s0.dia.es/medias/productimages/h72/h41/10806535192606.jpg", 
                    precio: "2,39€"
                },
                5: {
                    nombre: "Ajo BIO malla 200 grs", 
                    url: "https://s3.dia.es/medias/productimages/h6e/h6d/11016736571422.jpg", 
                    precio: "1,49€"
                },
                6: {
                    nombre: "Cilantro 20 grs", 
                    url: "https://s1.dia.es/medias/hfc/h7d/9662449287198.jpg", 
                    precio: "1,35€"
                },
                7: {
                    nombre: "Jengibre bandeja 200 grs", 
                    url: "https://s2.dia.es/medias/productimages/ha8/h54/10943702007838.jpg", 
                    precio: "1,39€"
                },
                8: {
                    nombre: "Champiñón laminado bandeja 250 grs", 
                    url: "https://s1.dia.es/medias/hee/hc1/8833925971998.jpg", 
                    precio: "1,35€"
                },
                9: {
                    nombre: "VEGECAMPO lechuga Iceberg lavada bolsa 250 grs", 
                    url: "https://s2.dia.es/medias/productimages/hfd/h7b/10987955683358.jpg", 
                    precio: "0,85€"
                },
            },
        },
    },
    {
        supermercado : "elCorteIngles",
        categorias:{
            platos_preparados:{
                0:{
                    nombre:"ensalada veggie tarrina 200grs",
                    url:"https://s3.dia.es/medias/productimages/hab/hed/10895682732062.jpg",
                    precio:"1,75€"
                },
                1:{
                    nombre:"ensalada thai tarrina 200grs",
                    url:"https://s0.dia.es/medias/productimages/h36/h5e/10895673229342.jpg",
                    precio:"1,75€"
                },
                2: {
                    nombre: "pizza jamón y queso envase 405 grs", 
                    url: "https://s2.dia.es/medias/productimages/h0c/hea/10870041968670.jpg", 
                    precio: "2,89€"
                },
                3: {
                    nombre: "pizza de pollo envase 410 grs", 
                    url: "https://s2.dia.es/medias/productimages/hd9/h5f/10870047604766.jpg", 
                    precio: "2,89€"
                },
                4: {
                    nombre: "pizza atún y bacon envase 405 grs", 
                    url: "https://s2.dia.es/medias/productimages/hee/h98/10870043344926.jpg",
                    precio: "2,89€"
                },
                5: {
                    nombre: "tortilla de patatas fresca sin cebolla envase 600 grs",
                    url: "https://s3.dia.es/medias/productimages/h85/h1a/11060759986206.jpg",
                    precio: "2,35€"
                },
                6: {
                    nombre: "tortilla de patatas fresca con cebolla envase 600 grs",
                    url: "https://s1.dia.es/medias/productimages/h75/h49/11060760313886.jpg",
                    precio: "2,35€"
                },
                7: {
                    nombre: "tortilla de patatas fresca con chorizo envase 600 grs",
                    url: "https://s1.dia.es/medias/productimages/h8c/h0b/10952749776926.jpg",
                    precio: "2,35€"
                },
                8: {
                    nombre: "ensalada César tarrina 210 grs", 
                    url: "https://s3.dia.es/medias/productimages/h2c/h87/10987954044958.jpg", 
                    precio: "2,19€"
                },
                9: {
                    nombre: "croquetas de jamón bandeja 162 gr", 
                    url: "https://s0.dia.es/medias/productimages/he3/h20/10976989872158.jpg", 
                    precio: "2,15€"
                }
            },
            despensa:{
                0: {
                    nombre: "arroz redondo paquete 1 Kg", 
                    url: "https://s0.dia.es/medias/productimages/hb8/h42/10676834861086.jpg", 
                    precio: "1,65€"
                },
                1: {
                    nombre: "espaguetis paquete 1 Kg", 
                    url: "https://s0.dia.es/medias/productimages/h6e/h6e/10712855052318.jpg", 
                    precio: "1,25€"
                },
                2: {
                    nombre: "pasta fresca con jamón ibérico bolsa 250 grs", 
                    url: "https://s1.dia.es/medias/productimages/h99/hfb/10886789726238.jpg", 
                    precio: "2,97€"
                },
                3: {
                    nombre: "fideo cabellín paquete 500 grs", 
                    url: "https://s0.dia.es/medias/productimages/h41/hb5/10797284687902.jpg", 
                    precio: "0,87€"
                },
                4: {
                    nombre: "cereales corn flakes caja 500 grs", 
                    url: "https://s2.dia.es/medias/productimages/h10/h6d/11076215570462.jpg", 
                    precio: "2,70€"
                },
                5: {
                    nombre: "leche entera envase 1 lt PACK 6", 
                    url: "https://s1.dia.es/medias/productimages/h1e/hda/10717082779678.jpg", 
                    precio: "4,50€"
                },
                6: {
                    nombre: "cocktail frutos secos bolsa 500 grs", 
                    url: "https://s2.dia.es/medias/hbf/h18/9847302062110.jpg", 
                    precio: "2,05€"
                },
                7: {
                    nombre: "aceite de oliva extra virgen botella 750 ml", 
                    url: "https://s3.dia.es/medias/productimages/h1d/h15/11037844209694.jpg", 
                    precio: "5,75€"
                },
                8: {
                    nombre: "ajo en polvo frasco 65 grs", 
                    url: "https://s2.dia.es/medias/he2/hfc/8859405123614.jpg", 
                    precio: "0,69€"
                },
                9: {
                    nombre: "agua mineral natural botella 1.5 lt PACK 6", 
                    url: "https://s1.dia.es/medias/productimages/hf5/he5/11033721405470.jpg", 
                    precio: "4,14€"
                },
                10: {
                    nombre: "café molido 100% Colombia paquete 250 grs", 
                    url: "https://s0.dia.es/medias/productimages/hf0/h66/10837617213470.jpg", 
                    precio: "3,25€"
                },
                11: {
                    nombre: "tomate frito envase 350 grs", 
                    url: "https://s3.dia.es/medias/h4e/hcf/11023246065694.jpg", 
                    precio: "0,85€"
                },
                12: {
                    nombre: "caldo de pollo estuche 24 pastillas", 
                    url: "https://s1.dia.es/medias/h71/h15/9334522839070.jpg", 
                    precio: "0,97€"
                },
                13: {
                    nombre: "pan de molde formato familiar bolsa 700 grs", 
                    url: "https://s0.dia.es/medias/productimages/hab/h29/10786470297630.jpg", 
                    precio: "2,49€"
                },
                14: {
                    nombre: "salsa de soja botella 150 ml", 
                    url: "https://s0.dia.es/medias/productimages/h93/h6c/11094508371998.jpg", 
                    precio: "1,99€"
                },
            },
            mascotas:{
                0: {
                    nombre: "alimento para perros mini bolsa 1,5 kg", 
                    url: "https://s3.dia.es/medias/h51/h8f/10661338054686.jpg", 
                    precio: "6,39€"
                },
                1: {
                    nombre: "alimento para gatos mix buey bolsa 1,5 kg", 
                    url: "https://s2.dia.es/medias/hee/hbe/10661309218846.jpg", 
                    precio: "4,65€"
                },
                2: {
                    nombre: "alimento para perros receta tradicional bolsa 4 kg", 
                    url: "https://s3.dia.es/medias/h5f/h2f/10661355225118.jpg", 
                    precio: "6,79€"
                },
                3: {
                    nombre: "detergente para ropa y cama de mascotas botella 1 lt", 
                    url: "https://s1.dia.es/medias/heb/h68/9561295257630.jpg", 
                    precio: "5,15€"
                },
                4: {
                    nombre: "barritas con frutas para canarios bolsa 70 grs", 
                    url: "https://s2.dia.es/medias/ha5/h3e/8846782529566.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "One alimento para gatos junior bolsa 450 grs", 
                    url: "https://s2.dia.es/medias/h48/h0a/10953864413214.jpg", 
                    precio: "2,79€"
                },
                6: {
                    nombre: "cepillo raqueta caucho 1 ud", 
                    url: "https://s3.dia.es/medias/h7a/hfd/8868541169694.jpg", 
                    precio: "1,99€"
                },
                7: {
                    nombre: "pelota para perros 1 ud", 
                    url: "https://s0.dia.es/medias/h2d/h26/8872827650078.jpg", 
                    precio: "3,85€"
                },
                8: {
                    nombre: "champú para perros pelo negro bote 300 ml", 
                    url: "https://s0.dia.es/medias/h3f/h83/9390412464158.jpg", 
                    precio: "5,29€"
                },
                9: {
                    nombre: "agua de colonia fresca para perros spray 125 ml", 
                    url: "https://s2.dia.es/medias/h27/h81/9390410498078.jpg",
                    precio: "4,75€"
                },
            },
            bebe:{
                0: {
                    nombre: "champú infantil clásico bote 750 ml", 
                    url: "https://s1.dia.es/medias/h69/h99/9158125191198.jpg", 
                    precio: "2,39€"
                },
                1: {
                    nombre: "toallitas para bebés envase 80 uds", 
                    url: "https://s2.dia.es/medias/productimages/h28/h15/10954616012830.jpg", 
                    precio: "1,09€"
                },
                2: {
                    nombre: "crema protectora de pañal tubo 100 ml", 
                    url: "https://s3.dia.es/medias/productimages/h56/ha1/10939360477214.jpg", 
                    precio: "3,69€"
                },
                3: {
                    nombre: "jabon liquido infantil lavanda botella 750ml", 
                    url: "https://s1.dia.es/medias/hc1/hb0/9158100025374.jpg", 
                    precio: "1,99€"
                },
                4: {
                    nombre: "colonia infantil botella 750 ml", 
                    url: "https://s3.dia.es/medias/h07/h95/8958623023134.jpg", 
                    precio: "1,79€"
                },
                5: {
                    nombre: "leche infantil 3 bote 800 grs", 
                    url: "https://s2.dia.es/medias/productimages/h4f/h7b/10988153503774.jpg", 
                    precio: "14,99€"
                },
                6: {"nombre": "calzoncillos para niños absorbentes de 4 a 7 años paquete 10 uds", 
                    url: "https://s0.dia.es/medias/productimages/hdc/h35/10782312562718.jpg", 
                    precio: "14,49€"
                },
                7: {
                    nombre: "frutas variadas tarrito 2 x200 gr", 
                    url: "https://s3.dia.es/medias/hfa/h3c/8862312693790.jpg", 
                    precio: "1,77€"
                },
                8: {
                    nombre: "esponja especial de baño para bebé bolsa 1 ud", 
                    url: "https://s1.dia.es/medias/hce/h0a/8856386273310.jpg", 
                    precio: "4,45€"
                },
                9: {
                    nombre: "Baby talco dulces sueños para bebés bote 200 grs", 
                    url: "https://s0.dia.es/medias/productimages/h29/h59/10939392000030.jpg", 
                    precio: "3,05€"
                },
            },
            cuidado_para_el_hogar:{
                0: {
                    nombre: "ambientador neutralizador aroma lavanda spray 300 ml", 
                    url: "https://s2.dia.es/medias/hfb/h3f/9709996408862.jpg", 
                    precio: "1,15€"
                },
                1: {
                    nombre: "gel limpiador wc 3 en 1 océano botella 750 ml", 
                    url: "https://s0.dia.es/medias/h88/hc6/11030574792734.jpg", 
                    precio: "2,39€"
                },
                2: {
                    nombre: "palo rojo universal 1 ud", 
                    url: "https://s1.dia.es/medias/productimages/he7/h26/10844406022174.jpg", 
                    precio: "3,95€"
                },
                3: {
                    nombre: "estropajo salvauñas fibra verde paquete 4 uds", 
                    url: "https://s2.dia.es/medias/h01/haf/9354601299998.jpg", 
                    precio: "0,97€"
                },
                4: {
                    nombre: "ambientador eléctrico aroma aire fresco recambio 1 ud", 
                    url: "https://s2.dia.es/medias/productimages/h92/h71/10980041392158.jpg", 
                    precio: "3,79€"
                },
                5: {
                    nombre: "fregona hilo microfibras especial para suelos delicados bolsa 1 ud", 
                    url: "https://s3.dia.es/medias/h92/h7c/8872695398430.jpg", 
                    precio: "1,59€"
                },
                6: {
                    nombre: "descalcificador de lavadora en pastillas caja 15 ud", 
                    url: "https://s0.dia.es/medias/productimages/hb2/hba/10836376289310.jpg", 
                    precio: "8,49€"
                },
                7: {
                    nombre: "bayeta amarilla super absorbente y extra suave bolsa 3 uds", 
                    url: "https://s0.dia.es/medias/productimages/hf0/hfb/10949995069470.jpg", 
                    precio: "2,69€"
                },
                8: {
                    nombre: "cepillo antichoque de escoba 3 en 1", 
                    url: "https://s0.dia.es/medias/productimages/hfd/he3/11097403490334.jpg", 
                    precio: "4,65€"
                },
                9: {
                    nombre: "tijeras multiusos S/M 1 ud", 
                    url: "https://s1.dia.es/medias/h15/ha2/8959536300062.jpg", 
                    precio: "3,29€"
                },
            },
            cuidado_personal:{
                0: {
                    nombre: "enjuague bucal zero 500 ml", 
                    url: "https://s2.dia.es/medias/productimages/h74/hdc/10995930398750.jpg", 
                    precio: "5,49€"
                },
                1: {
                    nombre: "compresa super con alas bolsa 12 uds", 
                    url: "https://s3.dia.es/medias/productimages/h9b/he7/10988073418782.jpg", 
                    precio: "2,89€"
                },
                2: {
                    nombre: "tinte Negro Azulado Nº 1,1 caja 1 ud", 
                    url: "https://s2.dia.es/medias/productimages/h5f/hd4/10684455485470.jpg", 
                    precio: "4,59€"
                },
                3: {
                    nombre: "Fresh step desodorante para pies spray 150 ml", 
                    url: "https://s2.dia.es/medias/hcf/he8/9639159300126.jpg", 
                    precio: "5,50€"
                },
                4: {
                    nombre: "gel fijador efecto cemento tarro 300 ml", 
                    url: "https://s3.dia.es/medias/ha3/haf/9561293946910.jpg", 
                    precio: "3,79€"
                },
                5: {
                    nombre: "cepillo dental professional medio blíster 1 ud", 
                    url: "https://s3.dia.es/medias/h42/h43/10998992240670.jpg", 
                    precio: "2,45€"
                },
                6: {
                    nombre: "hojas de afeitar classic blíster 5 uds", 
                    url: "https://s1.dia.es/medias/h58/hd7/8963438837790.jpg", 
                    precio: "2,79€"
                },
                7: {
                    nombre: "desodorante apollo spray 150 ml", 
                    url: "https://s0.dia.es/medias/hb3/h12/10465571536926.jpg", 
                    precio: "3,99€"
                },
                8: {
                    nombre: "jabón de manos pura y sensitiva pastilla 100 grs", 
                    url: "https://s1.dia.es/medias/h57/he9/10770326847518.jpg", 
                    precio: "1,49€"
                },
                9: {
                    nombre: "cepillo dental eléctrico floss tip 360º blíster 1 uds", 
                    url: "https://s2.dia.es/medias/productimages/hf7/hcc/11053856489502.jpg", 
                    precio: "9,99€"
                },
            },
            bebidas:{
                0: {
                    nombre: "cerveza clásica lata 33 cl", 
                    url: "https://s2.dia.es/medias/hed/h6b/11078438518814.jpg", 
                    precio: "0,50€"
                },
                1: {
                    nombre: "cerveza lata 50 cl", 
                    url: "https://s3.dia.es/medias/h5f/ha9/9626455638046.jpg", 
                    precio: "0,99€"
                },
                2: {
                    nombre: "bebida energética lata 25 cl", 
                    url: "https://s1.dia.es/medias/h59/h22/10908046262302.jpg", 
                    precio: "0,99€"
                },
                3: {
                    nombre: "limón zero botella 2 lts", 
                    url: "https://s0.dia.es/medias/productimages/h4a/hce/11076053041182.jpg", 
                    precio: "1,59€"
                },
                4: {
                    nombre: "sprite botella 2 lts", 
                    url: "https://s0.dia.es/medias/hd2/hc6/10742032728094.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "COCA COLA zero botella 2 lts", 
                    url: "https://s0.dia.es/medias/hf2/h42/11075969744926.jpg", 
                    precio: "1,84€"
                },
                6: {
                    nombre: "sunny delight sabor florida botella 310 ml", 
                    url: "https://s3.dia.es/medias/productimages/h34/ha7/10742378332190.jpg", 
                    precio: "0,89€"
                },
                7: {
                    nombre: "BUDWEISER cerveza pack 6 botellas 25 cl", 
                    url: "https://s2.dia.es/medias/productimages/he2/ha4/11069566189598.jpg", 
                    precio: "4,49€"
                },
                8: {
                    nombre: "MONSTER bebida energética green lata 50 cl", 
                    url: "https://s1.dia.es/medias/productimages/h7f/h30/10803178307614.jpg", 
                    precio: "1,59€"
                },
                9: {
                    nombre: "FANTA naranja zero botella 2 lts", 
                    url: "https://s1.dia.es/medias/productimages/h62/hf1/11012070932510.jpg", 
                    precio: "1,59€"
                },
            },
            bodega:{
                0: {
                    nombre: "JACK DANIELS whisky tenessee botella 70 cl", 
                    url: "https://s1.dia.es/medias/hff/h26/8865934966814.jpg", 
                    precio: "21,69€"
                },
                1: {
                    nombre: "BACARDI ron blanco superior botella 70 cl", 
                    url: "https://s2.dia.es/medias/productimages/h73/h6b/10971763441694.jpg", 
                    precio: "12,59€"
                },
                2: {
                    nombre: "TANQUERAY ginebra london dry botella 70 cl", 
                    url: "https://s0.dia.es/medias/h29/h17/10847120719902.jpg", 
                    precio: "13,59€"
                },
                3: {
                    nombre: "EL COTO vino tinto crianza DO Rioja botella 75 cl", 
                    url: "https://s1.dia.es/medias/he1/h0b/10659128705054.jpg", 
                    precio: "6,15€"
                },
                4: {
                    nombre: "BOMBAY Original ginebra london dry botella 70 cl", 
                    url: "https://s3.dia.es/medias/productimages/h00/h52/10971765735454.jpg", 
                    precio: "12,49€"
                },
                5: {
                    nombre: "PASSPORT whisky botella 70 cl", 
                    url: "https://s0.dia.es/medias/h44/h98/10660203298846.jpg", 
                    precio: "9,99€"
                },
                6: {
                    nombre: "BAJOZ vino tinto DO Toro botella 75 cl", 
                    url: "https://s1.dia.es/medias/productimages/hfc/hd5/10996233273374.jpg", 
                    precio: "3,99€"
                },
                7: {
                    nombre: "FEDERICO PATERNINA vino tinto 12 meses banda azul DO Rioja botella 75 cl", 
                    url: "https://s0.dia.es/medias/productimages/h1a/h68/10797319290910.jpg", 
                    precio: "5,99€"
                },
                8: {
                    nombre: "GORDONS ginebra botella 1 lt", 
                    url: "https://s2.dia.es/medias/h7a/h08/10847111479326.jpg", 
                    precio: "12,99€"
                },
                9: {
                    nombre: "ALVINI vermouth rosso botella 1 lt", 
                    url: "https://s3.dia.es/medias/productimages/h67/h5e/10945399848990.jpg", 
                    precio: "2,25€"
                },
            },
            congelados:{
                0: {
                    nombre: "HAAGEN DAZS helado dulce de leche tarrina 400 grs", 
                    url: "https://s3.dia.es/medias/h31/h1b/10467447963678.jpg", 
                    precio: "6,49€"
                },
                1: {
                    nombre: "OREO helado bombón caja 4 uds 260 grs", 
                    url: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202202/14/00118953905538____5__600x600.jpg", 
                    precio: "4,39€"
                },
                2: {
                    nombre: "MILKA helado cono chocolate y vainilla caja 4 uds 270 grs", 
                    url: "https://s3.dia.es/medias/h69/hf3/10660066787358.jpg", 
                    precio: "4,39€"
                },
                3: {
                    nombre: "McCain patatas fritas forno julienne bolsa 600 grs", 
                    url: "https://s1.dia.es/medias/h75/h57/10867351191582.jpg", 
                    precio: "3,09€"
                },
                4: {
                    nombre: "DIA VEGECAMPO menestra de verduras bolsa 1 kg", 
                    url: "https://s2.dia.es/medias/productimages/h51/h86/10976954679326.jpg", 
                    precio: "1,19€"
                },
                5: {
                    nombre: "NORTINDAL pack tinta de calamar 4 unidades 4 gr", 
                    url: "https://s2.dia.es/medias/he5/hcd/10324977057822.jpg", 
                    precio: "0,75€"
                },
                6: {
                    nombre: "BUITONI Forno di pietra pizza jamón y queso caja 360 grs", 
                    url: "https://s3.dia.es/medias/productimages/h97/h44/10874237452318.jpg", 
                    precio: "3,59€"
                },
                7: {
                    nombre: "DR OETKER ristorante pizza atún caja 355 grs", 
                    url: "https://s3.dia.es/medias/productimages/hcc/h34/11093296414750.jpg", 
                    precio: "3,59€"
                },
                8: {
                    nombre: "PESCANOVA calamar limpio envase 400 grs", 
                    url: "https://s2.dia.es/medias/productimages/hc3/h91/10681534545950.jpg", 
                    precio: "5,55€"
                },
                9: {
                    nombre: "MARI MARINERA gamba pelada grande bolsa 400 grs", 
                    url: "https://s2.dia.es/medias/productimages/h89/h2a/10807427399710.jpg", 
                    precio: "6,25€"
                },
            },
            refrigerados:{
                0: {
                    nombre: "Pudding de chocolate con alto contenido en proteinas y bajo en grasas YOPRO de Danone 180 g.", 
                    url: "https://www.alcampo.es/media/hac/h28/11522987622430.jpg", 
                    precio: "1,59€"
                },
                1: {
                    nombre: "Natillas de vainilla elaboradas sin gluten DANET de Danone 8 x 120 grs", 
                    url: "https://www.alcampo.es/media/hf6/h8a/9317474041886.jpg", 
                    precio: "2,99€"
                },
                2: {
                    nombre: "Kefir natural de leche de vaca de pasto EL PASTORET 500 g.", 
                    url: "https://www.alcampo.es/media/h78/h6f/9471120310302.jpg", 
                    precio: "1,68€"
                },
                3: {
                    nombre: "Flan de huevo receta tradicional, elaborado al baño maria con leche recogida diariamente DHUL 4 x 110 grs", 
                    url: "https://www.alcampo.es/media/had/h73/11385326370846.jpg", 
                    precio: "1,95€"
                },
                4: {
                    nombre: "Postre lácteo (delicias) de trufa LA LECHERA de Nestlé 2 x 125 grs", 
                    url: "https://www.alcampo.es/media/h45/h9c/10032258875422.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "Mousse de yogur natural azucarado, elaborada sin gluten DANONE 4 x 65 grs", 
                    url: "https://www.alcampo.es/media/h3e/h6b/11434522607646.jpg", 
                    precio: "2,19€"
                },
                6: {
                    nombre: "Tarrina de mantequilla sin sal CENTRAL LECHERA ASTURIANA 250 grs", 
                    url: "https://www.alcampo.es/media/h55/hbd/9280767852574.jpg", 
                    precio: "2,42€"
                },
                7: {
                    nombre: "Margarina 3/4 con sal y sin aceite de Palma TULIPÁN 450 g.", 
                    url: "https://www.alcampo.es/media/h3d/hc2/11448737398814.jpg", 
                    precio: "2,54€"
                },
                8: {
                    nombre: "Nata líquida (18 % de materia grasa) para cocinar PASCUAL 200 ml.", 
                    url: "https://www.alcampo.es/media/h44/hb3/10493030858782.jpg", 
                    precio: "1,28€"
                },
                9: {
                    nombre: "Nata montada en spray CENTRAL LECHERA ASTURIANA 250 grs", 
                    url: "https://www.alcampo.es/media/he8/hb8/8927298289694.jpg", 
                    precio: "1,98€"
                },
            },
            carniceria:{
                0: {
                    nombre: "Entrecot de vacuno (peso aprox. 330 grs)", 
                    url: "https://s2.dia.es/medias/productimages/hcf/h55/10779310227486.jpg", 
                    precio: "6,93€"
                },
                1: {
                    nombre: "pechugas enteras de pollo bandeja (peso aprox. 880 grs)", 
                    url: "https://s0.dia.es/medias/h0d/h2a/10594922561566.jpg", 
                    precio: "6,29€"
                },
                2: {
                    nombre: "preparado de carne picada de vacuno bandeja 500 grs", 
                    url: "https://s3.dia.es/medias/productimages/hcb/h11/10704616456222.jpg", 
                    precio: "3,99€"
                },
                3: {
                    nombre: "SERRANO longaniza de pavo y pollo 320 grs", 
                    url: "https://s2.dia.es/medias/productimages/hcf/hff/10676999553054.jpg", 
                    precio: "1,99€"
                },
                4: {
                    nombre: "chistorra pieza 220 grs", 
                    url: "https://s0.dia.es/medias/ha0/hdf/8822466969630.jpg", 
                    precio: "1,25€"
                },
            },
            charcuteria:{
                0: {
                    nombre: "PHILADELPHIA queso para untar original tarrina 250 grs", 
                    url: "https://s3.dia.es/medias/productimages/ha1/h08/11100149448734.jpg", 
                    precio: "2,05€"
                },
                1: {
                    nombre: "EL CASERIO queso fundido burger con cheddar en lonchas paquete 185 grs", 
                    url: "https://s0.dia.es/medias/productimages/h8e/h13/11098841120798.jpg", 
                    precio: "1,69€"
                },
                2: {
                    nombre: "SÁNCHEZ ALCARAZ jamón de cebo Ibérico 50% pieza (peso aprox. 8 Kgs)", 
                    url: "https://s3.dia.es/medias/productimages/hd3/he7/11097384484894.jpg", 
                    precio: "125€"
                },
                3: {
                    nombre: "ARGAL Bonnatur jamón cocido en finas lonchas sobre 140 grs", 
                    url: "https://s1.dia.es/medias/productimages/h81/h36/10676792197150.jpg", 
                    precio: "2,29€"
                },
                4: {
                    nombre: "ELPOZO Selección jamón curado en lonchas sobre 115 gr", 
                    url: "https://s2.dia.es/medias/productimages/hee/hed/11078460801054.jpg", 
                    precio: "1,99€"
                },
            },
            pescaderia:{
                0: {
                    nombre: "LA GULA DEL NORTE con gambas al ajillo envase 110 grs", 
                    url: "https://s1.dia.es/medias/productimages/h75/h2e/10842923106334.jpg", 
                    precio: "3,19€"
                },
                1: {
                    nombre: "GALLINA BLANCA caldo para paella de marisco envase 1 lt", 
                    url: "https://s3.dia.es/medias/hed/h7e/10594445819934.jpg", 
                    precio: "2,95€"
                },
                2: {
                    nombre: "MARI MARINERA palitos de surimi refrigeradas MSC paquete 300 grs", 
                    url: "https://s0.dia.es/medias/h50/h4a/10521864077342.jpg", 
                    precio: "1,75€"
                },
                3: {
                    nombre: "EMBUMAR rodajas de mar selectas envase 200 grs", 
                    url: "https://s2.dia.es/medias/productimages/hb5/h6a/11100151742494.jpg", 
                    precio: "4,39€"
                },
                4: {
                    nombre: "AGUINAMAR mejillones cocidos envasado al vació 1 Kg", 
                    url: "https://s1.dia.es/medias/productimages/h86/hd6/10777973030942.jpg", 
                    precio: "4,89€"
                },
            },
            frutas_y_verduras:{
                0: {
                    nombre: "Aguacate bio bandeja 400 grs", 
                    url: "https://s3.dia.es/medias/hbc/h23/9583742222366.jpg", 
                    precio: "2,89€"
                },
                1: {
                    nombre: "Kiwi bandeja 700 grs", 
                    url: "https://s2.dia.es/medias/productimages/hb7/h9e/10927281143838.jpg", 
                    precio: "2,15€"
                },
                2: {
                    nombre: "Manzana Yello bandeja 700 grs", 
                    url: "https://s1.dia.es/medias/productimages/h52/had/11007157796894.jpg", 
                    precio: "2,59€"
                },
                3: {
                    nombre: "GENUINE COCONUT Coco troceado BIO bolsa 56 grs", 
                    url: "https://s2.dia.es/medias/productimages/h60/haf/11090925584414.jpg", 
                    precio: "0,99€"
                },
                4: {
                    nombre: "Banana bio bolsa (1.2 Kg aprox.)", 
                    url: "https://s0.dia.es/medias/productimages/h72/h41/10806535192606.jpg", 
                    precio: "2,39€"
                },
                5: {
                    nombre: "Ajo BIO malla 200 grs", 
                    url: "https://s3.dia.es/medias/productimages/h6e/h6d/11016736571422.jpg", 
                    precio: "1,49€"
                },
                6: {
                    nombre: "Cilantro 20 grs", 
                    url: "https://s1.dia.es/medias/hfc/h7d/9662449287198.jpg", 
                    precio: "1,35€"
                },
                7: {
                    nombre: "Jengibre bandeja 200 grs", 
                    url: "https://s2.dia.es/medias/productimages/ha8/h54/10943702007838.jpg", 
                    precio: "1,39€"
                },
                8: {
                    nombre: "Champiñón laminado bandeja 250 grs", 
                    url: "https://s1.dia.es/medias/hee/hc1/8833925971998.jpg", 
                    precio: "1,35€"
                },
                9: {
                    nombre: "VEGECAMPO lechuga Iceberg lavada bolsa 250 grs", 
                    url: "https://s2.dia.es/medias/productimages/hfd/h7b/10987955683358.jpg", 
                    precio: "0,85€"
                },
            },
        },
    },
    {
        supermercado : "aldi",
        categorias:{
            platos_preparados:{
                0:{
                    nombre:"ensalada veggie tarrina 200grs",
                    url:"https://s3.dia.es/medias/productimages/hab/hed/10895682732062.jpg",
                    precio:"1,75€"
                },
                1:{
                    nombre:"ensalada thai tarrina 200grs",
                    url:"https://s0.dia.es/medias/productimages/h36/h5e/10895673229342.jpg",
                    precio:"1,75€"
                },
                2: {
                    nombre: "pizza jamón y queso envase 405 grs", 
                    url: "https://s2.dia.es/medias/productimages/h0c/hea/10870041968670.jpg", 
                    precio: "2,89€"
                },
                3: {
                    nombre: "pizza de pollo envase 410 grs", 
                    url: "https://s2.dia.es/medias/productimages/hd9/h5f/10870047604766.jpg", 
                    precio: "2,89€"
                },
                4: {
                    nombre: "pizza atún y bacon envase 405 grs", 
                    url: "https://s2.dia.es/medias/productimages/hee/h98/10870043344926.jpg",
                    precio: "2,89€"
                },
                5: {
                    nombre: "tortilla de patatas fresca sin cebolla envase 600 grs",
                    url: "https://s3.dia.es/medias/productimages/h85/h1a/11060759986206.jpg",
                    precio: "2,35€"
                },
                6: {
                    nombre: "tortilla de patatas fresca con cebolla envase 600 grs",
                    url: "https://s1.dia.es/medias/productimages/h75/h49/11060760313886.jpg",
                    precio: "2,35€"
                },
                7: {
                    nombre: "tortilla de patatas fresca con chorizo envase 600 grs",
                    url: "https://s1.dia.es/medias/productimages/h8c/h0b/10952749776926.jpg",
                    precio: "2,35€"
                },
                8: {
                    nombre: "ensalada César tarrina 210 grs", 
                    url: "https://s3.dia.es/medias/productimages/h2c/h87/10987954044958.jpg", 
                    precio: "2,19€"
                },
                9: {
                    nombre: "croquetas de jamón bandeja 162 gr", 
                    url: "https://s0.dia.es/medias/productimages/he3/h20/10976989872158.jpg", 
                    precio: "2,15€"
                }
            },
            despensa:{
                0: {
                    nombre: "arroz redondo paquete 1 Kg", 
                    url: "https://s0.dia.es/medias/productimages/hb8/h42/10676834861086.jpg", 
                    precio: "1,65€"
                },
                1: {
                    nombre: "espaguetis paquete 1 Kg", 
                    url: "https://s0.dia.es/medias/productimages/h6e/h6e/10712855052318.jpg", 
                    precio: "1,25€"
                },
                2: {
                    nombre: "pasta fresca con jamón ibérico bolsa 250 grs", 
                    url: "https://s1.dia.es/medias/productimages/h99/hfb/10886789726238.jpg", 
                    precio: "2,97€"
                },
                3: {
                    nombre: "fideo cabellín paquete 500 grs", 
                    url: "https://s0.dia.es/medias/productimages/h41/hb5/10797284687902.jpg", 
                    precio: "0,87€"
                },
                4: {
                    nombre: "cereales corn flakes caja 500 grs", 
                    url: "https://s2.dia.es/medias/productimages/h10/h6d/11076215570462.jpg", 
                    precio: "2,70€"
                },
                5: {
                    nombre: "leche entera envase 1 lt PACK 6", 
                    url: "https://s1.dia.es/medias/productimages/h1e/hda/10717082779678.jpg", 
                    precio: "4,50€"
                },
                6: {
                    nombre: "cocktail frutos secos bolsa 500 grs", 
                    url: "https://s2.dia.es/medias/hbf/h18/9847302062110.jpg", 
                    precio: "2,05€"
                },
                7: {
                    nombre: "aceite de oliva extra virgen botella 750 ml", 
                    url: "https://s3.dia.es/medias/productimages/h1d/h15/11037844209694.jpg", 
                    precio: "5,75€"
                },
                8: {
                    nombre: "ajo en polvo frasco 65 grs", 
                    url: "https://s2.dia.es/medias/he2/hfc/8859405123614.jpg", 
                    precio: "0,69€"
                },
                9: {
                    nombre: "agua mineral natural botella 1.5 lt PACK 6", 
                    url: "https://s1.dia.es/medias/productimages/hf5/he5/11033721405470.jpg", 
                    precio: "4,14€"
                },
                10: {
                    nombre: "café molido 100% Colombia paquete 250 grs", 
                    url: "https://s0.dia.es/medias/productimages/hf0/h66/10837617213470.jpg", 
                    precio: "3,25€"
                },
                11: {
                    nombre: "tomate frito envase 350 grs", 
                    url: "https://s3.dia.es/medias/h4e/hcf/11023246065694.jpg", 
                    precio: "0,85€"
                },
                12: {
                    nombre: "caldo de pollo estuche 24 pastillas", 
                    url: "https://s1.dia.es/medias/h71/h15/9334522839070.jpg", 
                    precio: "0,97€"
                },
                13: {
                    nombre: "pan de molde formato familiar bolsa 700 grs", 
                    url: "https://s0.dia.es/medias/productimages/hab/h29/10786470297630.jpg", 
                    precio: "2,49€"
                },
                14: {
                    nombre: "salsa de soja botella 150 ml", 
                    url: "https://s0.dia.es/medias/productimages/h93/h6c/11094508371998.jpg", 
                    precio: "1,99€"
                },
            },
            mascotas:{
                0: {
                    nombre: "alimento para perros mini bolsa 1,5 kg", 
                    url: "https://s3.dia.es/medias/h51/h8f/10661338054686.jpg", 
                    precio: "6,39€"
                },
                1: {
                    nombre: "alimento para gatos mix buey bolsa 1,5 kg", 
                    url: "https://s2.dia.es/medias/hee/hbe/10661309218846.jpg", 
                    precio: "4,65€"
                },
                2: {
                    nombre: "alimento para perros receta tradicional bolsa 4 kg", 
                    url: "https://s3.dia.es/medias/h5f/h2f/10661355225118.jpg", 
                    precio: "6,79€"
                },
                3: {
                    nombre: "detergente para ropa y cama de mascotas botella 1 lt", 
                    url: "https://s1.dia.es/medias/heb/h68/9561295257630.jpg", 
                    precio: "5,15€"
                },
                4: {
                    nombre: "barritas con frutas para canarios bolsa 70 grs", 
                    url: "https://s2.dia.es/medias/ha5/h3e/8846782529566.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "One alimento para gatos junior bolsa 450 grs", 
                    url: "https://s2.dia.es/medias/h48/h0a/10953864413214.jpg", 
                    precio: "2,79€"
                },
                6: {
                    nombre: "cepillo raqueta caucho 1 ud", 
                    url: "https://s3.dia.es/medias/h7a/hfd/8868541169694.jpg", 
                    precio: "1,99€"
                },
                7: {
                    nombre: "pelota para perros 1 ud", 
                    url: "https://s0.dia.es/medias/h2d/h26/8872827650078.jpg", 
                    precio: "3,85€"
                },
                8: {
                    nombre: "champú para perros pelo negro bote 300 ml", 
                    url: "https://s0.dia.es/medias/h3f/h83/9390412464158.jpg", 
                    precio: "5,29€"
                },
                9: {
                    nombre: "agua de colonia fresca para perros spray 125 ml", 
                    url: "https://s2.dia.es/medias/h27/h81/9390410498078.jpg",
                    precio: "4,75€"
                },
            },
            bebe:{
                0: {
                    nombre: "champú infantil clásico bote 750 ml", 
                    url: "https://s1.dia.es/medias/h69/h99/9158125191198.jpg", 
                    precio: "2,39€"
                },
                1: {
                    nombre: "toallitas para bebés envase 80 uds", 
                    url: "https://s2.dia.es/medias/productimages/h28/h15/10954616012830.jpg", 
                    precio: "1,09€"
                },
                2: {
                    nombre: "crema protectora de pañal tubo 100 ml", 
                    url: "https://s3.dia.es/medias/productimages/h56/ha1/10939360477214.jpg", 
                    precio: "3,69€"
                },
                3: {
                    nombre: "jabon liquido infantil lavanda botella 750ml", 
                    url: "https://s1.dia.es/medias/hc1/hb0/9158100025374.jpg", 
                    precio: "1,99€"
                },
                4: {
                    nombre: "colonia infantil botella 750 ml", 
                    url: "https://s3.dia.es/medias/h07/h95/8958623023134.jpg", 
                    precio: "1,79€"
                },
                5: {
                    nombre: "leche infantil 3 bote 800 grs", 
                    url: "https://s2.dia.es/medias/productimages/h4f/h7b/10988153503774.jpg", 
                    precio: "14,99€"
                },
                6: {"nombre": "calzoncillos para niños absorbentes de 4 a 7 años paquete 10 uds", 
                    url: "https://s0.dia.es/medias/productimages/hdc/h35/10782312562718.jpg", 
                    precio: "14,49€"
                },
                7: {
                    nombre: "frutas variadas tarrito 2 x200 gr", 
                    url: "https://s3.dia.es/medias/hfa/h3c/8862312693790.jpg", 
                    precio: "1,77€"
                },
                8: {
                    nombre: "esponja especial de baño para bebé bolsa 1 ud", 
                    url: "https://s1.dia.es/medias/hce/h0a/8856386273310.jpg", 
                    precio: "4,45€"
                },
                9: {
                    nombre: "Baby talco dulces sueños para bebés bote 200 grs", 
                    url: "https://s0.dia.es/medias/productimages/h29/h59/10939392000030.jpg", 
                    precio: "3,05€"
                },
            },
            cuidado_para_el_hogar:{
                0: {
                    nombre: "ambientador neutralizador aroma lavanda spray 300 ml", 
                    url: "https://s2.dia.es/medias/hfb/h3f/9709996408862.jpg", 
                    precio: "1,15€"
                },
                1: {
                    nombre: "gel limpiador wc 3 en 1 océano botella 750 ml", 
                    url: "https://s0.dia.es/medias/h88/hc6/11030574792734.jpg", 
                    precio: "2,39€"
                },
                2: {
                    nombre: "palo rojo universal 1 ud", 
                    url: "https://s1.dia.es/medias/productimages/he7/h26/10844406022174.jpg", 
                    precio: "3,95€"
                },
                3: {
                    nombre: "estropajo salvauñas fibra verde paquete 4 uds", 
                    url: "https://s2.dia.es/medias/h01/haf/9354601299998.jpg", 
                    precio: "0,97€"
                },
                4: {
                    nombre: "ambientador eléctrico aroma aire fresco recambio 1 ud", 
                    url: "https://s2.dia.es/medias/productimages/h92/h71/10980041392158.jpg", 
                    precio: "3,79€"
                },
                5: {
                    nombre: "fregona hilo microfibras especial para suelos delicados bolsa 1 ud", 
                    url: "https://s3.dia.es/medias/h92/h7c/8872695398430.jpg", 
                    precio: "1,59€"
                },
                6: {
                    nombre: "descalcificador de lavadora en pastillas caja 15 ud", 
                    url: "https://s0.dia.es/medias/productimages/hb2/hba/10836376289310.jpg", 
                    precio: "8,49€"
                },
                7: {
                    nombre: "bayeta amarilla super absorbente y extra suave bolsa 3 uds", 
                    url: "https://s0.dia.es/medias/productimages/hf0/hfb/10949995069470.jpg", 
                    precio: "2,69€"
                },
                8: {
                    nombre: "cepillo antichoque de escoba 3 en 1", 
                    url: "https://s0.dia.es/medias/productimages/hfd/he3/11097403490334.jpg", 
                    precio: "4,65€"
                },
                9: {
                    nombre: "tijeras multiusos S/M 1 ud", 
                    url: "https://s1.dia.es/medias/h15/ha2/8959536300062.jpg", 
                    precio: "3,29€"
                },
            },
            cuidado_personal:{
                0: {
                    nombre: "enjuague bucal zero 500 ml", 
                    url: "https://s2.dia.es/medias/productimages/h74/hdc/10995930398750.jpg", 
                    precio: "5,49€"
                },
                1: {
                    nombre: "compresa super con alas bolsa 12 uds", 
                    url: "https://s3.dia.es/medias/productimages/h9b/he7/10988073418782.jpg", 
                    precio: "2,89€"
                },
                2: {
                    nombre: "tinte Negro Azulado Nº 1,1 caja 1 ud", 
                    url: "https://s2.dia.es/medias/productimages/h5f/hd4/10684455485470.jpg", 
                    precio: "4,59€"
                },
                3: {
                    nombre: "Fresh step desodorante para pies spray 150 ml", 
                    url: "https://s2.dia.es/medias/hcf/he8/9639159300126.jpg", 
                    precio: "5,50€"
                },
                4: {
                    nombre: "gel fijador efecto cemento tarro 300 ml", 
                    url: "https://s3.dia.es/medias/ha3/haf/9561293946910.jpg", 
                    precio: "3,79€"
                },
                5: {
                    nombre: "cepillo dental professional medio blíster 1 ud", 
                    url: "https://s3.dia.es/medias/h42/h43/10998992240670.jpg", 
                    precio: "2,45€"
                },
                6: {
                    nombre: "hojas de afeitar classic blíster 5 uds", 
                    url: "https://s1.dia.es/medias/h58/hd7/8963438837790.jpg", 
                    precio: "2,79€"
                },
                7: {
                    nombre: "desodorante apollo spray 150 ml", 
                    url: "https://s0.dia.es/medias/hb3/h12/10465571536926.jpg", 
                    precio: "3,99€"
                },
                8: {
                    nombre: "jabón de manos pura y sensitiva pastilla 100 grs", 
                    url: "https://s1.dia.es/medias/h57/he9/10770326847518.jpg", 
                    precio: "1,49€"
                },
                9: {
                    nombre: "cepillo dental eléctrico floss tip 360º blíster 1 uds", 
                    url: "https://s2.dia.es/medias/productimages/hf7/hcc/11053856489502.jpg", 
                    precio: "9,99€"
                },
            },
            bebidas:{
                0: {
                    nombre: "cerveza clásica lata 33 cl", 
                    url: "https://s2.dia.es/medias/hed/h6b/11078438518814.jpg", 
                    precio: "0,50€"
                },
                1: {
                    nombre: "cerveza lata 50 cl", 
                    url: "https://s3.dia.es/medias/h5f/ha9/9626455638046.jpg", 
                    precio: "0,99€"
                },
                2: {
                    nombre: "bebida energética lata 25 cl", 
                    url: "https://s1.dia.es/medias/h59/h22/10908046262302.jpg", 
                    precio: "0,99€"
                },
                3: {
                    nombre: "limón zero botella 2 lts", 
                    url: "https://s0.dia.es/medias/productimages/h4a/hce/11076053041182.jpg", 
                    precio: "1,59€"
                },
                4: {
                    nombre: "sprite botella 2 lts", 
                    url: "https://s0.dia.es/medias/hd2/hc6/10742032728094.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "COCA COLA zero botella 2 lts", 
                    url: "https://s0.dia.es/medias/hf2/h42/11075969744926.jpg", 
                    precio: "1,84€"
                },
                6: {
                    nombre: "sunny delight sabor florida botella 310 ml", 
                    url: "https://s3.dia.es/medias/productimages/h34/ha7/10742378332190.jpg", 
                    precio: "0,89€"
                },
                7: {
                    nombre: "BUDWEISER cerveza pack 6 botellas 25 cl", 
                    url: "https://s2.dia.es/medias/productimages/he2/ha4/11069566189598.jpg", 
                    precio: "4,49€"
                },
                8: {
                    nombre: "MONSTER bebida energética green lata 50 cl", 
                    url: "https://s1.dia.es/medias/productimages/h7f/h30/10803178307614.jpg", 
                    precio: "1,59€"
                },
                9: {
                    nombre: "FANTA naranja zero botella 2 lts", 
                    url: "https://s1.dia.es/medias/productimages/h62/hf1/11012070932510.jpg", 
                    precio: "1,59€"
                },
            },
            bodega:{
                0: {
                    nombre: "JACK DANIELS whisky tenessee botella 70 cl", 
                    url: "https://s1.dia.es/medias/hff/h26/8865934966814.jpg", 
                    precio: "21,69€"
                },
                1: {
                    nombre: "BACARDI ron blanco superior botella 70 cl", 
                    url: "https://s2.dia.es/medias/productimages/h73/h6b/10971763441694.jpg", 
                    precio: "12,59€"
                },
                2: {
                    nombre: "TANQUERAY ginebra london dry botella 70 cl", 
                    url: "https://s0.dia.es/medias/h29/h17/10847120719902.jpg", 
                    precio: "13,59€"
                },
                3: {
                    nombre: "EL COTO vino tinto crianza DO Rioja botella 75 cl", 
                    url: "https://s1.dia.es/medias/he1/h0b/10659128705054.jpg", 
                    precio: "6,15€"
                },
                4: {
                    nombre: "BOMBAY Original ginebra london dry botella 70 cl", 
                    url: "https://s3.dia.es/medias/productimages/h00/h52/10971765735454.jpg", 
                    precio: "12,49€"
                },
                5: {
                    nombre: "PASSPORT whisky botella 70 cl", 
                    url: "https://s0.dia.es/medias/h44/h98/10660203298846.jpg", 
                    precio: "9,99€"
                },
                6: {
                    nombre: "BAJOZ vino tinto DO Toro botella 75 cl", 
                    url: "https://s1.dia.es/medias/productimages/hfc/hd5/10996233273374.jpg", 
                    precio: "3,99€"
                },
                7: {
                    nombre: "FEDERICO PATERNINA vino tinto 12 meses banda azul DO Rioja botella 75 cl", 
                    url: "https://s0.dia.es/medias/productimages/h1a/h68/10797319290910.jpg", 
                    precio: "5,99€"
                },
                8: {
                    nombre: "GORDONS ginebra botella 1 lt", 
                    url: "https://s2.dia.es/medias/h7a/h08/10847111479326.jpg", 
                    precio: "12,99€"
                },
                9: {
                    nombre: "ALVINI vermouth rosso botella 1 lt", 
                    url: "https://s3.dia.es/medias/productimages/h67/h5e/10945399848990.jpg", 
                    precio: "2,25€"
                },
            },
            congelados:{
                0: {
                    nombre: "HAAGEN DAZS helado dulce de leche tarrina 400 grs", 
                    url: "https://s3.dia.es/medias/h31/h1b/10467447963678.jpg", 
                    precio: "6,49€"
                },
                1: {
                    nombre: "OREO helado bombón caja 4 uds 260 grs", 
                    url: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202202/14/00118953905538____5__600x600.jpg", 
                    precio: "4,39€"
                },
                2: {
                    nombre: "MILKA helado cono chocolate y vainilla caja 4 uds 270 grs", 
                    url: "https://s3.dia.es/medias/h69/hf3/10660066787358.jpg", 
                    precio: "4,39€"
                },
                3: {
                    nombre: "McCain patatas fritas forno julienne bolsa 600 grs", 
                    url: "https://s1.dia.es/medias/h75/h57/10867351191582.jpg", 
                    precio: "3,09€"
                },
                4: {
                    nombre: "DIA VEGECAMPO menestra de verduras bolsa 1 kg", 
                    url: "https://s2.dia.es/medias/productimages/h51/h86/10976954679326.jpg", 
                    precio: "1,19€"
                },
                5: {
                    nombre: "NORTINDAL pack tinta de calamar 4 unidades 4 gr", 
                    url: "https://s2.dia.es/medias/he5/hcd/10324977057822.jpg", 
                    precio: "0,75€"
                },
                6: {
                    nombre: "BUITONI Forno di pietra pizza jamón y queso caja 360 grs", 
                    url: "https://s3.dia.es/medias/productimages/h97/h44/10874237452318.jpg", 
                    precio: "3,59€"
                },
                7: {
                    nombre: "DR OETKER ristorante pizza atún caja 355 grs", 
                    url: "https://s3.dia.es/medias/productimages/hcc/h34/11093296414750.jpg", 
                    precio: "3,59€"
                },
                8: {
                    nombre: "PESCANOVA calamar limpio envase 400 grs", 
                    url: "https://s2.dia.es/medias/productimages/hc3/h91/10681534545950.jpg", 
                    precio: "5,55€"
                },
                9: {
                    nombre: "MARI MARINERA gamba pelada grande bolsa 400 grs", 
                    url: "https://s2.dia.es/medias/productimages/h89/h2a/10807427399710.jpg", 
                    precio: "6,25€"
                },
            },
            refrigerados:{
                0: {
                    nombre: "Pudding de chocolate con alto contenido en proteinas y bajo en grasas YOPRO de Danone 180 g.", 
                    url: "https://www.alcampo.es/media/hac/h28/11522987622430.jpg", 
                    precio: "1,59€"
                },
                1: {
                    nombre: "Natillas de vainilla elaboradas sin gluten DANET de Danone 8 x 120 grs", 
                    url: "https://www.alcampo.es/media/hf6/h8a/9317474041886.jpg", 
                    precio: "2,99€"
                },
                2: {
                    nombre: "Kefir natural de leche de vaca de pasto EL PASTORET 500 g.", 
                    url: "https://www.alcampo.es/media/h78/h6f/9471120310302.jpg", 
                    precio: "1,68€"
                },
                3: {
                    nombre: "Flan de huevo receta tradicional, elaborado al baño maria con leche recogida diariamente DHUL 4 x 110 grs", 
                    url: "https://www.alcampo.es/media/had/h73/11385326370846.jpg", 
                    precio: "1,95€"
                },
                4: {
                    nombre: "Postre lácteo (delicias) de trufa LA LECHERA de Nestlé 2 x 125 grs", 
                    url: "https://www.alcampo.es/media/h45/h9c/10032258875422.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "Mousse de yogur natural azucarado, elaborada sin gluten DANONE 4 x 65 grs", 
                    url: "https://www.alcampo.es/media/h3e/h6b/11434522607646.jpg", 
                    precio: "2,19€"
                },
                6: {
                    nombre: "Tarrina de mantequilla sin sal CENTRAL LECHERA ASTURIANA 250 grs", 
                    url: "https://www.alcampo.es/media/h55/hbd/9280767852574.jpg", 
                    precio: "2,42€"
                },
                7: {
                    nombre: "Margarina 3/4 con sal y sin aceite de Palma TULIPÁN 450 g.", 
                    url: "https://www.alcampo.es/media/h3d/hc2/11448737398814.jpg", 
                    precio: "2,54€"
                },
                8: {
                    nombre: "Nata líquida (18 % de materia grasa) para cocinar PASCUAL 200 ml.", 
                    url: "https://www.alcampo.es/media/h44/hb3/10493030858782.jpg", 
                    precio: "1,28€"
                },
                9: {
                    nombre: "Nata montada en spray CENTRAL LECHERA ASTURIANA 250 grs", 
                    url: "https://www.alcampo.es/media/he8/hb8/8927298289694.jpg", 
                    precio: "1,98€"
                },
            },
            carniceria:{
                0: {
                    nombre: "Entrecot de vacuno (peso aprox. 330 grs)", 
                    url: "https://s2.dia.es/medias/productimages/hcf/h55/10779310227486.jpg", 
                    precio: "6,93€"
                },
                1: {
                    nombre: "pechugas enteras de pollo bandeja (peso aprox. 880 grs)", 
                    url: "https://s0.dia.es/medias/h0d/h2a/10594922561566.jpg", 
                    precio: "6,29€"
                },
                2: {
                    nombre: "preparado de carne picada de vacuno bandeja 500 grs", 
                    url: "https://s3.dia.es/medias/productimages/hcb/h11/10704616456222.jpg", 
                    precio: "3,99€"
                },
                3: {
                    nombre: "SERRANO longaniza de pavo y pollo 320 grs", 
                    url: "https://s2.dia.es/medias/productimages/hcf/hff/10676999553054.jpg", 
                    precio: "1,99€"
                },
                4: {
                    nombre: "chistorra pieza 220 grs", 
                    url: "https://s0.dia.es/medias/ha0/hdf/8822466969630.jpg", 
                    precio: "1,25€"
                },
            },
            charcuteria:{
                0: {
                    nombre: "PHILADELPHIA queso para untar original tarrina 250 grs", 
                    url: "https://s3.dia.es/medias/productimages/ha1/h08/11100149448734.jpg", 
                    precio: "2,05€"
                },
                1: {
                    nombre: "EL CASERIO queso fundido burger con cheddar en lonchas paquete 185 grs", 
                    url: "https://s0.dia.es/medias/productimages/h8e/h13/11098841120798.jpg", 
                    precio: "1,69€"
                },
                2: {
                    nombre: "SÁNCHEZ ALCARAZ jamón de cebo Ibérico 50% pieza (peso aprox. 8 Kgs)", 
                    url: "https://s3.dia.es/medias/productimages/hd3/he7/11097384484894.jpg", 
                    precio: "125€"
                },
                3: {
                    nombre: "ARGAL Bonnatur jamón cocido en finas lonchas sobre 140 grs", 
                    url: "https://s1.dia.es/medias/productimages/h81/h36/10676792197150.jpg", 
                    precio: "2,29€"
                },
                4: {
                    nombre: "ELPOZO Selección jamón curado en lonchas sobre 115 gr", 
                    url: "https://s2.dia.es/medias/productimages/hee/hed/11078460801054.jpg", 
                    precio: "1,99€"
                },
            },
            pescaderia:{
                0: {
                    nombre: "LA GULA DEL NORTE con gambas al ajillo envase 110 grs", 
                    url: "https://s1.dia.es/medias/productimages/h75/h2e/10842923106334.jpg", 
                    precio: "3,19€"
                },
                1: {
                    nombre: "GALLINA BLANCA caldo para paella de marisco envase 1 lt", 
                    url: "https://s3.dia.es/medias/hed/h7e/10594445819934.jpg", 
                    precio: "2,95€"
                },
                2: {
                    nombre: "MARI MARINERA palitos de surimi refrigeradas MSC paquete 300 grs", 
                    url: "https://s0.dia.es/medias/h50/h4a/10521864077342.jpg", 
                    precio: "1,75€"
                },
                3: {
                    nombre: "EMBUMAR rodajas de mar selectas envase 200 grs", 
                    url: "https://s2.dia.es/medias/productimages/hb5/h6a/11100151742494.jpg", 
                    precio: "4,39€"
                },
                4: {
                    nombre: "AGUINAMAR mejillones cocidos envasado al vació 1 Kg", 
                    url: "https://s1.dia.es/medias/productimages/h86/hd6/10777973030942.jpg", 
                    precio: "4,89€"
                },
            },
            frutas_y_verduras:{
                0: {
                    nombre: "Aguacate bio bandeja 400 grs", 
                    url: "https://s3.dia.es/medias/hbc/h23/9583742222366.jpg", 
                    precio: "2,89€"
                },
                1: {
                    nombre: "Kiwi bandeja 700 grs", 
                    url: "https://s2.dia.es/medias/productimages/hb7/h9e/10927281143838.jpg", 
                    precio: "2,15€"
                },
                2: {
                    nombre: "Manzana Yello bandeja 700 grs", 
                    url: "https://s1.dia.es/medias/productimages/h52/had/11007157796894.jpg", 
                    precio: "2,59€"
                },
                3: {
                    nombre: "GENUINE COCONUT Coco troceado BIO bolsa 56 grs", 
                    url: "https://s2.dia.es/medias/productimages/h60/haf/11090925584414.jpg", 
                    precio: "0,99€"
                },
                4: {
                    nombre: "Banana bio bolsa (1.2 Kg aprox.)", 
                    url: "https://s0.dia.es/medias/productimages/h72/h41/10806535192606.jpg", 
                    precio: "2,39€"
                },
                5: {
                    nombre: "Ajo BIO malla 200 grs", 
                    url: "https://s3.dia.es/medias/productimages/h6e/h6d/11016736571422.jpg", 
                    precio: "1,49€"
                },
                6: {
                    nombre: "Cilantro 20 grs", 
                    url: "https://s1.dia.es/medias/hfc/h7d/9662449287198.jpg", 
                    precio: "1,35€"
                },
                7: {
                    nombre: "Jengibre bandeja 200 grs", 
                    url: "https://s2.dia.es/medias/productimages/ha8/h54/10943702007838.jpg", 
                    precio: "1,39€"
                },
                8: {
                    nombre: "Champiñón laminado bandeja 250 grs", 
                    url: "https://s1.dia.es/medias/hee/hc1/8833925971998.jpg", 
                    precio: "1,35€"
                },
                9: {
                    nombre: "VEGECAMPO lechuga Iceberg lavada bolsa 250 grs", 
                    url: "https://s2.dia.es/medias/productimages/hfd/h7b/10987955683358.jpg", 
                    precio: "0,85€"
                },
            },
        },
    },
    {
        supermercado : "alcampo",
        categorias:{
            platos_preparados:{
                0:{
                    nombre:"ensalada veggie tarrina 200grs",
                    url:"https://s3.dia.es/medias/productimages/hab/hed/10895682732062.jpg",
                    precio:"1,75€"
                },
                1:{
                    nombre:"ensalada thai tarrina 200grs",
                    url:"https://s0.dia.es/medias/productimages/h36/h5e/10895673229342.jpg",
                    precio:"1,75€"
                },
                2: {
                    nombre: "pizza jamón y queso envase 405 grs", 
                    url: "https://s2.dia.es/medias/productimages/h0c/hea/10870041968670.jpg", 
                    precio: "2,89€"
                },
                3: {
                    nombre: "pizza de pollo envase 410 grs", 
                    url: "https://s2.dia.es/medias/productimages/hd9/h5f/10870047604766.jpg", 
                    precio: "2,89€"
                },
                4: {
                    nombre: "pizza atún y bacon envase 405 grs", 
                    url: "https://s2.dia.es/medias/productimages/hee/h98/10870043344926.jpg",
                    precio: "2,89€"
                },
                5: {
                    nombre: "tortilla de patatas fresca sin cebolla envase 600 grs",
                    url: "https://s3.dia.es/medias/productimages/h85/h1a/11060759986206.jpg",
                    precio: "2,35€"
                },
                6: {
                    nombre: "tortilla de patatas fresca con cebolla envase 600 grs",
                    url: "https://s1.dia.es/medias/productimages/h75/h49/11060760313886.jpg",
                    precio: "2,35€"
                },
                7: {
                    nombre: "tortilla de patatas fresca con chorizo envase 600 grs",
                    url: "https://s1.dia.es/medias/productimages/h8c/h0b/10952749776926.jpg",
                    precio: "2,35€"
                },
                8: {
                    nombre: "ensalada César tarrina 210 grs", 
                    url: "https://s3.dia.es/medias/productimages/h2c/h87/10987954044958.jpg", 
                    precio: "2,19€"
                },
                9: {
                    nombre: "croquetas de jamón bandeja 162 gr", 
                    url: "https://s0.dia.es/medias/productimages/he3/h20/10976989872158.jpg", 
                    precio: "2,15€"
                }
            },
            despensa:{
                0: {
                    nombre: "arroz redondo paquete 1 Kg", 
                    url: "https://s0.dia.es/medias/productimages/hb8/h42/10676834861086.jpg", 
                    precio: "1,65€"
                },
                1: {
                    nombre: "espaguetis paquete 1 Kg", 
                    url: "https://s0.dia.es/medias/productimages/h6e/h6e/10712855052318.jpg", 
                    precio: "1,25€"
                },
                2: {
                    nombre: "pasta fresca con jamón ibérico bolsa 250 grs", 
                    url: "https://s1.dia.es/medias/productimages/h99/hfb/10886789726238.jpg", 
                    precio: "2,97€"
                },
                3: {
                    nombre: "fideo cabellín paquete 500 grs", 
                    url: "https://s0.dia.es/medias/productimages/h41/hb5/10797284687902.jpg", 
                    precio: "0,87€"
                },
                4: {
                    nombre: "cereales corn flakes caja 500 grs", 
                    url: "https://s2.dia.es/medias/productimages/h10/h6d/11076215570462.jpg", 
                    precio: "2,70€"
                },
                5: {
                    nombre: "leche entera envase 1 lt PACK 6", 
                    url: "https://s1.dia.es/medias/productimages/h1e/hda/10717082779678.jpg", 
                    precio: "4,50€"
                },
                6: {
                    nombre: "cocktail frutos secos bolsa 500 grs", 
                    url: "https://s2.dia.es/medias/hbf/h18/9847302062110.jpg", 
                    precio: "2,05€"
                },
                7: {
                    nombre: "aceite de oliva extra virgen botella 750 ml", 
                    url: "https://s3.dia.es/medias/productimages/h1d/h15/11037844209694.jpg", 
                    precio: "5,75€"
                },
                8: {
                    nombre: "ajo en polvo frasco 65 grs", 
                    url: "https://s2.dia.es/medias/he2/hfc/8859405123614.jpg", 
                    precio: "0,69€"
                },
                9: {
                    nombre: "agua mineral natural botella 1.5 lt PACK 6", 
                    url: "https://s1.dia.es/medias/productimages/hf5/he5/11033721405470.jpg", 
                    precio: "4,14€"
                },
                10: {
                    nombre: "café molido 100% Colombia paquete 250 grs", 
                    url: "https://s0.dia.es/medias/productimages/hf0/h66/10837617213470.jpg", 
                    precio: "3,25€"
                },
                11: {
                    nombre: "tomate frito envase 350 grs", 
                    url: "https://s3.dia.es/medias/h4e/hcf/11023246065694.jpg", 
                    precio: "0,85€"
                },
                12: {
                    nombre: "caldo de pollo estuche 24 pastillas", 
                    url: "https://s1.dia.es/medias/h71/h15/9334522839070.jpg", 
                    precio: "0,97€"
                },
                13: {
                    nombre: "pan de molde formato familiar bolsa 700 grs", 
                    url: "https://s0.dia.es/medias/productimages/hab/h29/10786470297630.jpg", 
                    precio: "2,49€"
                },
                14: {
                    nombre: "salsa de soja botella 150 ml", 
                    url: "https://s0.dia.es/medias/productimages/h93/h6c/11094508371998.jpg", 
                    precio: "1,99€"
                },
            },
            mascotas:{
                0: {
                    nombre: "alimento para perros mini bolsa 1,5 kg", 
                    url: "https://s3.dia.es/medias/h51/h8f/10661338054686.jpg", 
                    precio: "6,39€"
                },
                1: {
                    nombre: "alimento para gatos mix buey bolsa 1,5 kg", 
                    url: "https://s2.dia.es/medias/hee/hbe/10661309218846.jpg", 
                    precio: "4,65€"
                },
                2: {
                    nombre: "alimento para perros receta tradicional bolsa 4 kg", 
                    url: "https://s3.dia.es/medias/h5f/h2f/10661355225118.jpg", 
                    precio: "6,79€"
                },
                3: {
                    nombre: "detergente para ropa y cama de mascotas botella 1 lt", 
                    url: "https://s1.dia.es/medias/heb/h68/9561295257630.jpg", 
                    precio: "5,15€"
                },
                4: {
                    nombre: "barritas con frutas para canarios bolsa 70 grs", 
                    url: "https://s2.dia.es/medias/ha5/h3e/8846782529566.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "One alimento para gatos junior bolsa 450 grs", 
                    url: "https://s2.dia.es/medias/h48/h0a/10953864413214.jpg", 
                    precio: "2,79€"
                },
                6: {
                    nombre: "cepillo raqueta caucho 1 ud", 
                    url: "https://s3.dia.es/medias/h7a/hfd/8868541169694.jpg", 
                    precio: "1,99€"
                },
                7: {
                    nombre: "pelota para perros 1 ud", 
                    url: "https://s0.dia.es/medias/h2d/h26/8872827650078.jpg", 
                    precio: "3,85€"
                },
                8: {
                    nombre: "champú para perros pelo negro bote 300 ml", 
                    url: "https://s0.dia.es/medias/h3f/h83/9390412464158.jpg", 
                    precio: "5,29€"
                },
                9: {
                    nombre: "agua de colonia fresca para perros spray 125 ml", 
                    url: "https://s2.dia.es/medias/h27/h81/9390410498078.jpg",
                    precio: "4,75€"
                },
            },
            bebe:{
                0: {
                    nombre: "champú infantil clásico bote 750 ml", 
                    url: "https://s1.dia.es/medias/h69/h99/9158125191198.jpg", 
                    precio: "2,39€"
                },
                1: {
                    nombre: "toallitas para bebés envase 80 uds", 
                    url: "https://s2.dia.es/medias/productimages/h28/h15/10954616012830.jpg", 
                    precio: "1,09€"
                },
                2: {
                    nombre: "crema protectora de pañal tubo 100 ml", 
                    url: "https://s3.dia.es/medias/productimages/h56/ha1/10939360477214.jpg", 
                    precio: "3,69€"
                },
                3: {
                    nombre: "jabon liquido infantil lavanda botella 750ml", 
                    url: "https://s1.dia.es/medias/hc1/hb0/9158100025374.jpg", 
                    precio: "1,99€"
                },
                4: {
                    nombre: "colonia infantil botella 750 ml", 
                    url: "https://s3.dia.es/medias/h07/h95/8958623023134.jpg", 
                    precio: "1,79€"
                },
                5: {
                    nombre: "leche infantil 3 bote 800 grs", 
                    url: "https://s2.dia.es/medias/productimages/h4f/h7b/10988153503774.jpg", 
                    precio: "14,99€"
                },
                6: {"nombre": "calzoncillos para niños absorbentes de 4 a 7 años paquete 10 uds", 
                    url: "https://s0.dia.es/medias/productimages/hdc/h35/10782312562718.jpg", 
                    precio: "14,49€"
                },
                7: {
                    nombre: "frutas variadas tarrito 2 x200 gr", 
                    url: "https://s3.dia.es/medias/hfa/h3c/8862312693790.jpg", 
                    precio: "1,77€"
                },
                8: {
                    nombre: "esponja especial de baño para bebé bolsa 1 ud", 
                    url: "https://s1.dia.es/medias/hce/h0a/8856386273310.jpg", 
                    precio: "4,45€"
                },
                9: {
                    nombre: "Baby talco dulces sueños para bebés bote 200 grs", 
                    url: "https://s0.dia.es/medias/productimages/h29/h59/10939392000030.jpg", 
                    precio: "3,05€"
                },
            },
            cuidado_para_el_hogar:{
                0: {
                    nombre: "ambientador neutralizador aroma lavanda spray 300 ml", 
                    url: "https://s2.dia.es/medias/hfb/h3f/9709996408862.jpg", 
                    precio: "1,15€"
                },
                1: {
                    nombre: "gel limpiador wc 3 en 1 océano botella 750 ml", 
                    url: "https://s0.dia.es/medias/h88/hc6/11030574792734.jpg", 
                    precio: "2,39€"
                },
                2: {
                    nombre: "palo rojo universal 1 ud", 
                    url: "https://s1.dia.es/medias/productimages/he7/h26/10844406022174.jpg", 
                    precio: "3,95€"
                },
                3: {
                    nombre: "estropajo salvauñas fibra verde paquete 4 uds", 
                    url: "https://s2.dia.es/medias/h01/haf/9354601299998.jpg", 
                    precio: "0,97€"
                },
                4: {
                    nombre: "ambientador eléctrico aroma aire fresco recambio 1 ud", 
                    url: "https://s2.dia.es/medias/productimages/h92/h71/10980041392158.jpg", 
                    precio: "3,79€"
                },
                5: {
                    nombre: "fregona hilo microfibras especial para suelos delicados bolsa 1 ud", 
                    url: "https://s3.dia.es/medias/h92/h7c/8872695398430.jpg", 
                    precio: "1,59€"
                },
                6: {
                    nombre: "descalcificador de lavadora en pastillas caja 15 ud", 
                    url: "https://s0.dia.es/medias/productimages/hb2/hba/10836376289310.jpg", 
                    precio: "8,49€"
                },
                7: {
                    nombre: "bayeta amarilla super absorbente y extra suave bolsa 3 uds", 
                    url: "https://s0.dia.es/medias/productimages/hf0/hfb/10949995069470.jpg", 
                    precio: "2,69€"
                },
                8: {
                    nombre: "cepillo antichoque de escoba 3 en 1", 
                    url: "https://s0.dia.es/medias/productimages/hfd/he3/11097403490334.jpg", 
                    precio: "4,65€"
                },
                9: {
                    nombre: "tijeras multiusos S/M 1 ud", 
                    url: "https://s1.dia.es/medias/h15/ha2/8959536300062.jpg", 
                    precio: "3,29€"
                },
            },
            cuidado_personal:{
                0: {
                    nombre: "enjuague bucal zero 500 ml", 
                    url: "https://s2.dia.es/medias/productimages/h74/hdc/10995930398750.jpg", 
                    precio: "5,49€"
                },
                1: {
                    nombre: "compresa super con alas bolsa 12 uds", 
                    url: "https://s3.dia.es/medias/productimages/h9b/he7/10988073418782.jpg", 
                    precio: "2,89€"
                },
                2: {
                    nombre: "tinte Negro Azulado Nº 1,1 caja 1 ud", 
                    url: "https://s2.dia.es/medias/productimages/h5f/hd4/10684455485470.jpg", 
                    precio: "4,59€"
                },
                3: {
                    nombre: "Fresh step desodorante para pies spray 150 ml", 
                    url: "https://s2.dia.es/medias/hcf/he8/9639159300126.jpg", 
                    precio: "5,50€"
                },
                4: {
                    nombre: "gel fijador efecto cemento tarro 300 ml", 
                    url: "https://s3.dia.es/medias/ha3/haf/9561293946910.jpg", 
                    precio: "3,79€"
                },
                5: {
                    nombre: "cepillo dental professional medio blíster 1 ud", 
                    url: "https://s3.dia.es/medias/h42/h43/10998992240670.jpg", 
                    precio: "2,45€"
                },
                6: {
                    nombre: "hojas de afeitar classic blíster 5 uds", 
                    url: "https://s1.dia.es/medias/h58/hd7/8963438837790.jpg", 
                    precio: "2,79€"
                },
                7: {
                    nombre: "desodorante apollo spray 150 ml", 
                    url: "https://s0.dia.es/medias/hb3/h12/10465571536926.jpg", 
                    precio: "3,99€"
                },
                8: {
                    nombre: "jabón de manos pura y sensitiva pastilla 100 grs", 
                    url: "https://s1.dia.es/medias/h57/he9/10770326847518.jpg", 
                    precio: "1,49€"
                },
                9: {
                    nombre: "cepillo dental eléctrico floss tip 360º blíster 1 uds", 
                    url: "https://s2.dia.es/medias/productimages/hf7/hcc/11053856489502.jpg", 
                    precio: "9,99€"
                },
            },
            bebidas:{
                0: {
                    nombre: "cerveza clásica lata 33 cl", 
                    url: "https://s2.dia.es/medias/hed/h6b/11078438518814.jpg", 
                    precio: "0,50€"
                },
                1: {
                    nombre: "cerveza lata 50 cl", 
                    url: "https://s3.dia.es/medias/h5f/ha9/9626455638046.jpg", 
                    precio: "0,99€"
                },
                2: {
                    nombre: "bebida energética lata 25 cl", 
                    url: "https://s1.dia.es/medias/h59/h22/10908046262302.jpg", 
                    precio: "0,99€"
                },
                3: {
                    nombre: "limón zero botella 2 lts", 
                    url: "https://s0.dia.es/medias/productimages/h4a/hce/11076053041182.jpg", 
                    precio: "1,59€"
                },
                4: {
                    nombre: "sprite botella 2 lts", 
                    url: "https://s0.dia.es/medias/hd2/hc6/10742032728094.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "COCA COLA zero botella 2 lts", 
                    url: "https://s0.dia.es/medias/hf2/h42/11075969744926.jpg", 
                    precio: "1,84€"
                },
                6: {
                    nombre: "sunny delight sabor florida botella 310 ml", 
                    url: "https://s3.dia.es/medias/productimages/h34/ha7/10742378332190.jpg", 
                    precio: "0,89€"
                },
                7: {
                    nombre: "BUDWEISER cerveza pack 6 botellas 25 cl", 
                    url: "https://s2.dia.es/medias/productimages/he2/ha4/11069566189598.jpg", 
                    precio: "4,49€"
                },
                8: {
                    nombre: "MONSTER bebida energética green lata 50 cl", 
                    url: "https://s1.dia.es/medias/productimages/h7f/h30/10803178307614.jpg", 
                    precio: "1,59€"
                },
                9: {
                    nombre: "FANTA naranja zero botella 2 lts", 
                    url: "https://s1.dia.es/medias/productimages/h62/hf1/11012070932510.jpg", 
                    precio: "1,59€"
                },
            },
            bodega:{
                0: {
                    nombre: "JACK DANIELS whisky tenessee botella 70 cl", 
                    url: "https://s1.dia.es/medias/hff/h26/8865934966814.jpg", 
                    precio: "21,69€"
                },
                1: {
                    nombre: "BACARDI ron blanco superior botella 70 cl", 
                    url: "https://s2.dia.es/medias/productimages/h73/h6b/10971763441694.jpg", 
                    precio: "12,59€"
                },
                2: {
                    nombre: "TANQUERAY ginebra london dry botella 70 cl", 
                    url: "https://s0.dia.es/medias/h29/h17/10847120719902.jpg", 
                    precio: "13,59€"
                },
                3: {
                    nombre: "EL COTO vino tinto crianza DO Rioja botella 75 cl", 
                    url: "https://s1.dia.es/medias/he1/h0b/10659128705054.jpg", 
                    precio: "6,15€"
                },
                4: {
                    nombre: "BOMBAY Original ginebra london dry botella 70 cl", 
                    url: "https://s3.dia.es/medias/productimages/h00/h52/10971765735454.jpg", 
                    precio: "12,49€"
                },
                5: {
                    nombre: "PASSPORT whisky botella 70 cl", 
                    url: "https://s0.dia.es/medias/h44/h98/10660203298846.jpg", 
                    precio: "9,99€"
                },
                6: {
                    nombre: "BAJOZ vino tinto DO Toro botella 75 cl", 
                    url: "https://s1.dia.es/medias/productimages/hfc/hd5/10996233273374.jpg", 
                    precio: "3,99€"
                },
                7: {
                    nombre: "FEDERICO PATERNINA vino tinto 12 meses banda azul DO Rioja botella 75 cl", 
                    url: "https://s0.dia.es/medias/productimages/h1a/h68/10797319290910.jpg", 
                    precio: "5,99€"
                },
                8: {
                    nombre: "GORDONS ginebra botella 1 lt", 
                    url: "https://s2.dia.es/medias/h7a/h08/10847111479326.jpg", 
                    precio: "12,99€"
                },
                9: {
                    nombre: "ALVINI vermouth rosso botella 1 lt", 
                    url: "https://s3.dia.es/medias/productimages/h67/h5e/10945399848990.jpg", 
                    precio: "2,25€"
                },
            },
            congelados:{
                0: {
                    nombre: "HAAGEN DAZS helado dulce de leche tarrina 400 grs", 
                    url: "https://s3.dia.es/medias/h31/h1b/10467447963678.jpg", 
                    precio: "6,49€"
                },
                1: {
                    nombre: "OREO helado bombón caja 4 uds 260 grs", 
                    url: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202202/14/00118953905538____5__600x600.jpg", 
                    precio: "4,39€"
                },
                2: {
                    nombre: "MILKA helado cono chocolate y vainilla caja 4 uds 270 grs", 
                    url: "https://s3.dia.es/medias/h69/hf3/10660066787358.jpg", 
                    precio: "4,39€"
                },
                3: {
                    nombre: "McCain patatas fritas forno julienne bolsa 600 grs", 
                    url: "https://s1.dia.es/medias/h75/h57/10867351191582.jpg", 
                    precio: "3,09€"
                },
                4: {
                    nombre: "DIA VEGECAMPO menestra de verduras bolsa 1 kg", 
                    url: "https://s2.dia.es/medias/productimages/h51/h86/10976954679326.jpg", 
                    precio: "1,19€"
                },
                5: {
                    nombre: "NORTINDAL pack tinta de calamar 4 unidades 4 gr", 
                    url: "https://s2.dia.es/medias/he5/hcd/10324977057822.jpg", 
                    precio: "0,75€"
                },
                6: {
                    nombre: "BUITONI Forno di pietra pizza jamón y queso caja 360 grs", 
                    url: "https://s3.dia.es/medias/productimages/h97/h44/10874237452318.jpg", 
                    precio: "3,59€"
                },
                7: {
                    nombre: "DR OETKER ristorante pizza atún caja 355 grs", 
                    url: "https://s3.dia.es/medias/productimages/hcc/h34/11093296414750.jpg", 
                    precio: "3,59€"
                },
                8: {
                    nombre: "PESCANOVA calamar limpio envase 400 grs", 
                    url: "https://s2.dia.es/medias/productimages/hc3/h91/10681534545950.jpg", 
                    precio: "5,55€"
                },
                9: {
                    nombre: "MARI MARINERA gamba pelada grande bolsa 400 grs", 
                    url: "https://s2.dia.es/medias/productimages/h89/h2a/10807427399710.jpg", 
                    precio: "6,25€"
                },
            },
            refrigerados:{
                0: {
                    nombre: "Pudding de chocolate con alto contenido en proteinas y bajo en grasas YOPRO de Danone 180 g.", 
                    url: "https://www.alcampo.es/media/hac/h28/11522987622430.jpg", 
                    precio: "1,59€"
                },
                1: {
                    nombre: "Natillas de vainilla elaboradas sin gluten DANET de Danone 8 x 120 grs", 
                    url: "https://www.alcampo.es/media/hf6/h8a/9317474041886.jpg", 
                    precio: "2,99€"
                },
                2: {
                    nombre: "Kefir natural de leche de vaca de pasto EL PASTORET 500 g.", 
                    url: "https://www.alcampo.es/media/h78/h6f/9471120310302.jpg", 
                    precio: "1,68€"
                },
                3: {
                    nombre: "Flan de huevo receta tradicional, elaborado al baño maria con leche recogida diariamente DHUL 4 x 110 grs", 
                    url: "https://www.alcampo.es/media/had/h73/11385326370846.jpg", 
                    precio: "1,95€"
                },
                4: {
                    nombre: "Postre lácteo (delicias) de trufa LA LECHERA de Nestlé 2 x 125 grs", 
                    url: "https://www.alcampo.es/media/h45/h9c/10032258875422.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "Mousse de yogur natural azucarado, elaborada sin gluten DANONE 4 x 65 grs", 
                    url: "https://www.alcampo.es/media/h3e/h6b/11434522607646.jpg", 
                    precio: "2,19€"
                },
                6: {
                    nombre: "Tarrina de mantequilla sin sal CENTRAL LECHERA ASTURIANA 250 grs", 
                    url: "https://www.alcampo.es/media/h55/hbd/9280767852574.jpg", 
                    precio: "2,42€"
                },
                7: {
                    nombre: "Margarina 3/4 con sal y sin aceite de Palma TULIPÁN 450 g.", 
                    url: "https://www.alcampo.es/media/h3d/hc2/11448737398814.jpg", 
                    precio: "2,54€"
                },
                8: {
                    nombre: "Nata líquida (18 % de materia grasa) para cocinar PASCUAL 200 ml.", 
                    url: "https://www.alcampo.es/media/h44/hb3/10493030858782.jpg", 
                    precio: "1,28€"
                },
                9: {
                    nombre: "Nata montada en spray CENTRAL LECHERA ASTURIANA 250 grs", 
                    url: "https://www.alcampo.es/media/he8/hb8/8927298289694.jpg", 
                    precio: "1,98€"
                },
            },
            carniceria:{
                0: {
                    nombre: "Entrecot de vacuno (peso aprox. 330 grs)", 
                    url: "https://s2.dia.es/medias/productimages/hcf/h55/10779310227486.jpg", 
                    precio: "6,93€"
                },
                1: {
                    nombre: "pechugas enteras de pollo bandeja (peso aprox. 880 grs)", 
                    url: "https://s0.dia.es/medias/h0d/h2a/10594922561566.jpg", 
                    precio: "6,29€"
                },
                2: {
                    nombre: "preparado de carne picada de vacuno bandeja 500 grs", 
                    url: "https://s3.dia.es/medias/productimages/hcb/h11/10704616456222.jpg", 
                    precio: "3,99€"
                },
                3: {
                    nombre: "SERRANO longaniza de pavo y pollo 320 grs", 
                    url: "https://s2.dia.es/medias/productimages/hcf/hff/10676999553054.jpg", 
                    precio: "1,99€"
                },
                4: {
                    nombre: "chistorra pieza 220 grs", 
                    url: "https://s0.dia.es/medias/ha0/hdf/8822466969630.jpg", 
                    precio: "1,25€"
                },
            },
            charcuteria:{
                0: {
                    nombre: "PHILADELPHIA queso para untar original tarrina 250 grs", 
                    url: "https://s3.dia.es/medias/productimages/ha1/h08/11100149448734.jpg", 
                    precio: "2,05€"
                },
                1: {
                    nombre: "EL CASERIO queso fundido burger con cheddar en lonchas paquete 185 grs", 
                    url: "https://s0.dia.es/medias/productimages/h8e/h13/11098841120798.jpg", 
                    precio: "1,69€"
                },
                2: {
                    nombre: "SÁNCHEZ ALCARAZ jamón de cebo Ibérico 50% pieza (peso aprox. 8 Kgs)", 
                    url: "https://s3.dia.es/medias/productimages/hd3/he7/11097384484894.jpg", 
                    precio: "125€"
                },
                3: {
                    nombre: "ARGAL Bonnatur jamón cocido en finas lonchas sobre 140 grs", 
                    url: "https://s1.dia.es/medias/productimages/h81/h36/10676792197150.jpg", 
                    precio: "2,29€"
                },
                4: {
                    nombre: "ELPOZO Selección jamón curado en lonchas sobre 115 gr", 
                    url: "https://s2.dia.es/medias/productimages/hee/hed/11078460801054.jpg", 
                    precio: "1,99€"
                },
            },
            pescaderia:{
                0: {
                    nombre: "LA GULA DEL NORTE con gambas al ajillo envase 110 grs", 
                    url: "https://s1.dia.es/medias/productimages/h75/h2e/10842923106334.jpg", 
                    precio: "3,19€"
                },
                1: {
                    nombre: "GALLINA BLANCA caldo para paella de marisco envase 1 lt", 
                    url: "https://s3.dia.es/medias/hed/h7e/10594445819934.jpg", 
                    precio: "2,95€"
                },
                2: {
                    nombre: "MARI MARINERA palitos de surimi refrigeradas MSC paquete 300 grs", 
                    url: "https://s0.dia.es/medias/h50/h4a/10521864077342.jpg", 
                    precio: "1,75€"
                },
                3: {
                    nombre: "EMBUMAR rodajas de mar selectas envase 200 grs", 
                    url: "https://s2.dia.es/medias/productimages/hb5/h6a/11100151742494.jpg", 
                    precio: "4,39€"
                },
                4: {
                    nombre: "AGUINAMAR mejillones cocidos envasado al vació 1 Kg", 
                    url: "https://s1.dia.es/medias/productimages/h86/hd6/10777973030942.jpg", 
                    precio: "4,89€"
                },
            },
            frutas_y_verduras:{
                0: {
                    nombre: "Aguacate bio bandeja 400 grs", 
                    url: "https://s3.dia.es/medias/hbc/h23/9583742222366.jpg", 
                    precio: "2,89€"
                },
                1: {
                    nombre: "Kiwi bandeja 700 grs", 
                    url: "https://s2.dia.es/medias/productimages/hb7/h9e/10927281143838.jpg", 
                    precio: "2,15€"
                },
                2: {
                    nombre: "Manzana Yello bandeja 700 grs", 
                    url: "https://s1.dia.es/medias/productimages/h52/had/11007157796894.jpg", 
                    precio: "2,59€"
                },
                3: {
                    nombre: "GENUINE COCONUT Coco troceado BIO bolsa 56 grs", 
                    url: "https://s2.dia.es/medias/productimages/h60/haf/11090925584414.jpg", 
                    precio: "0,99€"
                },
                4: {
                    nombre: "Banana bio bolsa (1.2 Kg aprox.)", 
                    url: "https://s0.dia.es/medias/productimages/h72/h41/10806535192606.jpg", 
                    precio: "2,39€"
                },
                5: {
                    nombre: "Ajo BIO malla 200 grs", 
                    url: "https://s3.dia.es/medias/productimages/h6e/h6d/11016736571422.jpg", 
                    precio: "1,49€"
                },
                6: {
                    nombre: "Cilantro 20 grs", 
                    url: "https://s1.dia.es/medias/hfc/h7d/9662449287198.jpg", 
                    precio: "1,35€"
                },
                7: {
                    nombre: "Jengibre bandeja 200 grs", 
                    url: "https://s2.dia.es/medias/productimages/ha8/h54/10943702007838.jpg", 
                    precio: "1,39€"
                },
                8: {
                    nombre: "Champiñón laminado bandeja 250 grs", 
                    url: "https://s1.dia.es/medias/hee/hc1/8833925971998.jpg", 
                    precio: "1,35€"
                },
                9: {
                    nombre: "VEGECAMPO lechuga Iceberg lavada bolsa 250 grs", 
                    url: "https://s2.dia.es/medias/productimages/hfd/h7b/10987955683358.jpg", 
                    precio: "0,85€"
                },
            },
        },
    },
    {
        supermercado : "lidl",
        categorias:{
            platos_preparados:{
                0:{
                    nombre:"ensalada veggie tarrina 200grs",
                    url:"https://s3.dia.es/medias/productimages/hab/hed/10895682732062.jpg",
                    precio:"1,75€"
                },
                1:{
                    nombre:"ensalada thai tarrina 200grs",
                    url:"https://s0.dia.es/medias/productimages/h36/h5e/10895673229342.jpg",
                    precio:"1,75€"
                },
                2: {
                    nombre: "pizza jamón y queso envase 405 grs", 
                    url: "https://s2.dia.es/medias/productimages/h0c/hea/10870041968670.jpg", 
                    precio: "2,89€"
                },
                3: {
                    nombre: "pizza de pollo envase 410 grs", 
                    url: "https://s2.dia.es/medias/productimages/hd9/h5f/10870047604766.jpg", 
                    precio: "2,89€"
                },
                4: {
                    nombre: "pizza atún y bacon envase 405 grs", 
                    url: "https://s2.dia.es/medias/productimages/hee/h98/10870043344926.jpg",
                    precio: "2,89€"
                },
                5: {
                    nombre: "tortilla de patatas fresca sin cebolla envase 600 grs",
                    url: "https://s3.dia.es/medias/productimages/h85/h1a/11060759986206.jpg",
                    precio: "2,35€"
                },
                6: {
                    nombre: "tortilla de patatas fresca con cebolla envase 600 grs",
                    url: "https://s1.dia.es/medias/productimages/h75/h49/11060760313886.jpg",
                    precio: "2,35€"
                },
                7: {
                    nombre: "tortilla de patatas fresca con chorizo envase 600 grs",
                    url: "https://s1.dia.es/medias/productimages/h8c/h0b/10952749776926.jpg",
                    precio: "2,35€"
                },
                8: {
                    nombre: "ensalada César tarrina 210 grs", 
                    url: "https://s3.dia.es/medias/productimages/h2c/h87/10987954044958.jpg", 
                    precio: "2,19€"
                },
                9: {
                    nombre: "croquetas de jamón bandeja 162 gr", 
                    url: "https://s0.dia.es/medias/productimages/he3/h20/10976989872158.jpg", 
                    precio: "2,15€"
                }
            },
            despensa:{
                0: {
                    nombre: "arroz redondo paquete 1 Kg", 
                    url: "https://s0.dia.es/medias/productimages/hb8/h42/10676834861086.jpg", 
                    precio: "1,65€"
                },
                1: {
                    nombre: "espaguetis paquete 1 Kg", 
                    url: "https://s0.dia.es/medias/productimages/h6e/h6e/10712855052318.jpg", 
                    precio: "1,25€"
                },
                2: {
                    nombre: "pasta fresca con jamón ibérico bolsa 250 grs", 
                    url: "https://s1.dia.es/medias/productimages/h99/hfb/10886789726238.jpg", 
                    precio: "2,97€"
                },
                3: {
                    nombre: "fideo cabellín paquete 500 grs", 
                    url: "https://s0.dia.es/medias/productimages/h41/hb5/10797284687902.jpg", 
                    precio: "0,87€"
                },
                4: {
                    nombre: "cereales corn flakes caja 500 grs", 
                    url: "https://s2.dia.es/medias/productimages/h10/h6d/11076215570462.jpg", 
                    precio: "2,70€"
                },
                5: {
                    nombre: "leche entera envase 1 lt PACK 6", 
                    url: "https://s1.dia.es/medias/productimages/h1e/hda/10717082779678.jpg", 
                    precio: "4,50€"
                },
                6: {
                    nombre: "cocktail frutos secos bolsa 500 grs", 
                    url: "https://s2.dia.es/medias/hbf/h18/9847302062110.jpg", 
                    precio: "2,05€"
                },
                7: {
                    nombre: "aceite de oliva extra virgen botella 750 ml", 
                    url: "https://s3.dia.es/medias/productimages/h1d/h15/11037844209694.jpg", 
                    precio: "5,75€"
                },
                8: {
                    nombre: "ajo en polvo frasco 65 grs", 
                    url: "https://s2.dia.es/medias/he2/hfc/8859405123614.jpg", 
                    precio: "0,69€"
                },
                9: {
                    nombre: "agua mineral natural botella 1.5 lt PACK 6", 
                    url: "https://s1.dia.es/medias/productimages/hf5/he5/11033721405470.jpg", 
                    precio: "4,14€"
                },
                10: {
                    nombre: "café molido 100% Colombia paquete 250 grs", 
                    url: "https://s0.dia.es/medias/productimages/hf0/h66/10837617213470.jpg", 
                    precio: "3,25€"
                },
                11: {
                    nombre: "tomate frito envase 350 grs", 
                    url: "https://s3.dia.es/medias/h4e/hcf/11023246065694.jpg", 
                    precio: "0,85€"
                },
                12: {
                    nombre: "caldo de pollo estuche 24 pastillas", 
                    url: "https://s1.dia.es/medias/h71/h15/9334522839070.jpg", 
                    precio: "0,97€"
                },
                13: {
                    nombre: "pan de molde formato familiar bolsa 700 grs", 
                    url: "https://s0.dia.es/medias/productimages/hab/h29/10786470297630.jpg", 
                    precio: "2,49€"
                },
                14: {
                    nombre: "salsa de soja botella 150 ml", 
                    url: "https://s0.dia.es/medias/productimages/h93/h6c/11094508371998.jpg", 
                    precio: "1,99€"
                },
            },
            mascotas:{
                0: {
                    nombre: "alimento para perros mini bolsa 1,5 kg", 
                    url: "https://s3.dia.es/medias/h51/h8f/10661338054686.jpg", 
                    precio: "6,39€"
                },
                1: {
                    nombre: "alimento para gatos mix buey bolsa 1,5 kg", 
                    url: "https://s2.dia.es/medias/hee/hbe/10661309218846.jpg", 
                    precio: "4,65€"
                },
                2: {
                    nombre: "alimento para perros receta tradicional bolsa 4 kg", 
                    url: "https://s3.dia.es/medias/h5f/h2f/10661355225118.jpg", 
                    precio: "6,79€"
                },
                3: {
                    nombre: "detergente para ropa y cama de mascotas botella 1 lt", 
                    url: "https://s1.dia.es/medias/heb/h68/9561295257630.jpg", 
                    precio: "5,15€"
                },
                4: {
                    nombre: "barritas con frutas para canarios bolsa 70 grs", 
                    url: "https://s2.dia.es/medias/ha5/h3e/8846782529566.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "One alimento para gatos junior bolsa 450 grs", 
                    url: "https://s2.dia.es/medias/h48/h0a/10953864413214.jpg", 
                    precio: "2,79€"
                },
                6: {
                    nombre: "cepillo raqueta caucho 1 ud", 
                    url: "https://s3.dia.es/medias/h7a/hfd/8868541169694.jpg", 
                    precio: "1,99€"
                },
                7: {
                    nombre: "pelota para perros 1 ud", 
                    url: "https://s0.dia.es/medias/h2d/h26/8872827650078.jpg", 
                    precio: "3,85€"
                },
                8: {
                    nombre: "champú para perros pelo negro bote 300 ml", 
                    url: "https://s0.dia.es/medias/h3f/h83/9390412464158.jpg", 
                    precio: "5,29€"
                },
                9: {
                    nombre: "agua de colonia fresca para perros spray 125 ml", 
                    url: "https://s2.dia.es/medias/h27/h81/9390410498078.jpg",
                    precio: "4,75€"
                },
            },
            bebe:{
                0: {
                    nombre: "champú infantil clásico bote 750 ml", 
                    url: "https://s1.dia.es/medias/h69/h99/9158125191198.jpg", 
                    precio: "2,39€"
                },
                1: {
                    nombre: "toallitas para bebés envase 80 uds", 
                    url: "https://s2.dia.es/medias/productimages/h28/h15/10954616012830.jpg", 
                    precio: "1,09€"
                },
                2: {
                    nombre: "crema protectora de pañal tubo 100 ml", 
                    url: "https://s3.dia.es/medias/productimages/h56/ha1/10939360477214.jpg", 
                    precio: "3,69€"
                },
                3: {
                    nombre: "jabon liquido infantil lavanda botella 750ml", 
                    url: "https://s1.dia.es/medias/hc1/hb0/9158100025374.jpg", 
                    precio: "1,99€"
                },
                4: {
                    nombre: "colonia infantil botella 750 ml", 
                    url: "https://s3.dia.es/medias/h07/h95/8958623023134.jpg", 
                    precio: "1,79€"
                },
                5: {
                    nombre: "leche infantil 3 bote 800 grs", 
                    url: "https://s2.dia.es/medias/productimages/h4f/h7b/10988153503774.jpg", 
                    precio: "14,99€"
                },
                6: {"nombre": "calzoncillos para niños absorbentes de 4 a 7 años paquete 10 uds", 
                    url: "https://s0.dia.es/medias/productimages/hdc/h35/10782312562718.jpg", 
                    precio: "14,49€"
                },
                7: {
                    nombre: "frutas variadas tarrito 2 x200 gr", 
                    url: "https://s3.dia.es/medias/hfa/h3c/8862312693790.jpg", 
                    precio: "1,77€"
                },
                8: {
                    nombre: "esponja especial de baño para bebé bolsa 1 ud", 
                    url: "https://s1.dia.es/medias/hce/h0a/8856386273310.jpg", 
                    precio: "4,45€"
                },
                9: {
                    nombre: "Baby talco dulces sueños para bebés bote 200 grs", 
                    url: "https://s0.dia.es/medias/productimages/h29/h59/10939392000030.jpg", 
                    precio: "3,05€"
                },
            },
            cuidado_para_el_hogar:{
                0: {
                    nombre: "ambientador neutralizador aroma lavanda spray 300 ml", 
                    url: "https://s2.dia.es/medias/hfb/h3f/9709996408862.jpg", 
                    precio: "1,15€"
                },
                1: {
                    nombre: "gel limpiador wc 3 en 1 océano botella 750 ml", 
                    url: "https://s0.dia.es/medias/h88/hc6/11030574792734.jpg", 
                    precio: "2,39€"
                },
                2: {
                    nombre: "palo rojo universal 1 ud", 
                    url: "https://s1.dia.es/medias/productimages/he7/h26/10844406022174.jpg", 
                    precio: "3,95€"
                },
                3: {
                    nombre: "estropajo salvauñas fibra verde paquete 4 uds", 
                    url: "https://s2.dia.es/medias/h01/haf/9354601299998.jpg", 
                    precio: "0,97€"
                },
                4: {
                    nombre: "ambientador eléctrico aroma aire fresco recambio 1 ud", 
                    url: "https://s2.dia.es/medias/productimages/h92/h71/10980041392158.jpg", 
                    precio: "3,79€"
                },
                5: {
                    nombre: "fregona hilo microfibras especial para suelos delicados bolsa 1 ud", 
                    url: "https://s3.dia.es/medias/h92/h7c/8872695398430.jpg", 
                    precio: "1,59€"
                },
                6: {
                    nombre: "descalcificador de lavadora en pastillas caja 15 ud", 
                    url: "https://s0.dia.es/medias/productimages/hb2/hba/10836376289310.jpg", 
                    precio: "8,49€"
                },
                7: {
                    nombre: "bayeta amarilla super absorbente y extra suave bolsa 3 uds", 
                    url: "https://s0.dia.es/medias/productimages/hf0/hfb/10949995069470.jpg", 
                    precio: "2,69€"
                },
                8: {
                    nombre: "cepillo antichoque de escoba 3 en 1", 
                    url: "https://s0.dia.es/medias/productimages/hfd/he3/11097403490334.jpg", 
                    precio: "4,65€"
                },
                9: {
                    nombre: "tijeras multiusos S/M 1 ud", 
                    url: "https://s1.dia.es/medias/h15/ha2/8959536300062.jpg", 
                    precio: "3,29€"
                },
            },
            cuidado_personal:{
                0: {
                    nombre: "enjuague bucal zero 500 ml", 
                    url: "https://s2.dia.es/medias/productimages/h74/hdc/10995930398750.jpg", 
                    precio: "5,49€"
                },
                1: {
                    nombre: "compresa super con alas bolsa 12 uds", 
                    url: "https://s3.dia.es/medias/productimages/h9b/he7/10988073418782.jpg", 
                    precio: "2,89€"
                },
                2: {
                    nombre: "tinte Negro Azulado Nº 1,1 caja 1 ud", 
                    url: "https://s2.dia.es/medias/productimages/h5f/hd4/10684455485470.jpg", 
                    precio: "4,59€"
                },
                3: {
                    nombre: "Fresh step desodorante para pies spray 150 ml", 
                    url: "https://s2.dia.es/medias/hcf/he8/9639159300126.jpg", 
                    precio: "5,50€"
                },
                4: {
                    nombre: "gel fijador efecto cemento tarro 300 ml", 
                    url: "https://s3.dia.es/medias/ha3/haf/9561293946910.jpg", 
                    precio: "3,79€"
                },
                5: {
                    nombre: "cepillo dental professional medio blíster 1 ud", 
                    url: "https://s3.dia.es/medias/h42/h43/10998992240670.jpg", 
                    precio: "2,45€"
                },
                6: {
                    nombre: "hojas de afeitar classic blíster 5 uds", 
                    url: "https://s1.dia.es/medias/h58/hd7/8963438837790.jpg", 
                    precio: "2,79€"
                },
                7: {
                    nombre: "desodorante apollo spray 150 ml", 
                    url: "https://s0.dia.es/medias/hb3/h12/10465571536926.jpg", 
                    precio: "3,99€"
                },
                8: {
                    nombre: "jabón de manos pura y sensitiva pastilla 100 grs", 
                    url: "https://s1.dia.es/medias/h57/he9/10770326847518.jpg", 
                    precio: "1,49€"
                },
                9: {
                    nombre: "cepillo dental eléctrico floss tip 360º blíster 1 uds", 
                    url: "https://s2.dia.es/medias/productimages/hf7/hcc/11053856489502.jpg", 
                    precio: "9,99€"
                },
            },
            bebidas:{
                0: {
                    nombre: "cerveza clásica lata 33 cl", 
                    url: "https://s2.dia.es/medias/hed/h6b/11078438518814.jpg", 
                    precio: "0,50€"
                },
                1: {
                    nombre: "cerveza lata 50 cl", 
                    url: "https://s3.dia.es/medias/h5f/ha9/9626455638046.jpg", 
                    precio: "0,99€"
                },
                2: {
                    nombre: "bebida energética lata 25 cl", 
                    url: "https://s1.dia.es/medias/h59/h22/10908046262302.jpg", 
                    precio: "0,99€"
                },
                3: {
                    nombre: "limón zero botella 2 lts", 
                    url: "https://s0.dia.es/medias/productimages/h4a/hce/11076053041182.jpg", 
                    precio: "1,59€"
                },
                4: {
                    nombre: "sprite botella 2 lts", 
                    url: "https://s0.dia.es/medias/hd2/hc6/10742032728094.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "COCA COLA zero botella 2 lts", 
                    url: "https://s0.dia.es/medias/hf2/h42/11075969744926.jpg", 
                    precio: "1,84€"
                },
                6: {
                    nombre: "sunny delight sabor florida botella 310 ml", 
                    url: "https://s3.dia.es/medias/productimages/h34/ha7/10742378332190.jpg", 
                    precio: "0,89€"
                },
                7: {
                    nombre: "BUDWEISER cerveza pack 6 botellas 25 cl", 
                    url: "https://s2.dia.es/medias/productimages/he2/ha4/11069566189598.jpg", 
                    precio: "4,49€"
                },
                8: {
                    nombre: "MONSTER bebida energética green lata 50 cl", 
                    url: "https://s1.dia.es/medias/productimages/h7f/h30/10803178307614.jpg", 
                    precio: "1,59€"
                },
                9: {
                    nombre: "FANTA naranja zero botella 2 lts", 
                    url: "https://s1.dia.es/medias/productimages/h62/hf1/11012070932510.jpg", 
                    precio: "1,59€"
                },
            },
            bodega:{
                0: {
                    nombre: "JACK DANIELS whisky tenessee botella 70 cl", 
                    url: "https://s1.dia.es/medias/hff/h26/8865934966814.jpg", 
                    precio: "21,69€"
                },
                1: {
                    nombre: "BACARDI ron blanco superior botella 70 cl", 
                    url: "https://s2.dia.es/medias/productimages/h73/h6b/10971763441694.jpg", 
                    precio: "12,59€"
                },
                2: {
                    nombre: "TANQUERAY ginebra london dry botella 70 cl", 
                    url: "https://s0.dia.es/medias/h29/h17/10847120719902.jpg", 
                    precio: "13,59€"
                },
                3: {
                    nombre: "EL COTO vino tinto crianza DO Rioja botella 75 cl", 
                    url: "https://s1.dia.es/medias/he1/h0b/10659128705054.jpg", 
                    precio: "6,15€"
                },
                4: {
                    nombre: "BOMBAY Original ginebra london dry botella 70 cl", 
                    url: "https://s3.dia.es/medias/productimages/h00/h52/10971765735454.jpg", 
                    precio: "12,49€"
                },
                5: {
                    nombre: "PASSPORT whisky botella 70 cl", 
                    url: "https://s0.dia.es/medias/h44/h98/10660203298846.jpg", 
                    precio: "9,99€"
                },
                6: {
                    nombre: "BAJOZ vino tinto DO Toro botella 75 cl", 
                    url: "https://s1.dia.es/medias/productimages/hfc/hd5/10996233273374.jpg", 
                    precio: "3,99€"
                },
                7: {
                    nombre: "FEDERICO PATERNINA vino tinto 12 meses banda azul DO Rioja botella 75 cl", 
                    url: "https://s0.dia.es/medias/productimages/h1a/h68/10797319290910.jpg", 
                    precio: "5,99€"
                },
                8: {
                    nombre: "GORDONS ginebra botella 1 lt", 
                    url: "https://s2.dia.es/medias/h7a/h08/10847111479326.jpg", 
                    precio: "12,99€"
                },
                9: {
                    nombre: "ALVINI vermouth rosso botella 1 lt", 
                    url: "https://s3.dia.es/medias/productimages/h67/h5e/10945399848990.jpg", 
                    precio: "2,25€"
                },
            },
            congelados:{
                0: {
                    nombre: "HAAGEN DAZS helado dulce de leche tarrina 400 grs", 
                    url: "https://s3.dia.es/medias/h31/h1b/10467447963678.jpg", 
                    precio: "6,49€"
                },
                1: {
                    nombre: "OREO helado bombón caja 4 uds 260 grs", 
                    url: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202202/14/00118953905538____5__600x600.jpg", 
                    precio: "4,39€"
                },
                2: {
                    nombre: "MILKA helado cono chocolate y vainilla caja 4 uds 270 grs", 
                    url: "https://s3.dia.es/medias/h69/hf3/10660066787358.jpg", 
                    precio: "4,39€"
                },
                3: {
                    nombre: "McCain patatas fritas forno julienne bolsa 600 grs", 
                    url: "https://s1.dia.es/medias/h75/h57/10867351191582.jpg", 
                    precio: "3,09€"
                },
                4: {
                    nombre: "DIA VEGECAMPO menestra de verduras bolsa 1 kg", 
                    url: "https://s2.dia.es/medias/productimages/h51/h86/10976954679326.jpg", 
                    precio: "1,19€"
                },
                5: {
                    nombre: "NORTINDAL pack tinta de calamar 4 unidades 4 gr", 
                    url: "https://s2.dia.es/medias/he5/hcd/10324977057822.jpg", 
                    precio: "0,75€"
                },
                6: {
                    nombre: "BUITONI Forno di pietra pizza jamón y queso caja 360 grs", 
                    url: "https://s3.dia.es/medias/productimages/h97/h44/10874237452318.jpg", 
                    precio: "3,59€"
                },
                7: {
                    nombre: "DR OETKER ristorante pizza atún caja 355 grs", 
                    url: "https://s3.dia.es/medias/productimages/hcc/h34/11093296414750.jpg", 
                    precio: "3,59€"
                },
                8: {
                    nombre: "PESCANOVA calamar limpio envase 400 grs", 
                    url: "https://s2.dia.es/medias/productimages/hc3/h91/10681534545950.jpg", 
                    precio: "5,55€"
                },
                9: {
                    nombre: "MARI MARINERA gamba pelada grande bolsa 400 grs", 
                    url: "https://s2.dia.es/medias/productimages/h89/h2a/10807427399710.jpg", 
                    precio: "6,25€"
                },
            },
            refrigerados:{
                0: {
                    nombre: "Pudding de chocolate con alto contenido en proteinas y bajo en grasas YOPRO de Danone 180 g.", 
                    url: "https://www.alcampo.es/media/hac/h28/11522987622430.jpg", 
                    precio: "1,59€"
                },
                1: {
                    nombre: "Natillas de vainilla elaboradas sin gluten DANET de Danone 8 x 120 grs", 
                    url: "https://www.alcampo.es/media/hf6/h8a/9317474041886.jpg", 
                    precio: "2,99€"
                },
                2: {
                    nombre: "Kefir natural de leche de vaca de pasto EL PASTORET 500 g.", 
                    url: "https://www.alcampo.es/media/h78/h6f/9471120310302.jpg", 
                    precio: "1,68€"
                },
                3: {
                    nombre: "Flan de huevo receta tradicional, elaborado al baño maria con leche recogida diariamente DHUL 4 x 110 grs", 
                    url: "https://www.alcampo.es/media/had/h73/11385326370846.jpg", 
                    precio: "1,95€"
                },
                4: {
                    nombre: "Postre lácteo (delicias) de trufa LA LECHERA de Nestlé 2 x 125 grs", 
                    url: "https://www.alcampo.es/media/h45/h9c/10032258875422.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "Mousse de yogur natural azucarado, elaborada sin gluten DANONE 4 x 65 grs", 
                    url: "https://www.alcampo.es/media/h3e/h6b/11434522607646.jpg", 
                    precio: "2,19€"
                },
                6: {
                    nombre: "Tarrina de mantequilla sin sal CENTRAL LECHERA ASTURIANA 250 grs", 
                    url: "https://www.alcampo.es/media/h55/hbd/9280767852574.jpg", 
                    precio: "2,42€"
                },
                7: {
                    nombre: "Margarina 3/4 con sal y sin aceite de Palma TULIPÁN 450 g.", 
                    url: "https://www.alcampo.es/media/h3d/hc2/11448737398814.jpg", 
                    precio: "2,54€"
                },
                8: {
                    nombre: "Nata líquida (18 % de materia grasa) para cocinar PASCUAL 200 ml.", 
                    url: "https://www.alcampo.es/media/h44/hb3/10493030858782.jpg", 
                    precio: "1,28€"
                },
                9: {
                    nombre: "Nata montada en spray CENTRAL LECHERA ASTURIANA 250 grs", 
                    url: "https://www.alcampo.es/media/he8/hb8/8927298289694.jpg", 
                    precio: "1,98€"
                },
            },
            carniceria:{
                0: {
                    nombre: "Entrecot de vacuno (peso aprox. 330 grs)", 
                    url: "https://s2.dia.es/medias/productimages/hcf/h55/10779310227486.jpg", 
                    precio: "6,93€"
                },
                1: {
                    nombre: "pechugas enteras de pollo bandeja (peso aprox. 880 grs)", 
                    url: "https://s0.dia.es/medias/h0d/h2a/10594922561566.jpg", 
                    precio: "6,29€"
                },
                2: {
                    nombre: "preparado de carne picada de vacuno bandeja 500 grs", 
                    url: "https://s3.dia.es/medias/productimages/hcb/h11/10704616456222.jpg", 
                    precio: "3,99€"
                },
                3: {
                    nombre: "SERRANO longaniza de pavo y pollo 320 grs", 
                    url: "https://s2.dia.es/medias/productimages/hcf/hff/10676999553054.jpg", 
                    precio: "1,99€"
                },
                4: {
                    nombre: "chistorra pieza 220 grs", 
                    url: "https://s0.dia.es/medias/ha0/hdf/8822466969630.jpg", 
                    precio: "1,25€"
                },
            },
            charcuteria:{
                0: {
                    nombre: "PHILADELPHIA queso para untar original tarrina 250 grs", 
                    url: "https://s3.dia.es/medias/productimages/ha1/h08/11100149448734.jpg", 
                    precio: "2,05€"
                },
                1: {
                    nombre: "EL CASERIO queso fundido burger con cheddar en lonchas paquete 185 grs", 
                    url: "https://s0.dia.es/medias/productimages/h8e/h13/11098841120798.jpg", 
                    precio: "1,69€"
                },
                2: {
                    nombre: "SÁNCHEZ ALCARAZ jamón de cebo Ibérico 50% pieza (peso aprox. 8 Kgs)", 
                    url: "https://s3.dia.es/medias/productimages/hd3/he7/11097384484894.jpg", 
                    precio: "125€"
                },
                3: {
                    nombre: "ARGAL Bonnatur jamón cocido en finas lonchas sobre 140 grs", 
                    url: "https://s1.dia.es/medias/productimages/h81/h36/10676792197150.jpg", 
                    precio: "2,29€"
                },
                4: {
                    nombre: "ELPOZO Selección jamón curado en lonchas sobre 115 gr", 
                    url: "https://s2.dia.es/medias/productimages/hee/hed/11078460801054.jpg", 
                    precio: "1,99€"
                },
            },
            pescaderia:{
                0: {
                    nombre: "LA GULA DEL NORTE con gambas al ajillo envase 110 grs", 
                    url: "https://s1.dia.es/medias/productimages/h75/h2e/10842923106334.jpg", 
                    precio: "3,19€"
                },
                1: {
                    nombre: "GALLINA BLANCA caldo para paella de marisco envase 1 lt", 
                    url: "https://s3.dia.es/medias/hed/h7e/10594445819934.jpg", 
                    precio: "2,95€"
                },
                2: {
                    nombre: "MARI MARINERA palitos de surimi refrigeradas MSC paquete 300 grs", 
                    url: "https://s0.dia.es/medias/h50/h4a/10521864077342.jpg", 
                    precio: "1,75€"
                },
                3: {
                    nombre: "EMBUMAR rodajas de mar selectas envase 200 grs", 
                    url: "https://s2.dia.es/medias/productimages/hb5/h6a/11100151742494.jpg", 
                    precio: "4,39€"
                },
                4: {
                    nombre: "AGUINAMAR mejillones cocidos envasado al vació 1 Kg", 
                    url: "https://s1.dia.es/medias/productimages/h86/hd6/10777973030942.jpg", 
                    precio: "4,89€"
                },
            },
            frutas_y_verduras:{
                0: {
                    nombre: "Aguacate bio bandeja 400 grs", 
                    url: "https://s3.dia.es/medias/hbc/h23/9583742222366.jpg", 
                    precio: "2,89€"
                },
                1: {
                    nombre: "Kiwi bandeja 700 grs", 
                    url: "https://s2.dia.es/medias/productimages/hb7/h9e/10927281143838.jpg", 
                    precio: "2,15€"
                },
                2: {
                    nombre: "Manzana Yello bandeja 700 grs", 
                    url: "https://s1.dia.es/medias/productimages/h52/had/11007157796894.jpg", 
                    precio: "2,59€"
                },
                3: {
                    nombre: "GENUINE COCONUT Coco troceado BIO bolsa 56 grs", 
                    url: "https://s2.dia.es/medias/productimages/h60/haf/11090925584414.jpg", 
                    precio: "0,99€"
                },
                4: {
                    nombre: "Banana bio bolsa (1.2 Kg aprox.)", 
                    url: "https://s0.dia.es/medias/productimages/h72/h41/10806535192606.jpg", 
                    precio: "2,39€"
                },
                5: {
                    nombre: "Ajo BIO malla 200 grs", 
                    url: "https://s3.dia.es/medias/productimages/h6e/h6d/11016736571422.jpg", 
                    precio: "1,49€"
                },
                6: {
                    nombre: "Cilantro 20 grs", 
                    url: "https://s1.dia.es/medias/hfc/h7d/9662449287198.jpg", 
                    precio: "1,35€"
                },
                7: {
                    nombre: "Jengibre bandeja 200 grs", 
                    url: "https://s2.dia.es/medias/productimages/ha8/h54/10943702007838.jpg", 
                    precio: "1,39€"
                },
                8: {
                    nombre: "Champiñón laminado bandeja 250 grs", 
                    url: "https://s1.dia.es/medias/hee/hc1/8833925971998.jpg", 
                    precio: "1,35€"
                },
                9: {
                    nombre: "VEGECAMPO lechuga Iceberg lavada bolsa 250 grs", 
                    url: "https://s2.dia.es/medias/productimages/hfd/h7b/10987955683358.jpg", 
                    precio: "0,85€"
                },
            },
        },
    },
    {
        supermercado : "carrefour",
        categorias:{
            platos_preparados:{
                0:{
                    nombre:"ensalada veggie tarrina 200grs",
                    url:"https://s3.dia.es/medias/productimages/hab/hed/10895682732062.jpg",
                    precio:"1,75€"
                },
                1:{
                    nombre:"ensalada thai tarrina 200grs",
                    url:"https://s0.dia.es/medias/productimages/h36/h5e/10895673229342.jpg",
                    precio:"1,75€"
                },
                2: {
                    nombre: "pizza jamón y queso envase 405 grs", 
                    url: "https://s2.dia.es/medias/productimages/h0c/hea/10870041968670.jpg", 
                    precio: "2,89€"
                },
                3: {
                    nombre: "pizza de pollo envase 410 grs", 
                    url: "https://s2.dia.es/medias/productimages/hd9/h5f/10870047604766.jpg", 
                    precio: "2,89€"
                },
                4: {
                    nombre: "pizza atún y bacon envase 405 grs", 
                    url: "https://s2.dia.es/medias/productimages/hee/h98/10870043344926.jpg",
                    precio: "2,89€"
                },
                5: {
                    nombre: "tortilla de patatas fresca sin cebolla envase 600 grs",
                    url: "https://s3.dia.es/medias/productimages/h85/h1a/11060759986206.jpg",
                    precio: "2,35€"
                },
                6: {
                    nombre: "tortilla de patatas fresca con cebolla envase 600 grs",
                    url: "https://s1.dia.es/medias/productimages/h75/h49/11060760313886.jpg",
                    precio: "2,35€"
                },
                7: {
                    nombre: "tortilla de patatas fresca con chorizo envase 600 grs",
                    url: "https://s1.dia.es/medias/productimages/h8c/h0b/10952749776926.jpg",
                    precio: "2,35€"
                },
                8: {
                    nombre: "ensalada César tarrina 210 grs", 
                    url: "https://s3.dia.es/medias/productimages/h2c/h87/10987954044958.jpg", 
                    precio: "2,19€"
                },
                9: {
                    nombre: "croquetas de jamón bandeja 162 gr", 
                    url: "https://s0.dia.es/medias/productimages/he3/h20/10976989872158.jpg", 
                    precio: "2,15€"
                }
            },
            despensa:{
                0: {
                    nombre: "arroz redondo paquete 1 Kg", 
                    url: "https://s0.dia.es/medias/productimages/hb8/h42/10676834861086.jpg", 
                    precio: "1,65€"
                },
                1: {
                    nombre: "espaguetis paquete 1 Kg", 
                    url: "https://s0.dia.es/medias/productimages/h6e/h6e/10712855052318.jpg", 
                    precio: "1,25€"
                },
                2: {
                    nombre: "pasta fresca con jamón ibérico bolsa 250 grs", 
                    url: "https://s1.dia.es/medias/productimages/h99/hfb/10886789726238.jpg", 
                    precio: "2,97€"
                },
                3: {
                    nombre: "fideo cabellín paquete 500 grs", 
                    url: "https://s0.dia.es/medias/productimages/h41/hb5/10797284687902.jpg", 
                    precio: "0,87€"
                },
                4: {
                    nombre: "cereales corn flakes caja 500 grs", 
                    url: "https://s2.dia.es/medias/productimages/h10/h6d/11076215570462.jpg", 
                    precio: "2,70€"
                },
                5: {
                    nombre: "leche entera envase 1 lt PACK 6", 
                    url: "https://s1.dia.es/medias/productimages/h1e/hda/10717082779678.jpg", 
                    precio: "4,50€"
                },
                6: {
                    nombre: "cocktail frutos secos bolsa 500 grs", 
                    url: "https://s2.dia.es/medias/hbf/h18/9847302062110.jpg", 
                    precio: "2,05€"
                },
                7: {
                    nombre: "aceite de oliva extra virgen botella 750 ml", 
                    url: "https://s3.dia.es/medias/productimages/h1d/h15/11037844209694.jpg", 
                    precio: "5,75€"
                },
                8: {
                    nombre: "ajo en polvo frasco 65 grs", 
                    url: "https://s2.dia.es/medias/he2/hfc/8859405123614.jpg", 
                    precio: "0,69€"
                },
                9: {
                    nombre: "agua mineral natural botella 1.5 lt PACK 6", 
                    url: "https://s1.dia.es/medias/productimages/hf5/he5/11033721405470.jpg", 
                    precio: "4,14€"
                },
                10: {
                    nombre: "café molido 100% Colombia paquete 250 grs", 
                    url: "https://s0.dia.es/medias/productimages/hf0/h66/10837617213470.jpg", 
                    precio: "3,25€"
                },
                11: {
                    nombre: "tomate frito envase 350 grs", 
                    url: "https://s3.dia.es/medias/h4e/hcf/11023246065694.jpg", 
                    precio: "0,85€"
                },
                12: {
                    nombre: "caldo de pollo estuche 24 pastillas", 
                    url: "https://s1.dia.es/medias/h71/h15/9334522839070.jpg", 
                    precio: "0,97€"
                },
                13: {
                    nombre: "pan de molde formato familiar bolsa 700 grs", 
                    url: "https://s0.dia.es/medias/productimages/hab/h29/10786470297630.jpg", 
                    precio: "2,49€"
                },
                14: {
                    nombre: "salsa de soja botella 150 ml", 
                    url: "https://s0.dia.es/medias/productimages/h93/h6c/11094508371998.jpg", 
                    precio: "1,99€"
                },
            },
            mascotas:{
                0: {
                    nombre: "alimento para perros mini bolsa 1,5 kg", 
                    url: "https://s3.dia.es/medias/h51/h8f/10661338054686.jpg", 
                    precio: "6,39€"
                },
                1: {
                    nombre: "alimento para gatos mix buey bolsa 1,5 kg", 
                    url: "https://s2.dia.es/medias/hee/hbe/10661309218846.jpg", 
                    precio: "4,65€"
                },
                2: {
                    nombre: "alimento para perros receta tradicional bolsa 4 kg", 
                    url: "https://s3.dia.es/medias/h5f/h2f/10661355225118.jpg", 
                    precio: "6,79€"
                },
                3: {
                    nombre: "detergente para ropa y cama de mascotas botella 1 lt", 
                    url: "https://s1.dia.es/medias/heb/h68/9561295257630.jpg", 
                    precio: "5,15€"
                },
                4: {
                    nombre: "barritas con frutas para canarios bolsa 70 grs", 
                    url: "https://s2.dia.es/medias/ha5/h3e/8846782529566.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "One alimento para gatos junior bolsa 450 grs", 
                    url: "https://s2.dia.es/medias/h48/h0a/10953864413214.jpg", 
                    precio: "2,79€"
                },
                6: {
                    nombre: "cepillo raqueta caucho 1 ud", 
                    url: "https://s3.dia.es/medias/h7a/hfd/8868541169694.jpg", 
                    precio: "1,99€"
                },
                7: {
                    nombre: "pelota para perros 1 ud", 
                    url: "https://s0.dia.es/medias/h2d/h26/8872827650078.jpg", 
                    precio: "3,85€"
                },
                8: {
                    nombre: "champú para perros pelo negro bote 300 ml", 
                    url: "https://s0.dia.es/medias/h3f/h83/9390412464158.jpg", 
                    precio: "5,29€"
                },
                9: {
                    nombre: "agua de colonia fresca para perros spray 125 ml", 
                    url: "https://s2.dia.es/medias/h27/h81/9390410498078.jpg",
                    precio: "4,75€"
                },
            },
            bebe:{
                0: {
                    nombre: "champú infantil clásico bote 750 ml", 
                    url: "https://s1.dia.es/medias/h69/h99/9158125191198.jpg", 
                    precio: "2,39€"
                },
                1: {
                    nombre: "toallitas para bebés envase 80 uds", 
                    url: "https://s2.dia.es/medias/productimages/h28/h15/10954616012830.jpg", 
                    precio: "1,09€"
                },
                2: {
                    nombre: "crema protectora de pañal tubo 100 ml", 
                    url: "https://s3.dia.es/medias/productimages/h56/ha1/10939360477214.jpg", 
                    precio: "3,69€"
                },
                3: {
                    nombre: "jabon liquido infantil lavanda botella 750ml", 
                    url: "https://s1.dia.es/medias/hc1/hb0/9158100025374.jpg", 
                    precio: "1,99€"
                },
                4: {
                    nombre: "colonia infantil botella 750 ml", 
                    url: "https://s3.dia.es/medias/h07/h95/8958623023134.jpg", 
                    precio: "1,79€"
                },
                5: {
                    nombre: "leche infantil 3 bote 800 grs", 
                    url: "https://s2.dia.es/medias/productimages/h4f/h7b/10988153503774.jpg", 
                    precio: "14,99€"
                },
                6: {"nombre": "calzoncillos para niños absorbentes de 4 a 7 años paquete 10 uds", 
                    url: "https://s0.dia.es/medias/productimages/hdc/h35/10782312562718.jpg", 
                    precio: "14,49€"
                },
                7: {
                    nombre: "frutas variadas tarrito 2 x200 gr", 
                    url: "https://s3.dia.es/medias/hfa/h3c/8862312693790.jpg", 
                    precio: "1,77€"
                },
                8: {
                    nombre: "esponja especial de baño para bebé bolsa 1 ud", 
                    url: "https://s1.dia.es/medias/hce/h0a/8856386273310.jpg", 
                    precio: "4,45€"
                },
                9: {
                    nombre: "Baby talco dulces sueños para bebés bote 200 grs", 
                    url: "https://s0.dia.es/medias/productimages/h29/h59/10939392000030.jpg", 
                    precio: "3,05€"
                },
            },
            cuidado_para_el_hogar:{
                0: {
                    nombre: "ambientador neutralizador aroma lavanda spray 300 ml", 
                    url: "https://s2.dia.es/medias/hfb/h3f/9709996408862.jpg", 
                    precio: "1,15€"
                },
                1: {
                    nombre: "gel limpiador wc 3 en 1 océano botella 750 ml", 
                    url: "https://s0.dia.es/medias/h88/hc6/11030574792734.jpg", 
                    precio: "2,39€"
                },
                2: {
                    nombre: "palo rojo universal 1 ud", 
                    url: "https://s1.dia.es/medias/productimages/he7/h26/10844406022174.jpg", 
                    precio: "3,95€"
                },
                3: {
                    nombre: "estropajo salvauñas fibra verde paquete 4 uds", 
                    url: "https://s2.dia.es/medias/h01/haf/9354601299998.jpg", 
                    precio: "0,97€"
                },
                4: {
                    nombre: "ambientador eléctrico aroma aire fresco recambio 1 ud", 
                    url: "https://s2.dia.es/medias/productimages/h92/h71/10980041392158.jpg", 
                    precio: "3,79€"
                },
                5: {
                    nombre: "fregona hilo microfibras especial para suelos delicados bolsa 1 ud", 
                    url: "https://s3.dia.es/medias/h92/h7c/8872695398430.jpg", 
                    precio: "1,59€"
                },
                6: {
                    nombre: "descalcificador de lavadora en pastillas caja 15 ud", 
                    url: "https://s0.dia.es/medias/productimages/hb2/hba/10836376289310.jpg", 
                    precio: "8,49€"
                },
                7: {
                    nombre: "bayeta amarilla super absorbente y extra suave bolsa 3 uds", 
                    url: "https://s0.dia.es/medias/productimages/hf0/hfb/10949995069470.jpg", 
                    precio: "2,69€"
                },
                8: {
                    nombre: "cepillo antichoque de escoba 3 en 1", 
                    url: "https://s0.dia.es/medias/productimages/hfd/he3/11097403490334.jpg", 
                    precio: "4,65€"
                },
                9: {
                    nombre: "tijeras multiusos S/M 1 ud", 
                    url: "https://s1.dia.es/medias/h15/ha2/8959536300062.jpg", 
                    precio: "3,29€"
                },
            },
            cuidado_personal:{
                0: {
                    nombre: "enjuague bucal zero 500 ml", 
                    url: "https://s2.dia.es/medias/productimages/h74/hdc/10995930398750.jpg", 
                    precio: "5,49€"
                },
                1: {
                    nombre: "compresa super con alas bolsa 12 uds", 
                    url: "https://s3.dia.es/medias/productimages/h9b/he7/10988073418782.jpg", 
                    precio: "2,89€"
                },
                2: {
                    nombre: "tinte Negro Azulado Nº 1,1 caja 1 ud", 
                    url: "https://s2.dia.es/medias/productimages/h5f/hd4/10684455485470.jpg", 
                    precio: "4,59€"
                },
                3: {
                    nombre: "Fresh step desodorante para pies spray 150 ml", 
                    url: "https://s2.dia.es/medias/hcf/he8/9639159300126.jpg", 
                    precio: "5,50€"
                },
                4: {
                    nombre: "gel fijador efecto cemento tarro 300 ml", 
                    url: "https://s3.dia.es/medias/ha3/haf/9561293946910.jpg", 
                    precio: "3,79€"
                },
                5: {
                    nombre: "cepillo dental professional medio blíster 1 ud", 
                    url: "https://s3.dia.es/medias/h42/h43/10998992240670.jpg", 
                    precio: "2,45€"
                },
                6: {
                    nombre: "hojas de afeitar classic blíster 5 uds", 
                    url: "https://s1.dia.es/medias/h58/hd7/8963438837790.jpg", 
                    precio: "2,79€"
                },
                7: {
                    nombre: "desodorante apollo spray 150 ml", 
                    url: "https://s0.dia.es/medias/hb3/h12/10465571536926.jpg", 
                    precio: "3,99€"
                },
                8: {
                    nombre: "jabón de manos pura y sensitiva pastilla 100 grs", 
                    url: "https://s1.dia.es/medias/h57/he9/10770326847518.jpg", 
                    precio: "1,49€"
                },
                9: {
                    nombre: "cepillo dental eléctrico floss tip 360º blíster 1 uds", 
                    url: "https://s2.dia.es/medias/productimages/hf7/hcc/11053856489502.jpg", 
                    precio: "9,99€"
                },
            },
            bebidas:{
                0: {
                    nombre: "cerveza clásica lata 33 cl", 
                    url: "https://s2.dia.es/medias/hed/h6b/11078438518814.jpg", 
                    precio: "0,50€"
                },
                1: {
                    nombre: "cerveza lata 50 cl", 
                    url: "https://s3.dia.es/medias/h5f/ha9/9626455638046.jpg", 
                    precio: "0,99€"
                },
                2: {
                    nombre: "bebida energética lata 25 cl", 
                    url: "https://s1.dia.es/medias/h59/h22/10908046262302.jpg", 
                    precio: "0,99€"
                },
                3: {
                    nombre: "limón zero botella 2 lts", 
                    url: "https://s0.dia.es/medias/productimages/h4a/hce/11076053041182.jpg", 
                    precio: "1,59€"
                },
                4: {
                    nombre: "sprite botella 2 lts", 
                    url: "https://s0.dia.es/medias/hd2/hc6/10742032728094.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "COCA COLA zero botella 2 lts", 
                    url: "https://s0.dia.es/medias/hf2/h42/11075969744926.jpg", 
                    precio: "1,84€"
                },
                6: {
                    nombre: "sunny delight sabor florida botella 310 ml", 
                    url: "https://s3.dia.es/medias/productimages/h34/ha7/10742378332190.jpg", 
                    precio: "0,89€"
                },
                7: {
                    nombre: "BUDWEISER cerveza pack 6 botellas 25 cl", 
                    url: "https://s2.dia.es/medias/productimages/he2/ha4/11069566189598.jpg", 
                    precio: "4,49€"
                },
                8: {
                    nombre: "MONSTER bebida energética green lata 50 cl", 
                    url: "https://s1.dia.es/medias/productimages/h7f/h30/10803178307614.jpg", 
                    precio: "1,59€"
                },
                9: {
                    nombre: "FANTA naranja zero botella 2 lts", 
                    url: "https://s1.dia.es/medias/productimages/h62/hf1/11012070932510.jpg", 
                    precio: "1,59€"
                },
            },
            bodega:{
                0: {
                    nombre: "JACK DANIELS whisky tenessee botella 70 cl", 
                    url: "https://s1.dia.es/medias/hff/h26/8865934966814.jpg", 
                    precio: "21,69€"
                },
                1: {
                    nombre: "BACARDI ron blanco superior botella 70 cl", 
                    url: "https://s2.dia.es/medias/productimages/h73/h6b/10971763441694.jpg", 
                    precio: "12,59€"
                },
                2: {
                    nombre: "TANQUERAY ginebra london dry botella 70 cl", 
                    url: "https://s0.dia.es/medias/h29/h17/10847120719902.jpg", 
                    precio: "13,59€"
                },
                3: {
                    nombre: "EL COTO vino tinto crianza DO Rioja botella 75 cl", 
                    url: "https://s1.dia.es/medias/he1/h0b/10659128705054.jpg", 
                    precio: "6,15€"
                },
                4: {
                    nombre: "BOMBAY Original ginebra london dry botella 70 cl", 
                    url: "https://s3.dia.es/medias/productimages/h00/h52/10971765735454.jpg", 
                    precio: "12,49€"
                },
                5: {
                    nombre: "PASSPORT whisky botella 70 cl", 
                    url: "https://s0.dia.es/medias/h44/h98/10660203298846.jpg", 
                    precio: "9,99€"
                },
                6: {
                    nombre: "BAJOZ vino tinto DO Toro botella 75 cl", 
                    url: "https://s1.dia.es/medias/productimages/hfc/hd5/10996233273374.jpg", 
                    precio: "3,99€"
                },
                7: {
                    nombre: "FEDERICO PATERNINA vino tinto 12 meses banda azul DO Rioja botella 75 cl", 
                    url: "https://s0.dia.es/medias/productimages/h1a/h68/10797319290910.jpg", 
                    precio: "5,99€"
                },
                8: {
                    nombre: "GORDONS ginebra botella 1 lt", 
                    url: "https://s2.dia.es/medias/h7a/h08/10847111479326.jpg", 
                    precio: "12,99€"
                },
                9: {
                    nombre: "ALVINI vermouth rosso botella 1 lt", 
                    url: "https://s3.dia.es/medias/productimages/h67/h5e/10945399848990.jpg", 
                    precio: "2,25€"
                },
            },
            congelados:{
                0: {
                    nombre: "HAAGEN DAZS helado dulce de leche tarrina 400 grs", 
                    url: "https://s3.dia.es/medias/h31/h1b/10467447963678.jpg", 
                    precio: "6,49€"
                },
                1: {
                    nombre: "OREO helado bombón caja 4 uds 260 grs", 
                    url: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202202/14/00118953905538____5__600x600.jpg", 
                    precio: "4,39€"
                },
                2: {
                    nombre: "MILKA helado cono chocolate y vainilla caja 4 uds 270 grs", 
                    url: "https://s3.dia.es/medias/h69/hf3/10660066787358.jpg", 
                    precio: "4,39€"
                },
                3: {
                    nombre: "McCain patatas fritas forno julienne bolsa 600 grs", 
                    url: "https://s1.dia.es/medias/h75/h57/10867351191582.jpg", 
                    precio: "3,09€"
                },
                4: {
                    nombre: "DIA VEGECAMPO menestra de verduras bolsa 1 kg", 
                    url: "https://s2.dia.es/medias/productimages/h51/h86/10976954679326.jpg", 
                    precio: "1,19€"
                },
                5: {
                    nombre: "NORTINDAL pack tinta de calamar 4 unidades 4 gr", 
                    url: "https://s2.dia.es/medias/he5/hcd/10324977057822.jpg", 
                    precio: "0,75€"
                },
                6: {
                    nombre: "BUITONI Forno di pietra pizza jamón y queso caja 360 grs", 
                    url: "https://s3.dia.es/medias/productimages/h97/h44/10874237452318.jpg", 
                    precio: "3,59€"
                },
                7: {
                    nombre: "DR OETKER ristorante pizza atún caja 355 grs", 
                    url: "https://s3.dia.es/medias/productimages/hcc/h34/11093296414750.jpg", 
                    precio: "3,59€"
                },
                8: {
                    nombre: "PESCANOVA calamar limpio envase 400 grs", 
                    url: "https://s2.dia.es/medias/productimages/hc3/h91/10681534545950.jpg", 
                    precio: "5,55€"
                },
                9: {
                    nombre: "MARI MARINERA gamba pelada grande bolsa 400 grs", 
                    url: "https://s2.dia.es/medias/productimages/h89/h2a/10807427399710.jpg", 
                    precio: "6,25€"
                },
            },
            refrigerados:{
                0: {
                    nombre: "Pudding de chocolate con alto contenido en proteinas y bajo en grasas YOPRO de Danone 180 g.", 
                    url: "https://www.alcampo.es/media/hac/h28/11522987622430.jpg", 
                    precio: "1,59€"
                },
                1: {
                    nombre: "Natillas de vainilla elaboradas sin gluten DANET de Danone 8 x 120 grs", 
                    url: "https://www.alcampo.es/media/hf6/h8a/9317474041886.jpg", 
                    precio: "2,99€"
                },
                2: {
                    nombre: "Kefir natural de leche de vaca de pasto EL PASTORET 500 g.", 
                    url: "https://www.alcampo.es/media/h78/h6f/9471120310302.jpg", 
                    precio: "1,68€"
                },
                3: {
                    nombre: "Flan de huevo receta tradicional, elaborado al baño maria con leche recogida diariamente DHUL 4 x 110 grs", 
                    url: "https://www.alcampo.es/media/had/h73/11385326370846.jpg", 
                    precio: "1,95€"
                },
                4: {
                    nombre: "Postre lácteo (delicias) de trufa LA LECHERA de Nestlé 2 x 125 grs", 
                    url: "https://www.alcampo.es/media/h45/h9c/10032258875422.jpg", 
                    precio: "1,45€"
                },
                5: {
                    nombre: "Mousse de yogur natural azucarado, elaborada sin gluten DANONE 4 x 65 grs", 
                    url: "https://www.alcampo.es/media/h3e/h6b/11434522607646.jpg", 
                    precio: "2,19€"
                },
                6: {
                    nombre: "Tarrina de mantequilla sin sal CENTRAL LECHERA ASTURIANA 250 grs", 
                    url: "https://www.alcampo.es/media/h55/hbd/9280767852574.jpg", 
                    precio: "2,42€"
                },
                7: {
                    nombre: "Margarina 3/4 con sal y sin aceite de Palma TULIPÁN 450 g.", 
                    url: "https://www.alcampo.es/media/h3d/hc2/11448737398814.jpg", 
                    precio: "2,54€"
                },
                8: {
                    nombre: "Nata líquida (18 % de materia grasa) para cocinar PASCUAL 200 ml.", 
                    url: "https://www.alcampo.es/media/h44/hb3/10493030858782.jpg", 
                    precio: "1,28€"
                },
                9: {
                    nombre: "Nata montada en spray CENTRAL LECHERA ASTURIANA 250 grs", 
                    url: "https://www.alcampo.es/media/he8/hb8/8927298289694.jpg", 
                    precio: "1,98€"
                },
            },
            carniceria:{
                0: {
                    nombre: "Entrecot de vacuno (peso aprox. 330 grs)", 
                    url: "https://s2.dia.es/medias/productimages/hcf/h55/10779310227486.jpg", 
                    precio: "6,93€"
                },
                1: {
                    nombre: "pechugas enteras de pollo bandeja (peso aprox. 880 grs)", 
                    url: "https://s0.dia.es/medias/h0d/h2a/10594922561566.jpg", 
                    precio: "6,29€"
                },
                2: {
                    nombre: "preparado de carne picada de vacuno bandeja 500 grs", 
                    url: "https://s3.dia.es/medias/productimages/hcb/h11/10704616456222.jpg", 
                    precio: "3,99€"
                },
                3: {
                    nombre: "SERRANO longaniza de pavo y pollo 320 grs", 
                    url: "https://s2.dia.es/medias/productimages/hcf/hff/10676999553054.jpg", 
                    precio: "1,99€"
                },
                4: {
                    nombre: "chistorra pieza 220 grs", 
                    url: "https://s0.dia.es/medias/ha0/hdf/8822466969630.jpg", 
                    precio: "1,25€"
                },
            },
            charcuteria:{
                0: {
                    nombre: "PHILADELPHIA queso para untar original tarrina 250 grs", 
                    url: "https://s3.dia.es/medias/productimages/ha1/h08/11100149448734.jpg", 
                    precio: "2,05€"
                },
                1: {
                    nombre: "EL CASERIO queso fundido burger con cheddar en lonchas paquete 185 grs", 
                    url: "https://s0.dia.es/medias/productimages/h8e/h13/11098841120798.jpg", 
                    precio: "1,69€"
                },
                2: {
                    nombre: "SÁNCHEZ ALCARAZ jamón de cebo Ibérico 50% pieza (peso aprox. 8 Kgs)", 
                    url: "https://s3.dia.es/medias/productimages/hd3/he7/11097384484894.jpg", 
                    precio: "125€"
                },
                3: {
                    nombre: "ARGAL Bonnatur jamón cocido en finas lonchas sobre 140 grs", 
                    url: "https://s1.dia.es/medias/productimages/h81/h36/10676792197150.jpg", 
                    precio: "2,29€"
                },
                4: {
                    nombre: "ELPOZO Selección jamón curado en lonchas sobre 115 gr", 
                    url: "https://s2.dia.es/medias/productimages/hee/hed/11078460801054.jpg", 
                    precio: "1,99€"
                },
            },
            pescaderia:{
                0: {
                    nombre: "LA GULA DEL NORTE con gambas al ajillo envase 110 grs", 
                    url: "https://s1.dia.es/medias/productimages/h75/h2e/10842923106334.jpg", 
                    precio: "3,19€"
                },
                1: {
                    nombre: "GALLINA BLANCA caldo para paella de marisco envase 1 lt", 
                    url: "https://s3.dia.es/medias/hed/h7e/10594445819934.jpg", 
                    precio: "2,95€"
                },
                2: {
                    nombre: "MARI MARINERA palitos de surimi refrigeradas MSC paquete 300 grs", 
                    url: "https://s0.dia.es/medias/h50/h4a/10521864077342.jpg", 
                    precio: "1,75€"
                },
                3: {
                    nombre: "EMBUMAR rodajas de mar selectas envase 200 grs", 
                    url: "https://s2.dia.es/medias/productimages/hb5/h6a/11100151742494.jpg", 
                    precio: "4,39€"
                },
                4: {
                    nombre: "AGUINAMAR mejillones cocidos envasado al vació 1 Kg", 
                    url: "https://s1.dia.es/medias/productimages/h86/hd6/10777973030942.jpg", 
                    precio: "4,89€"
                },
            },
            frutas_y_verduras:{
                0: {
                    nombre: "Aguacate bio bandeja 400 grs", 
                    url: "https://s3.dia.es/medias/hbc/h23/9583742222366.jpg", 
                    precio: "2,89€"
                },
                1: {
                    nombre: "Kiwi bandeja 700 grs", 
                    url: "https://s2.dia.es/medias/productimages/hb7/h9e/10927281143838.jpg", 
                    precio: "2,15€"
                },
                2: {
                    nombre: "Manzana Yello bandeja 700 grs", 
                    url: "https://s1.dia.es/medias/productimages/h52/had/11007157796894.jpg", 
                    precio: "2,59€"
                },
                3: {
                    nombre: "GENUINE COCONUT Coco troceado BIO bolsa 56 grs", 
                    url: "https://s2.dia.es/medias/productimages/h60/haf/11090925584414.jpg", 
                    precio: "0,99€"
                },
                4: {
                    nombre: "Banana bio bolsa (1.2 Kg aprox.)", 
                    url: "https://s0.dia.es/medias/productimages/h72/h41/10806535192606.jpg", 
                    precio: "2,39€"
                },
                5: {
                    nombre: "Ajo BIO malla 200 grs", 
                    url: "https://s3.dia.es/medias/productimages/h6e/h6d/11016736571422.jpg", 
                    precio: "1,49€"
                },
                6: {
                    nombre: "Cilantro 20 grs", 
                    url: "https://s1.dia.es/medias/hfc/h7d/9662449287198.jpg", 
                    precio: "1,35€"
                },
                7: {
                    nombre: "Jengibre bandeja 200 grs", 
                    url: "https://s2.dia.es/medias/productimages/ha8/h54/10943702007838.jpg", 
                    precio: "1,39€"
                },
                8: {
                    nombre: "Champiñón laminado bandeja 250 grs", 
                    url: "https://s1.dia.es/medias/hee/hc1/8833925971998.jpg", 
                    precio: "1,35€"
                },
                9: {
                    nombre: "VEGECAMPO lechuga Iceberg lavada bolsa 250 grs", 
                    url: "https://s2.dia.es/medias/productimages/hfd/h7b/10987955683358.jpg", 
                    precio: "0,85€"
                },
            },
        },
    },
]
var json = JSON.stringify(supermercados);
console.log(json);
var nombre = [];
pintarResultado(supermercados);
function pintarResultado(data)
{
    console.log(data);
    for(let producto of data)
    {
        nombre.push(producto.categorias.congelados);
        //console.log(nombre);
        //console.log(data);
    }
    console.log(nombre);
    console.log(nombre[0][0].nombre);
}

    const formulario = document.querySelector('#validationCustom01');
    const boton = document.querySelector('#boton');
    const resultado=document.querySelector('#resultado')

      const filtrar = ()=>
      {
        resultado.innerHTML = '';
        const texto = formulario.value.toLowerCase();
        console.log(texto);

    for (let i = 0; i < nombre.length; i++) 
    {
       for (let j = 0; j < nombre.length; j++)
        {
                if(nombre[i][j].nombre.toLowerCase().indexOf(texto)!== -1)
                {
                    resultado.innerHTML+='<li>'+nombre[i][j].nombre+'-Valor: '+nombre[i][j].precio + '</li>'
                }
                console.log(nombre[i][j].nombre.toLowerCase());
        }   
    }
    if( resultado.innerHTML === '')
    {
        resultado.innerHTML+='<li>Producto no encontrado ...</li>'
    }

      }
    boton.addEventListener('click',filtrar)
