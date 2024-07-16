const tabs = document.querySelectorAll('[data-form]');
const forms=document.querySelectorAll('[data-form-id]');

for(let i=0; i <tabs.length ;i++){
    tabs[i].addEventListener('click',()=>{
        //removemos la clase active de todod los tabs encontrados
        tabs.forEach((tabs)=>tabs.classList.remove('active'));
        //le agregamos la clase active al tab que se le hizo click
        tabs[i].classList.add('active');
        //mostramos el formulario correpondiente
        //para los formularios funciona exactamente los mismos
        forms.forEach((form)=>form.classList.remove('active'));
        forms[i].classList.add('active');
    })
}
