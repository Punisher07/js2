// Rotina Javascript para arrumar "próximo código" do cadastro de roupas.
// Desenvolvido (de uma maneira MUITO simples) por Paulo César Fratantonio

window.localStorage.setItem('pcod', 5);	// # # USAR SOMENTE A 1A VEZ! # #
var pcodigo = window.localStorage.getItem('pcod'); // TRAZ O CODIGO DO STORAGE
document.getElementById("id_sc_field_codigo").value = pcodigo; // ACERTA O CAMPO DO CÓDIGO

sc_b_ins_t.onclick = function inccod(); // adiciona função no incluir que incrementa contagem

function inccod()
{
	var codigo = document.getElementById("id_sc_field_codigo").value;
	if (codigo > 2000000)
	{
		{ pcodigo++;window.localStorage.setItem('pcod', pcodigo);
	}
}