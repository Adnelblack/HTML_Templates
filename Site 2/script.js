function background() {
var bgcolorlist=new Array("#DFDFFF", "#FFFFBF", "#80FF80", "#EAEAFF", "#C9FFA8", "#F7F7F7", "#FFFFFF", "#DDDD00")

document.body.style.background=bgcolorlist[Math.floor(Math.random()*bgcolorlist.length)]
}

function carrinho() {
    var total = 0;
    var i = 0;
    var valor = 0;
    
    for(i=1; i<=99; i++)
    {
        var prod = localStorage.getItem("produto" + i + "");
        if(prod != null)
        {	
            document.getElementById("prato").innerHTML += localStorage.getItem("qtd" + i) + " x ";
            document.getElementById("prato").innerHTML += localStorage.getItem("produto" + i);
            document.getElementById("prato").innerHTML += " ";
            document.getElementById("prato").innerHTML += "R$: " + localStorage.getItem("valor" + i) + "<hr>";
            
            
            valor = parseFloat(localStorage.getItem("valor" + i));
            total = (total + valor); 
        }
    } 
    document.getElementById("total").innerHTML = total.toFixed(2); 
}

function AddCarrinho(produto, qtd, valor, posicao)
				{
					localStorage.setItem("produto" + posicao, produto);
					localStorage.setItem("qtd" + posicao, qtd);
					valor = valor * qtd;
					localStorage.setItem("valor" + posicao, valor);
					alert("Produto adicionado ao carrinho!");
				}