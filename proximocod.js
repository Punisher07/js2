// Rotina Javascript para arrumar "próximo código" do cadastro de roupas.
// Desenvolvido (de uma maneira MUITO simples) por Paulo César Fratantonio
function inccod()
{
	var codigo = document.getElementById("id_sc_field_codigo").value;
	if (codigo > 2000000)
	{
		pcodigo++;
		window.localStorage.setItem('pcod', pcodigo);
	}
};
window.localStorage.setItem('pcod', 3500001);
var pcodigo = window.localStorage.getItem('pcod');
document.getElementById("id_sc_field_codigo").value = pcodigo;
document.getElementById("sc_b_sai_t").onclick = inccod();
// javascript:(function () { $('<script>').attr('src', 'https://raw.githubusercontent.com/Punisher07/js2/master/proximocod.js'); })();