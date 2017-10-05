function inccod()
{
		alert(pcodigo);
		pcodigo++;
		window.localStorage.setItem('pcod', pcodigo);
		alert(pcodigo);
		document.getElementById('id_sc_field_codigo').value = pcodigo;
};
window.localStorage.setItem('pcod', 3500001);
var pcodigo = window.localStorage.getItem('pcod');
document.getElementById('id_sc_field_codigo').value = pcodigo;
document.getElementById("id_sc_field_descricao").onChange = inccod();
